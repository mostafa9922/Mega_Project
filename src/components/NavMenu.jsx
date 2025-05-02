import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { UserAvatar } from "./UserAvatar";

function NavList({ loggedIn, setLoggedIn }) {
  return (
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
        <Link to='/profile' className='flex items-center text-white '>
          Home
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-medium'>
        <Link to='/interview' className='flex items-center text-white '>
          InterView
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-medium'>
        <Link to='#' className='text-white '>
          Job Track
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-medium'>
        <Link to='/jobs' className='flex items-center text-white'>
          jobs
        </Link>
      </Typography>
      <div className='w-[15%]'>
        <UserAvatar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </div>

      <Typography as={Link} to='#'>
        <IoSettingsOutline className='text-2xl hover:text-white' />
      </Typography>
    </ul>
  );
}

export function NavMenu({ loggedIn, setLoggedIn }) {
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
    <Navbar className='max-w-screen-8xl px-6 bg-gradient-to-r from-[#4591C8] to-[#224762] rounded-none border-none'>
      <div className='flex justify-between text-blue-gray-900'>
        <Link to='/' className='logo flex flex-row items-center justify-center'>
          <img src='/image 14.png' alt=' logo' className='w-14 h-8' />
          <img src='/ookup.png' alt='' className='w-14 h-8' />
        </Link>
        <div className='hidden lg:flex lg:flex-col lg:items-center'>
          <NavList loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </div>
        <IconButton
          variant='text'
          className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
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
        <NavList loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </Collapse>
    </Navbar>
  );
}
