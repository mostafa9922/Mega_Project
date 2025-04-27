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

// Profile menu items
const profileMenuItems = [
  { label: "My Profile", icon: UserCircleIcon, to: "/userprofile" },
  { label: "Edit Profile", icon: Cog6ToothIcon, to: "/#" }, // Add actual route
  { label: "Inbox", icon: InboxArrowDownIcon, to: "/#" }, // Add actual route
  { label: "Help", icon: LifebuoyIcon, to: "/#" }, // Add actual route
  { label: "Sign Out", icon: PowerIcon, to: "/" }, // Use # since navigation is handled in onClick
];

export function UserAvatar({ loggedIn, setLoggedIn }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const navigate = useNavigate();

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
            className='w-10 h-10' // Replace max-w-[200%] with fixed size
            src={"https://docs.material-tailwind.com/img/face-2.jpg"}
          />
        </Button>
      </MenuHandler>
      <MenuList className='p-1'>
        {profileMenuItems.map(({ label, icon, to }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={() => {
                closeMenu();
                if (label === "Sign Out") {
                  setLoggedIn(false);
                  navigate("/login");
                }
              }}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}>
              <Link to={to} className='flex items-center gap-2 w-full'>
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
