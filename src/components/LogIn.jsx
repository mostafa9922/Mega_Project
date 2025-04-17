import { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Alert } from "@material-tailwind/react";

export function LogIn() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  const [emptyEmail, setEmptyEmail] = useState(true);
  const [emptyPassword, setEmptyPassword] = useState(true);
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.email.value !== "") {
      setEmptyEmail(false);
    }
    if (e.target.password.value !== "") {
      setEmptyPassword(false);
    }
    setChecked(true);
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
        <form onSubmit={handleSubmit} className='w-full text-left'>
          <div className='mb-6'>
            <label htmlFor='email' className='mb-2 block'>
              <Typography
                variant='small'
                className='mb-2 block font-medium text-gray-900'>
                Your Email
              </Typography>
            </label>
            <Alert
              color='red'
              className={checked && emptyEmail ? "block mb-2" : "hidden"}>
              Enter your email!
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
            type='submit'
            color='gray'
            size='lg'
            className='mt-6 bg-[#549acc] w-full'>
            Log in
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
          <img src='/image 14.png' alt='logo' className='w-14 h-8' />
          <img src='/ookup.png' alt='' className='w-14 h-8' />
        </Link>
      </div>
    </section>
  );
}

export default LogIn;
