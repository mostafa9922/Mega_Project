import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";

function NavList() {
  return (
    <ul className='my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-24 '>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-medium'>
        <Link to='#' className='flex items-center text-white '>
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
        <Link to='#' className='flex items-center text-white '>
          Job Track
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-medium'>
        <Link to='#' className='flex items-center text-white'>
          Profile
        </Link>
      </Typography>
      <Typography as={Link} to='#'>
        <IoSettingsOutline className='text-2xl hover:text-white' />
      </Typography>
    </ul>
  );
}

export function NavMenu() {
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
    <Navbar className='max-w-screen-7xl px-6 bg-gradient-to-r from-[#4591C8] to-[#224762] rounded-none border-none h-[10vh]'>
      <div className='flex items-center justify-between text-blue-gray-900'>
        <Typography
          as={Link}
          to='#'
          variant='h6'
          className='mr-4 cursor-pointer '>
          <div className=' flex items-center justify-center'>
            <img src='/image14.png' alt='' />
            <img src='/image13.png' alt='' className='absolute left-[1.5%]' />
          </div>
        </Typography>
        <div className='hidden lg:flex w-full lg:flex-col lg:items-center'>
          <NavList />
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
        <NavList />
      </Collapse>
    </Navbar>
  );
}
