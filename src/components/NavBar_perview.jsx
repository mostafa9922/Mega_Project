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

function NavList({ isMobile = false }) {
  return (
    <ul
      className={`my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ${
        isMobile ? "bg-white p-4 rounded-lg" : ""
      }`}>
      <Typography as='li' variant='small' className='p-1 font-medium'>
        <Link
          to='/aboutus'
          className={`flex items-center transition-colors text-sm uppercase ${
            isMobile
              ? "text-gray-800 hover:text-gray-600"
              : "text-white hover:text-gray-200"
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
              : "text-white bg-[#214560] hover:bg-white/20"
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
  );
}

export function NavBar_perview() {
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
    <Navbar className='max-w-screen-7xl absolute top-0 left-0 px-6 bg-transparent rounded-none border-b-4 border-t-0 border-l-0 border-r-0 shadow-none backdrop-saturate-[-1] h-[10vh]'>
      <div className='flex items-center justify-between text-blue-gray-900'>
        <Typography
          as={Link}
          to='/'
          href='#'
          variant='h6'
          className='mr-4 cursor-pointer'>
          <div className='flex items-center gap-1'>
            {/* Logo Images */}
            <div className='relative'>
              <img src='/image14.png' alt='Main Logo' className='w-10 h-10' />
              <img
                src='/image13.png'
                alt='Sub Logo'
                className='absolute left-2 top-1 w-8 h-8'
              />
            </div>
            {/* Name Beside the Images */}
            <span className='text-white text-lg font-bold'>OOKUP</span>
          </div>
        </Typography>
        <div className='hidden lg:block'>
          <NavList isMobile={false} />
        </div>
        <IconButton
          variant='text'
          className='ml-auto h-6 w-6 text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
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
        <NavList isMobile={true} />
      </Collapse>
    </Navbar>
  );
}
