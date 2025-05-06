import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Typography, Input, Button, Alert } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import axios from "axios";

export function LogIn({ setLoggedIn }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [passwordShown, setPasswordShown] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => setPasswordShown((cur) => !cur);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = { email: "", password: "", general: "" };
    let isValid = true;

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({ email: "", password: "", general: "" });

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        formData
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/dashboard");
      setLoggedIn(true);
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "An unexpected error occurred";
      setErrors((prev) => ({ ...prev, general: errorMessage }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='flex flex-col min-h-screen items-center justify-center bg-gradient-to-t from-[#C5DBEB] via-[#4591C8] to-[#183F5B] px-4 py-16'>
      <div className='bg-[#F5F9FF] w-full max-w-md p-6 rounded-lg shadow-lg md:max-w-lg lg:max-w-xl'>
        <Typography variant='h3' className='mb-2 text-[#2775AD] text-center'>
          Log In
        </Typography>
        <Typography className='mb-8 text-gray-600 font-normal text-[18px] text-center'>
          Enter your email and password to sign in
        </Typography>
        {errors.general && (
          <Alert color='red' className='mb-4'>
            {errors.general}
          </Alert>
        )}
        <form onSubmit={handleSubmit} className='w-full text-left'>
          <div className='mb-6'>
            <label htmlFor='email'>
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
            <Input
              id='email'
              color='gray'
              size='lg'
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='name@mail.com'
              className='w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200'
              labelProps={{ className: "hidden" }}
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='password'>
              <Typography
                variant='small'
                className='mb-2 block font-medium text-gray-900'>
                Password
              </Typography>
            </label>
            {errors.password && (
              <Alert color='red' className='mb-2'>
                {errors.password}
              </Alert>
            )}
            <Input
              size='lg'
              placeholder='********'
              name='password'
              value={formData.password}
              onChange={handleChange}
              className='w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200'
              type={passwordShown ? "text" : "password"}
              icon={
                passwordShown ? (
                  <EyeIcon
                    className='h-5 w-5 cursor-pointer'
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <EyeSlashIcon
                    className='h-5 w-5 cursor-pointer'
                    onClick={togglePasswordVisibility}
                  />
                )
              }
              labelProps={{ className: "hidden" }}
            />
          </div>
          <Button
            type='submit'
            color='gray'
            size='lg'
            className='mt-6 bg-[#549acc] w-full'
            disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Log in"}
          </Button>
          <div className='mt-4 flex justify-end'>
            <Typography
              as={Link}
              to='/forgotpassword'
              color='blue-gray'
              variant='small'
              className='font-medium'>
              Forgot password
            </Typography>
          </div>
          <Typography
            variant='small'
            color='gray'
            className='mt-4 text-center font-normal'>
            Not registered?{" "}
            <Link to='/signup' className='font-medium text-gray-900'>
              Create account
            </Link>
          </Typography>
        </form>
      </div>
      <div className='absolute top-4 left-4 flex items-center z-10'>
        <Link to='/' className='flex items-center'>
          <img
            src='/image 14.png'
            alt='Logo'
            className='w-14 h-8'
            onError={(e) => (e.target.src = "/fallback-logo.png")} // Fallback image
          />
          <img
            src='/ookup.png'
            alt='Oookup'
            className='w-14 h-8'
            onError={(e) => (e.target.src = "/fallback-ookup.png")}
          />
        </Link>
      </div>
    </section>
  );
}

export default LogIn;
