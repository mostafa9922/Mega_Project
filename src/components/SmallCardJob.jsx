import {
  Card,
  CardHeader,
  Typography,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function SmallCardJob({
  id,
  title,
  company,
  location,
  salary,
  logo,
  to,
}) {
  const [open, setOpen] = useState(true); // Start with card visible

  // Check localStorage when component mounts
  useEffect(() => {
    const closedCards = JSON.parse(localStorage.getItem("closedCards") || "[]");
    if (closedCards.includes(id)) {
      setOpen(false);
    }
  }, [id]);

  const handleOpen = () => {
    setOpen(false);
    // Save the closed card ID to localStorage
    const closedCards = JSON.parse(localStorage.getItem("closedCards") || "[]");
    if (!closedCards.includes(id)) {
      closedCards.push(id);
      localStorage.setItem("closedCards", JSON.stringify(closedCards));
    }
  };

  if (!open) return null; // Return null when closed to remove from DOM

  return (
    <Card
      color='transparent'
      shadow={false}
      className='w-full max-w-[20rem] border-2 border-[#87878766] px-2 sm:px-4 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg'>
      <CardHeader
        color='transparent'
        floated={false}
        shadow={false}
        className='mx-0 flex items-start justify-between gap-2 p-2 sm:p-3'>
        <Link to={to} className='flex items-start gap-2'>
          <Avatar
            size='lg'
            variant='circular'
            src={logo}
            alt={`${company} logo`}
            className='h-8 w-8 sm:h-10 sm:w-10 shrink-0'
          />
          <div className='flex-1'>
            <div className='flex items-center justify-between mb-0.5'>
              <Typography
                variant='h5'
                className='text-[#549ACC] text-sm sm:text-base font-medium'>
                {title}
              </Typography>
            </div>
            <Typography
              color='blue-gray'
              className='text-xs sm:text-sm font-normal mb-1'>
              {company}
            </Typography>
            <div className='flex items-center gap-2 sm:gap-3 flex-wrap text-xs'>
              <Typography color='blue-gray'>{location}</Typography>
              <Typography color='blue-gray'>{salary}</Typography>
            </div>
          </div>
        </Link>
        <IconButton
          color='blue-gray'
          size='sm'
          variant='text'
          onClick={handleOpen}
          className='ml-1 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-gray-500'
          aria-label={open ? "Close card" : "Open card"}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
            className='h-4 w-4 sm:h-5 sm:w-5'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </IconButton>
      </CardHeader>
    </Card>
  );
}
