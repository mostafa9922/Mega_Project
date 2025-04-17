import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function Confirmation() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className='flex flex-col min-h-screen items-center justify-center bg-gradient-to-t from-[#C5DBEB] via-[#4591C8] to-[#183F5B] px-4 py-16'>
      <div className='bg-[#F5F9FF] w-full max-w-md p-6 rounded-lg shadow-lg md:max-w-lg lg:max-w-xl'>
        <Typography className='mb-2 text-[#2775AD] flex items-center justify-center'>
          <IoIosCheckmarkCircleOutline className='text-9xl' />
        </Typography>
        <Typography variant='h3' className='mb-2 text-[#2775AD] text-center'>
          Successful Password Change
        </Typography>
        <Typography className='mb-8 text-gray-600 font-normal text-[18px] text-center'>
          Congratulations! Your password has been changed. Click continue to
          login
        </Typography>
        <form action={handleSubmit} className='w-full text-left'>
          <Button
            type='submit'
            color='gray'
            size='lg'
            className='mt-6 bg-[#549acc] w-full'>
            Continue
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

export default Confirmation;
