import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { LuFolderSearch } from "react-icons/lu";
import { NavBar_User } from "./NavBar_User";

export const Profile = () => {
  return (
    <div>
      <NavBar_User />
      <div className=" bg-[url('/image2.png')] bg-cover w-screen h-screen">
        <div className='flex flex-col items-center justify-end h-screen w-screen gap-10 '>
          <div className='relative flex flex-col w-[40%] '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='absolute w-5 h-5 top-2.5 left-2.5 text-slate-600'>
              <path
                fillRule='evenodd'
                d='M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z'
                clipRule='evenodd'
              />
            </svg>
            <input
              className='w-full bg-[#F5F9FF] placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow'
              placeholder='Job Search'
              type="text"
              name="search"
              id="search"
            />
            <h1 className='text-4xl text-white font-bold mt-5'>
              Your Career, Simplified - Land Your Dream Job Today!
            </h1>
          </div>
          <div className='flex flex-col lg:flex-row items-center justify-start w-[90%] mb-10 gap-20 '>
            <Card className='mt-6 w-96 text-center'>
              <CardBody>
                <Typography className='flex flex-col items-center'>
                  <LuFolderSearch className='text-9xl ' />
                </Typography>
                <Typography variant='h5' color='blue-gray' className='mb-2'>
                  Find Your Dream Job
                </Typography>
                <Typography>
                  Browse thousands of job listings. Get personalized job
                  recommendations. Apply with one click.
                </Typography>
              </CardBody>
            </Card>
            <Card className='mt-6 w-96 text-center'>
              <CardBody>
                <Typography className='flex flex-col items-center'>
                  <LuFolderSearch className='text-9xl ' />
                </Typography>
                <Typography variant='h5' color='blue-gray' className='mb-2'>
                  Find Your Dream Job{" "}
                </Typography>
                <Typography>
                  Browse thousands of job listings. Get personalized job
                  recommendations. Apply with one click.
                </Typography>
              </CardBody>
            </Card>
            <Card className='mt-6 w-96 text-center'>
              <CardBody>
                <Typography className='flex flex-col items-center'>
                  <LuFolderSearch className='text-9xl ' />
                </Typography>
                <Typography variant='h5' color='blue-gray' className='mb-2'>
                  Find Your Dream Job{" "}
                </Typography>
                <Typography>
                  Browse thousands of job listings. Get personalized job
                  recommendations. Apply with one click.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <div className='layer absolute top-0 left-0 h-screen w-screen bg-gradient-radial from-[#F4F4F4] via-[#4591C8] to-[#4591C8] z-[-1]'></div>
    </div>
  );
};
