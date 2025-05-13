import { Card, Typography, Avatar } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export const CompanyList = () => {
  return (
    <div>
      <Card className='w-full p-5'>
        <Typography variant='h3' className='text-[#25324B] font-bold'>
          Office Location
        </Typography>
        <p className='text-[#515B6F] mb-2'>
          Stripe offices spread across 20 countries
        </p>
        <ul className='flex flex-col gap-3'>
          <li className='flex gap-3 items-center'>
            <Avatar
              src='https://docs.material-tailwind.com/img/face-2.jpg'
              alt='avatar'
              variant='square'
            />
            <span className='font-bold text-[#000000]'>United States</span>
          </li>
          <li className='flex gap-3 items-center'>
            <Avatar
              src='https://docs.material-tailwind.com/img/face-2.jpg'
              alt='avatar'
              variant='square'
            />
            <span className='font-bold text-[#000000]'>United States</span>
          </li>
          <li className='flex gap-3 items-center'>
            <Avatar
              src='https://docs.material-tailwind.com/img/face-2.jpg'
              alt='avatar'
              variant='square'
            />
            <span className='font-bold text-[#000000]'>United States</span>
          </li>
          <li className='flex gap-3 items-center'>
            <Avatar
              src='https://docs.material-tailwind.com/img/face-2.jpg'
              alt='avatar'
              variant='square'
            />
            <span className='font-bold text-[#000000]'>United States</span>
          </li>
          <li className='flex gap-3 items-center'>
            <Avatar
              src='https://docs.material-tailwind.com/img/face-2.jpg'
              alt='avatar'
              variant='square'
            />
            <span className='font-bold text-[#000000]'>United States</span>
          </li>
        </ul>

        <Link to='' className='flex gap-3 items-center text-[#183F5B] mt-4'>
          <span>View countries</span>
          <FaArrowRightLong className='text-[#183F5B]' />
        </Link>
      </Card>
    </div>
  );
};
