import React from "react";
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";

const profileMenuItems = [
  { label: "My Profile", icon: UserCircleIcon, to: "/userprofile" },
  { label: "Settings", icon: Cog6ToothIcon, to: "/settings" }, // Add actual route
  { label: "Inbox", icon: InboxArrowDownIcon, to: "#" }, // Add actual route
  { label: "Help", icon: LifebuoyIcon, to: "#" }, // Add actual route
  { label: "Sign Out", icon: PowerIcon, to: "/login" },
];

export function UserAvatar({ setLoggedIn }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  const handleSignOut = () => {
    localStorage.clear();
    setLoggedIn(false);
  };
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement='bottom-end'>
      <MenuHandler>
        <Button
          variant='text'
          color='blue-gray'
          className='flex items-center rounded-full p-0'
          aria-label='Open user menu'>
          <Avatar
            variant='circular'
            size='md'
            alt={"User avatar"}
            withBorder={true}
            color='blue-gray'
            className='w-10 h-10'
            src={"https://docs.material-tailwind.com/img/face-2.jpg"}
          />
        </Button>
      </MenuHandler>
      <MenuList className='p-1'>
        {profileMenuItems.map(({ label, icon, to }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={key}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}>
              <Link
                to={to}
                className='flex items-center gap-2 w-full'
                onClick={isLastItem && handleSignOut}>
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                  strokeWidth: 2,
                })}
                <Typography
                  as='span'
                  variant='small'
                  className='font-normal'
                  color={isLastItem ? "red" : "inherit"}>
                  {label}
                </Typography>
              </Link>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
