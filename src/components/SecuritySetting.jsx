import React, { useState } from "react";
import { Typography, Button, Input } from "@material-tailwind/react";
import { IoInformationCircleOutline } from "react-icons/io5";
import axios from "axios";

export const SecuritySetting = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!currentPassword.trim())
      newErrors.currentPassword = "Current password is required.";
    if (!newPassword.trim())
      newErrors.newPassword = "New password is required.";
    else if (newPassword.length < 6)
      newErrors.newPassword = "Password must be at least 6 characters.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/change-password`,
        { currentPassword, newPassword }
      );
      setSuccessMessage("Password changed successfully.");
      setErrors({});
      setCurrentPassword("");
      setNewPassword("");
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Failed to change password. Please try again.";
      setErrors({ api: message });
    }
  };

  const handleCloseAccount = () => {};

  return (
    <div className='relative flex flex-col gap-6 p-6 w-full min-h-[90vh]'>
      {/* Password Section */}
      <div className='border-b-2 border-gray-300 pb-6 min-h-[50vh] flex flex-col md:flex-row items-center justify-between gap-6'>
        <div className='max-w-md'>
          <Typography variant='h5'>New Password</Typography>
          <Typography className='text-gray-500'>
            Manage your password to ensure your account remains secure.
          </Typography>
        </div>

        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-4 min-w-[250px] max-w-md w-full'>
          <label htmlFor='current-password' className='text-gray-500'>
            Current Password
          </label>
          <Input
            id='current-password'
            type='password'
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder='Enter your current password'
            className='placeholder:opacity-100'
            error={!!errors.currentPassword}
          />
          {errors.currentPassword && (
            <Typography className='text-red-500 text-sm'>
              {errors.currentPassword}
            </Typography>
          )}

          <label htmlFor='new-password' className='text-gray-500'>
            New Password
          </label>
          <Input
            id='new-password'
            type='password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder='Enter your new password'
            className='placeholder:opacity-100'
            error={!!errors.newPassword}
          />
          {errors.newPassword && (
            <Typography className='text-red-500 text-sm'>
              {errors.newPassword}
            </Typography>
          )}

          {errors.api && (
            <Typography className='text-red-500 text-sm'>
              {errors.api}
            </Typography>
          )}

          {successMessage && (
            <Typography className='text-green-600 text-sm'>
              {successMessage}
            </Typography>
          )}

          <Button type='submit' className='bg-[#183F5B]'>
            Change Password
          </Button>
        </form>
      </div>

      {/* Device Info */}
      <div className='border border-gray-300 p-4 rounded-2xl flex items-center gap-4 shadow-sm'>
        <img src='/device.png' alt='Device Icon' className='w-10 h-10' />
        <Typography className='text-gray-700'>
          Chrome 40.0.0.0, Windows
        </Typography>
      </div>

      {/* Close Account */}
      <button
        onClick={handleCloseAccount}
        className='absolute bottom-2 right-2 bg-gray-300 text-red-600 flex items-center gap-2 rounded-full px-4 py-2 hover:bg-red-600 hover:text-white transition duration-300 ease-in-out'>
        <span>Close Account</span>
        <IoInformationCircleOutline className='text-2xl' />
      </button>
    </div>
  );
};
