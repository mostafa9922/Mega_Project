import { useState } from "react";
import { Typography, Input, Button, Alert } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import axios from "axios";

export function SignUp({ loggedIn, SetLoggedIn }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [passwordShown, setPasswordShown] = useState(false);
  const [errors, setErrors] = useState({
    username: "",
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
    setErrors((prev) => ({ ...prev, [name]: "", general: "" }));
  };

  const validateForm = () => {
    const newErrors = { username: "", email: "", password: "", general: "" };
    let isValid = true;

    if (!formData.username) {
      newErrors.username = "Name is required";
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      isValid = false;
    } else if (
      !/[A-Z]/.test(formData.password) ||
      !/[!@#$%^&*]/.test(formData.password)
    ) {
      newErrors.password =
        "Password must include an uppercase letter and a special character";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({ username: "", email: "", password: "", general: "" });

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        formData
      );
      setFormData({ username: "", email: "", password: "" }); // Clear form data on success
      // navigate("/login");
      SetLoggedIn(true);
      navigate("/personal-info");
    } catch (error) {
      const errorMessage =
        error.response?.data?.error ||
        "Failed to create account. Please try again.";
      setErrors((prev) => ({ ...prev, general: errorMessage }));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Placeholder for social login (implement or remove)
  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    // Implement Google OAuth flow
  };

  const handleAppleLogin = () => {
    console.log("Apple login clicked");
    // Implement Apple Sign-In flow
  };

  return (
    <section className='flex flex-col min-h-screen items-center justify-center bg-gradient-to-t from-[#C5DBEB] via-[#4591C8] to-[#183F5B] px-4 py-12 lg:py-6'>
      <div className='bg-[#F5F9FF] w-full max-w-md p-6 rounded-lg shadow-lg md:max-w-lg lg:max-w-xl'>
        <Typography variant='h3' className='text-[#2775AD] mb-4 text-center'>
          Create An Account
        </Typography>
        {errors.general && (
          <Alert color='red' className='mb-4'>
            {errors.general}
          </Alert>
        )}
        <form onSubmit={handleSubmit} className='w-full text-left'>
          <Button
            variant='outlined'
            size='lg'
            className='mt-6 flex h-12 items-center justify-center gap-2 w-full'
            onClick={handleGoogleLogin}
            disabled={isSubmitting}>
            <img
              src={`https://www.material-tailwind.com/logos/logo-google.png`}
              alt='Google logo'
              className='h-6 w-6'
              onError={(e) => (e.target.src = "/fallback-google.png")}
            />
            Continue with Google
          </Button>
          <Button
            variant='outlined'
            size='lg'
            className='my-4 flex h-12 items-center justify-center gap-2 w-full'
            onClick={handleAppleLogin}
            disabled={isSubmitting}>
            <FaApple className='text-2xl' />
            Continue with Apple
          </Button>

          <div className='mb-6'>
            <label htmlFor='username'>
              <Typography
                variant='small'
                className='mb-2 block font-medium text-gray-900'>
                Name
              </Typography>
            </label>
            {errors.username && (
              <Alert color='red' className='mb-2'>
                {errors.username}
              </Alert>
            )}
            <Input
              id='username'
              color='gray'
              size='lg'
              type='text'
              name='username'
              value={formData.username}
              onChange={handleChange}
              placeholder='John Doe'
              className='w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200'
              labelProps={{ className: "hidden" }}
            />
          </div>

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
            size='lg'
            className='mt-6 bg-[#549acc] w-full'
            disabled={isSubmitting}>
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </Button>

          <Typography
            variant='small'
            color='gray'
            className='mt-4 text-center font-normal'>
            Already have an account?{" "}
            <Link to='/login' className='font-medium text-gray-900'>
              Log In
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
            onError={(e) => (e.target.src = "/fallback-logo.png")}
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

export default SignUp;
