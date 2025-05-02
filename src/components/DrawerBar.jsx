import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Card,
  Input,
} from "@material-tailwind/react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export function DrawerBar() {
  const handleSignOut = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <Button onClick={openDrawer}>
        <FaBars />
      </Button>
      <Drawer open={open} onClose={closeDrawer} className='p-4'>
        <div className="flex flex-col justify-between h-full ">
          <div className='mb-2 p-4'>
            <Typography variant='h3' className='text-[#183F5B] font-bold'>
              Settings
            </Typography>
          </div>
          <ul className='flex flex-col justify-between gap-4 px-4 h-full text-[#7A7D85] font-bold'>
            <div className='flex flex-col gap-4'>
              <li className='text-[#183F5B] border-l-4 border-[#183F5B] pl-5'>
                My Profile
              </li>
              <li>Security</li>
            </div>
            <div className='text-[#2F2F2F] font-bold'>
              <Link
                to='/login'
                onClick={handleSignOut}
                className='flex items-center gap-2'>
                <img src='logOut.png' alt='logout' className='w-6 h-6' />
                Log Out
              </Link>
            </div>
          </ul>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
