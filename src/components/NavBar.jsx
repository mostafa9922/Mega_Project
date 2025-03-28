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

function NavList() {
  return (
    <ul className='my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-medium'>
        <a
          href='#'
          className='flex items-center hover:text-blue-500 transition-colors'>
          Pages
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-medium'>
        <a
          href='#'
          className='flex items-center hover:text-blue-500 transition-colors'>
          Account
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-medium'>
        <a
          href='#'
          className='flex items-center hover:text-blue-500 transition-colors'>
          Blocks
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-medium'>
        <a
          href='#'
          className='flex items-center hover:text-blue-500 transition-colors'>
          Docs
        </a>
      </Typography>
      <Link to='/login' className='p-1 font-medium'>
        <Button size='sm'>LogIn</Button>
      </Link>
      <Link to='/signup' className='p-1 font-medium'>
        <Button size='sm'>SignUp</Button>
      </Link>
    </ul>
  );
}

export function NavBar() {
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
    <Navbar className='max-w-screen-7xl px-6 py-3 bg-transparent border-none shadow-none h-[11vh]'>
      <div className='flex items-center justify-between text-blue-gray-900'>
        <Typography
          as={Link}
          to='/'
          href='#'
          variant='h6'
          className='mr-4 cursor-pointer py-1.5'>
          <div className=' flex items-center justify-center'>
            <img src='/public/image 14.png' alt='' />
            <img
              src='/public/image 13.png'
              alt=''
              className='absolute left-[1.5%] '
            />
          </div>
        </Typography>
        <div className='hidden lg:block'>
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
