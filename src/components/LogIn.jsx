import { useState } from "react";
import { Link } from "react-router-dom";

import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";

export function LogIn() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  return (
    <section className='flex flex-col text-center h-screen items-center justify-center bg-gradient-to-t from-[#C5DBEB] via-[#4591C8] to-[#183F5B]'>
      <div className='bg-[#F5F9FF] w-[30%] p-4 rounded-lg shadow-lg'>
        <Typography variant='h3' className='mb-2 text-[#2775AD]'>
          Log In
        </Typography>
        <Typography className='mb-8 text-gray-600 font-normal text-[18px]'>
          Enter your email and password to sign in
        </Typography>
        <form action='#' className='mx-auto max-w-[24rem] text-left'>
          <div className='mb-6'>
            <label htmlFor='email' className='mb-2 block'>
              <Typography
                variant='small'
                className='mb-2 block font-medium text-gray-900'>
                Your Email
              </Typography>
            </label>
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
            <Input
              size='lg'
              placeholder='********'
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
            color='gray'
            size='lg'
            className='mt-6 bg-[#549acc]'
            fullWidth>
            Log in
          </Button>
          <div className='!mt-4 flex justify-end'>
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
            className='!mt-4 text-center font-normal'>
            Not registered?{" "}
            <Link to='/signup' className='font-medium text-gray-900'>
              Create account
            </Link>
          </Typography>
        </form>
      </div>
      <div className='logo fixed top-4 left-0 flex flex-row items-center justify-center'>
        <img src='image14.png' alt='' />
        <p className='absolute left-11 text-white top-4 '>OOKUP</p>
      </div>
    </section>
  );
}

export default LogIn;
