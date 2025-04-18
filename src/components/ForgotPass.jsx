import { useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { Alert } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export function ForgotPass() {
  const [emptyEmail, setEmptyEmail] = useState(true);
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.email.value !== "") {
      setEmptyEmail(false);
      // Simulate an API call
      navigate("/check-email", {
        state: { email: e.target.email.value },
      });
      return;
    }
    setChecked(true);
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
          <Button
            type='submit'
            color='gray'
            size='lg'
            className='mt-6 bg-[#549acc] w-full'>
            Reset Password
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
