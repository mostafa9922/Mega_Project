import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { IoSettingsOutline } from "react-icons/io5";
import { UserAvatar } from "./UserAvatar";

function NavList({ isMobile = false, loggedIn, setLoggedIn }) {
  return !loggedIn ? (
    <ul
      className={`my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ${
        isMobile ? "bg-white p-4 rounded-lg" : ""
      }`}>
      <Typography as='li' variant='small' className='p-1 font-medium'>
        <Link
          to=''
          className={`flex items-center transition-colors text-sm uppercase ${
            isMobile ? "text-gray-800" : "hover:text-[#183F5B]"
          }`}>
          Features
        </Link>
      </Typography>
      <Typography as='li' variant='small' className='p-1 font-medium'>
        <Link
          to='/aboutus'
          className={`flex items-center transition-colors text-sm uppercase ${
            isMobile ? "text-gray-800" : "hover:text-[#183F5B]"
          }`}>
          About Us
        </Link>
      </Typography>
      <Link to='/login' className='p-1 font-medium'>
        <Button
          size='sm'
          variant='text'
          className={`${
            isMobile
              ? "text-white bg-[#214560] hover:bg-[#173247]"
              : "text-white bg-[#214560] hover:bg-[#214560]"
          } transition text-sm uppercase`}>
          Log In
        </Button>
      </Link>
      <Link to='/signup' className='p-1 font-medium'>
        <Button
          size='sm'
          className='bg-green-500 text-white hover:bg-green-600 transition text-sm uppercase'>
          Sign Up
        </Button>
      </Link>
    </ul>
  ) : (
    <ul className='my-2 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center gap-3 lg:gap-10 '>
      <div className='w-full max-w-sm min-w-[200px]'>
        <div className='flex items-center relative border border-slate-200 rounded-md shadow-sm focus-within:border-slate-400 hover:border-slate-300'>
          <input
            className='flex-1 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm pl-3 pr-2 py-2 focus:outline-none'
            placeholder='Job Title , KeyWords or Company Name'
          />
          <Button
            className='rounded-l-none h-full px-3 flex items-center gap-1 text-sm'
            type='button'
            size='sm'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-4 h-4'>
              <path
                fillRule='evenodd'
                d='M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z'
                clipRule='evenodd'
              />
            </svg>
            Search
          </Button>
        </div>
      </div>

      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-medium'>
        <Link to='/dashboard' className='flex items-center text-[#183F5B] '>
          DashBoard
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-medium'>
        <Link to='/interview' className='flex items-center text-[#183F5B] '>
          InterView
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-medium'>
        <Link to='/job-search' className='text-[#183F5B] '>
          Job Search
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-medium'>
        <Link to='/jobs' className='flex items-center text-[#183F5B]'>
          jobs
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-medium'>
        <Link
          to='https://9b96-34-150-218-83.ngrok-free.app/'
          className='flex items-center text-[#183F5B]'>
          Job Market Analytics
        </Link>
      </Typography>
      <div className='w-[15%]'>
        <UserAvatar />
      </div>
    </ul>
  );
}

export function NavBar_perview({ loggedIn, setLoggedIn }) {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className='max-w-screen-7xl px-6 bg-transparent rounded-none border-none shadow-none backdrop-saturate-[-1]'>
      <div className='flex items-center justify-between text-blue-gray-900'>
        <Typography
          as={Link}
          to='/'
          href='#'
          variant='h6'
          className='mr-4 cursor-pointer'>
          <div className='flex items-center flex-row'>
            <img src='/image 14.png' alt='Main Logo' className='w-14 h-10' />
            <img src='/ookup.png' alt='Sub Logo' className=' w-14 h-8' />
          </div>
        </Typography>
        <div className='hidden lg:block'>
          <NavList
            isMobile={false}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
          />
        </div>
        <IconButton
          variant='text'
          className='ml-auto h-6 w-6 text-[#183F5B] hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
          ripple={false}
          onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <XMarkIcon className='h-6 w-6' strokeWidth={2} />
          ) : (
            <Bars3Icon className='h-6 w-6' strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList
          isMobile={true}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />
      </Collapse>
    </Navbar>
  );
}
