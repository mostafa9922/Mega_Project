import React, { useState } from "react";
import {
  Input,
  Button,
  Dialog,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export const ApplicaionDialog = ({ open, handleOpen }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      handleOpen();
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <Dialog
      size='sm'
      open={open}
      handler={handleOpen}
      className='p-4 max-w-[90%] sm:max-w-sm'>
      <DialogHeader className='relative m-0 block'>
        <Typography variant='h4' className='text-[#000000]'>
          Apply Job: Data Analyst
        </Typography>
        <IconButton
          size='sm'
          variant='text'
          className='!absolute right-3.5 top-3.5'
          onClick={handleOpen}>
          <XMarkIcon className='h-4 w-4 stroke-2' />
        </IconButton>
      </DialogHeader>
      <DialogBody className='space-y-4 pb-6 border-t-2 border-[#D6DDEB]'>
        <Typography variant='h5' className='text-[#25324B]'>
          Submit your application
        </Typography>
        <p className='text-[#7C8493] text-sm'>
          The following is required and will only be shared with Nomad
        </p>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label
              htmlFor='full-name'
              className='block text-sm font-medium text-[#25324B]'>
              Full Name
            </label>
            <Input
              type='text'
              id='full-name'
              name='fullName'
              value={formData.fullName}
              onChange={handleChange}
              placeholder='Enter Your Full Name'
              className='mt-1 w-full placeholder:opacity-100'
            />
            {errors.fullName && (
              <p className='text-red-500 text-xs mt-1'>{errors.fullName}</p>
            )}
          </div>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-[#25324B]'>
              Email Address
            </label>
            <Input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter Your Email Address'
              className='mt-1 w-full placeholder:opacity-100'
            />
            {errors.email && (
              <p className='text-red-500 text-xs mt-1'>{errors.email}</p>
            )}
          </div>
        </form>
      </DialogBody>
      <DialogFooter className='flex flex-col sm:flex-row justify-between items-center gap-4'>
        <Button className='bg-[#183F5B] text-white px-4 py-2' type='submit'>
          Submit
        </Button>
        <p className='text-[#7C8493] text-xs sm:text-sm text-center sm:text-left'>
          By sending the request, you confirm that you accept our Terms of
          Service and Privacy Policy
        </p>
      </DialogFooter>
    </Dialog>
  );
};
