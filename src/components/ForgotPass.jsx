import { useState } from "react";
import { Typography, Input, Button, Alert } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export function ForgotPass({ setResetPassStatus }) {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    general: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(() => ({ [name]: value }));
    setErrors(() => ({ [name]: "", general: "" }));
  };

  const validateForm = () => {
    const newErrors = { email: "", general: "" };
    let isValid = true;

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({ email: "", general: "" });

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post(`http://localhost:5000/auth/forgot-password`, {
        email: formData.email,
      });
      setFormData({ email: "" });
      navigate("/check-email", {
        state: { email: formData.email },
      });
      setResetPassStatus(true);
    } catch (error) {
      const errorMessage =
        error.response?.data?.error ||
        "Failed to send reset link. Please try again.";
      setErrors((prev) => ({ ...prev, general: errorMessage }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='flex flex-col min-h-screen items-center justify-center bg-gradient-to-t from-[#C5DBEB] via-[#4591C8] to-[#183F5B] px-4 py-16'>
      <div className='bg-[#F5F9FF] w-full max-w-md p-6 rounded-lg shadow-lg md:max-w-lg lg:max-w-xl'>
        <Typography variant='h3' className='mb-2 text-[#2775AD] text-center'>
          Forgot Password
        </Typography>
        <Typography className='mb-8 text-gray-600 font-normal text-[18px] text-center'>
          Please enter your email to reset the password
        </Typography>
        <form onSubmit={handleSubmit} className='w-full text-left'>
          <div className='mb-6'>
            <label htmlFor='email' className='mb-2 block'>
              <Typography
                variant='small'
                className='mb-2 block font-medium text-gray-900'>
                Your Email
              </Typography>
            </label>
            {errors.email && (
              <Alert color='red' className='mb-2'>
                {errors.email}
              </Alert>
            )}
            {errors.general && (
              <Alert color='red' className='mb-2'>
                {errors.general}
              </Alert>
            )}
            <Input
              id='email'
              color='gray'
              size='lg'
              name='email'
              onChange={handleChange}
              value={formData.email}
              placeholder='name@mail.com'
              className='w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200'
              labelProps={{
                className: "hidden",
              }}
              disabled={isSubmitting}
            />
          </div>
          <Button
            type='submit'
            color='gray'
            size='lg'
            className='mt-6 bg-[#549acc] w-full'
            disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Reset Password"}
          </Button>
        </form>
      </div>
      <div className='absolute top-4 left-4 flex items-center z-10'>
        <Link to='/' className='flex items-center'>
          <img src='/image 14.png' alt='logo' className='w-14 h-8' />
          <img src='/ookup.png' alt='' className='w-14 h-8' />
        </Link>
      </div>
    </section>
  );
}

export default ForgotPass;
