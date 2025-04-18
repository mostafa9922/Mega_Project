import { useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { Alert } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export function SignUp() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  const [emptyName, setEmptyName] = useState(true);
  const [emptyEmail, setEmptyEmail] = useState(true);
  const [emptyPassword, setEmptyPassword] = useState(true);
  const [errorPassword, setErrorPassword] = useState(true);
  const [userExist, setUserExist] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setChecked(true);
    if (e.target.Name.value !== "") {
      setEmptyName(false);
    }
    if (e.target.email.value !== "") {
      setEmptyEmail(false);
    }
    if (e.target.password.value !== "") {
      setEmptyPassword(false);
    }
    if (e.target.password.value.length >= 8) {
      setErrorPassword(false);
    }
    if (
      e.target.Name.value !== "" &&
      e.target.email.value !== "" &&
      e.target.password.value !== "" &&
      e.target.password.value.length >= 8
    ) {
      const data = {
        name: e.target.Name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      };
      setIsSubmitting(true);
      axios({
        method: "POST", // to send data
        url: "http://careerpath.runasp.net/auth/register",
        data: data, // data to be sent
      })
        .then((response) => {
          if (response.data.status === 200) {
            navigate("/login");
            setUserExist(false);
          } else {
            setUserExist(true);
            setSubmitted(true);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    setIsSubmitting(false);
  };

  return (
    <section className='flex flex-col min-h-screen items-center justify-center bg-gradient-to-t from-[#C5DBEB] via-[#4591C8] to-[#183F5B] px-4 py-12 lg:py-6'>
      <div className='bg-[#F5F9FF] w-full max-w-md p-6 rounded-lg shadow-lg md:max-w-lg lg:max-w-xl'>
        <Typography variant='h3' className='text-[#2775AD] mb-4 text-center'>
          Create An Account
        </Typography>
        <form onSubmit={handleSubmit} className='w-full text-left'>
          <Alert
            color='red'
            className={
              userExist && checked && submitted ? "block mb-2 " : "hidden"
            }>
            User already exists!
          </Alert>
          <Button
            variant='outlined'
            size='lg'
            className='mt-6 flex h-12 items-center justify-center gap-2 w-full'>
            <img
              src={`https://www.material-tailwind.com/logos/logo-google.png`}
              alt='google'
              className='h-6 w-6'
            />
            Continue with Google
          </Button>
          <Button
            variant='outlined'
            size='lg'
            className='my-4 flex h-12 items-center justify-center gap-2 w-full'>
            <FaApple className='text-2xl' />
            Continue with Apple
          </Button>

          <div className='mb-6'>
            <label htmlFor='Name'>
              <Typography
                variant='small'
                className='mb-2 block font-medium text-gray-900'>
                Name
              </Typography>
            </label>
            <Alert
              color='red'
              className={checked && emptyName ? "block mb-2" : "hidden"}>
              Enter your name!
            </Alert>
            <Input
              id='Name'
              color='gray'
              size='lg'
              type='text'
              name='Name'
              placeholder='John Doe'
              className='w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200'
              labelProps={{
                className: "hidden",
              }}
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
            <Alert
              color='red'
              className={checked && emptyEmail ? "block mb-2" : "hidden"}>
              Enter your Email!
            </Alert>
            <Input
              id='email'
              color='gray'
              size='lg'
              type='email'
              name='email'
              placeholder='name@mail.com'
              className='w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200'
              labelProps={{
                className: "hidden",
              }}
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
            <Alert
              color='red'
              className={checked && emptyPassword ? "block mb-2" : "hidden"}>
              Enter your Password!
            </Alert>
            <Alert
              color='red'
              className={
                checked && errorPassword && !emptyPassword
                  ? "block mb-2"
                  : "hidden"
              }>
              Password must be at least 8 characters long!
            </Alert>
            <Input
              size='lg'
              placeholder='********'
              name='password'
              labelProps={{
                className: "hidden",
              }}
              className='w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200'
              type={passwordShown ? "text" : "password"}
              icon={
                <i onClick={togglePasswordVisiblity}>
                  {passwordShown ? (
                    <EyeIcon className='h-5 w-5' />
                  ) : (
                    <EyeSlashIcon className='h-5 w-5' />
                  )}
                </i>
              }
            />
          </div>

          <Button
            loading={isSubmitting}
            type='submit'
            size='lg'
            className='mt-6 bg-[#549acc] w-full'>
            Create Account
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
          <img src='/image 14.png' alt='logo' className='w-14 h-8' />
          <img src='/ookup.png' alt='' className='w-14 h-8' />
        </Link>
      </div>
    </section>
  );
}

export default SignUp;
