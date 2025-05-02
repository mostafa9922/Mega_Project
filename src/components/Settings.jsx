import React from "react";
import { NavMenu } from "./NavMenu";
import { DrawerBar } from "./DrawerBar";
import {
  Card,
  Typography,
  Input,
  Avatar,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { ImageUpload } from "./ImageUpload";
import { useState } from "react";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

function DefaultSidebar({ setLoggedIn }) {
  const handleSignOut = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  return (
    <Card className='h-full w-full max-w-[12rem] p-4 shadow-xl border-r-2 border-[#C3C6CF] rounded-none'>
      <div className='mb-2 p-4'>
        <Typography variant='h3' className='text-[#183F5B] font-bold'>
          Settings
        </Typography>
      </div>
      <ul className='flex flex-col justify-between gap-4 px-4 h-full text-[#7A7D85] font-bold'>
        <div className='flex flex-col gap-4'>
          <li className='text-[#183F5B] border-l-4 border-[#183F5B] pl-5'>
            My Profile
          </li>
          <li>Security</li>
        </div>
        <div className='text-[#2F2F2F] font-bold'>
          <Link
            to='/login'
            onClick={handleSignOut}
            className='flex items-center gap-2'>
            <img src='logOut.png' alt='logout' className='w-6 h-6' />
            Log Out
          </Link>
        </div>
      </ul>
    </Card>
  );
}

export const Settings = ({ loggedIn, setLoggedIn }) => {
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
      placeholder: "",
    },
    {
      label: "Gender",
      name: "gender",
      type: "select",
      placeholder: "Male / Female / Other",
      options: ["Male", "Female", "Other"],
    },
  ];
  const [formData, setFormData] = React.useState({
    email: "",
    fullName: "",
    date: "",
    phone: "",
    gender: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    date: "",
    phone: "",
    gender: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");
  const decodedToken = token ? jwtDecode(token) : null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {
      fullName: "",
      date: "",
      phone: "",
      gender: "",
    };
    let isValid = true;

    if (!formData.fullName) {
      newErrors.fullName = "FullName is required";
      isValid = false;
    }
    if (!formData.date) {
      newErrors.date = "Date is required";
      isValid = false;
    }
    if (!formData.phone) {
      newErrors.phone = "Phone is required";
      isValid = false;
    }
    if (!formData.gender) {
      newErrors.password = "Gender is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({ fullName: "", date: "", phone: "", gender: "", general: "" });

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/profiles/${decodedToken.nameid}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);

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
      setIsSubmitting(false);
    }
  };

  return (
    <div className='min-h-screen flex flex-col'>
      <NavMenu loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <div className='flex flex-col lg:flex-row gap-4 flex-grow'>
        <div className='hidden lg:block'>
          <DefaultSidebar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </div>

        <div className='w-full p-4 flex flex-col gap-6'>
          <div className='flex items-center justify-between border-b-2 border-[#D6DDEB] pb-4'>
            <div>
              <Typography variant='h5' className='text-[#183F5B] font-bold'>
                Basic Information
              </Typography>
              <p>
                This is your personal information that you can update anytime.
              </p>
            </div>
            <div className='block lg:hidden'>
              <DrawerBar />
            </div>
          </div>

          <div className='flex flex-col lg:flex-row items-center gap-6 border-b-2 border-[#D6DDEB] pb-4'>
            <div className='flex-1'>
              <Typography variant='h5' className='text-[#183F5B] font-bold'>
                Profile Photo
              </Typography>
              <p>This image will be shown publicly as your profile picture.</p>
            </div>
            <Avatar
              src='https://docs.material-tailwind.com/img/face-2.jpg'
              alt='avatar'
              variant='rounded'
              className='w-20 h-20'
            />
            <ImageUpload />
          </div>

          <div className=''>
            <Typography variant='h5' className='text-[#183F5B] font-bold mb-4'>
              Personal Information
            </Typography>
            <form
              onSubmit={handleSubmit}
              className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {Inputs.map(({ label, name, type, placeholder, options }) => (
                <div key={name} className='flex flex-col gap-2'>
                  <Typography variant='h6' color='blue-gray' className='mb-1'>
                    {label}
                  </Typography>
                  {type === "select" ? (
                    <select
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      className='w-full border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#183F5B]'>
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
              <div className='col-span-full'>
                <Button
                  type='submit'
                  disabled={isLoading}
                  className='px-6 py-2 bg-[#183F5B] text-white font-semibold rounded-lg hover:bg-[#0f2d42] transition disabled:opacity-50'>
                  {isLoading ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
