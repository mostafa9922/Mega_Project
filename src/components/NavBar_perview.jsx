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
