import React, { useState } from "react";
import { DrawerBar } from "./DrawerBar";
import { Typography, Input, Avatar, Button } from "@material-tailwind/react";
import { ImageUpload } from "./ImageUpload";
import { toast } from "react-toastify";
import axios from "axios";
import { BsThreeDots } from "react-icons/bs";
import { FileUpload } from "./FileUpload";
import { jwtDecode } from "jwt-decode";

export const ProfileSetting = () => {
  const initialState = {
    email: "",
    fullName: "",
    date: "",
    phone: "",
    gender: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem("token");
  const decodedToken = token ? jwtDecode(token) : null;

  const Inputs = [
    {
      label: "Full Name",
      name: "fullName",
      type: "text",
      placeholder: "Mostafa Abd El-Rasheed",
    },
    {
      label: "Phone Number",
      name: "phone",
      type: "text",
      placeholder: "+44 1245 572 135",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "name@mail.com",
    },
    {
      label: "Date of Birth",
      name: "date",
      type: "date",
    },
    {
      label: "Gender",
      name: "gender",
      type: "select",
      options: ["Male", "Female", "Other"],
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.fullName) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }
    if (!formData.date) {
      newErrors.date = "Date of birth is required";
      isValid = false;
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    }
    if (!formData.gender) {
      newErrors.gender = "Gender is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/api/profiles/${decodedToken?.nameid}`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast.success("Profile updated successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "An unexpected error occurred";
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='w-full p-4 flex flex-col gap-6'>
      <div className='flex items-center justify-between border-b-2 border-[#D6DDEB] pb-4'>
        <div>
          <Typography variant='h5' className='text-[#183F5B] font-bold'>
            Basic Information
          </Typography>
          <p>This is your personal information that you can update anytime.</p>
        </div>
        <div className='block lg:hidden'>
          <DrawerBar />
        </div>
      </div>

      <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
        <div className='flex flex-col lg:flex-row items-center gap-6 border-b-2 border-[#D6DDEB] pb-4'>
          <div className='flex-1'>
            <Typography variant='h5' className='text-[#183F5B] font-bold'>
              Profile Photo
            </Typography>
            <p>
              This image will be shown publicly as your profile picture, it will
              help recruiters recognize you!
            </p>
          </div>
          <Avatar
            src='https://docs.material-tailwind.com/img/face-2.jpg'
            alt='avatar'
            variant='rounded'
            className='w-20 h-20'
          />
          <ImageUpload />
        </div>

        <div className='flex flex-col gap-6'>
          <Typography variant='h5' className='text-[#183F5B] font-bold mb-4'>
            Personal Information
          </Typography>
          <div className='flex flex-col md:flex-row flex-wrap gap-6 border-b-2 border-[#D6DDEB] pb-4'>
            {Inputs.map(({ label, name, type, placeholder, options }) => (
              <div key={name} className='flex flex-col gap-2 min-w-[250px]'>
                <Typography variant='h6' color='blue-gray'>
                  {label}
                </Typography>
                {type === "select" ? (
                  <select
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className='w-full border-gray-300 rounded-md p-2 ring-2 ring-[#183F5B]'>
                    <option value=''>Select...</option>
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <Input
                    id={name}
                    name={name}
                    type={type}
                    value={formData[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className='w-full placeholder:opacity-100'
                    labelProps={{ className: "hidden" }}
                    error={!!errors[name]}
                    disabled={name === "email"}
                  />
                )}
                {errors[name] && (
                  <p className='text-red-500 text-sm'>{errors[name]}</p>
                )}
              </div>
            ))}
          </div>

          <div className='flex flex-col gap-6'>
            <Typography variant='h5' className='text-[#183F5B] font-bold mb-4'>
              Attachments
            </Typography>
            <div className='flex flex-col md:flex-row flex-wrap gap-6'>
              <div className='bg-[#F8F8FD] text-[#7C8493] p-4 rounded-xl border-1 border-dashed border-[#877474] flex items-center justify-between gap-6'>
                <img src='/Res-icon.png' alt='resume-icon' />
                <div>
                  <Typography variant='h6' color='blue-gray'>
                    Resume / CV
                  </Typography>
                  <p className='text-sm'>4.5 MB</p>
                </div>
                <BsThreeDots />
              </div>
              <FileUpload />
            </div>
          </div>

          <Button
            type='submit'
            disabled={isLoading}
            className='p-4 bg-[#183F5B] text-white font-semibold rounded-lg hover:bg-[#0f2d42] transition disabled:opacity-50'>
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </form>
    </div>
  );
};
