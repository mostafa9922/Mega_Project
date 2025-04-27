import { Card, CardBody, Typography } from "@material-tailwind/react";
import { LuFolderSearch, LuSearch, LuBookOpen } from "react-icons/lu";
import { motion } from "framer-motion";
import { NavMenu } from "./NavMenu";

export const Profile = ({ loggedIn, setLoggedIn }) => {
  const cardsData = [
    {
      title: "Find Your Dream Job",
      description:
        "Browse thousands of job listings. Get personalized job recommendations. Apply with one click.",
      icon: LuSearch,
    },
    {
      title: "Track Your Applications",
      description:
        "Stay on top of your job hunt. Monitor the status of your job applications easily.",
      icon: LuFolderSearch,
    },
    {
      title: "Get Career Advice",
      description:
        "Access tips, blogs, and expert advice to improve your CV and ace interviews.",
      icon: LuBookOpen,
    },
  ];

  return (
    <div className='relative flex flex-col min-h-screen'>
      <NavMenu loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      {/* Background gradient layer */}
      <div className='absolute inset-0 h-full w-full bg-gradient-to-b from-[#E6F0FA] via-[#A3CFFA] to-[#4591C8] z-[-1] opacity-90' />

      {/* Main content */}
      <div className='flex flex-col items-center justify-center flex-grow gap-8 px-4 sm:px-6 lg:px-8 py-12'>
        {/* Search input and heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='relative w-full max-w-md sm:max-w-lg lg:max-w-2xl text-center'>
          <div className='relative flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='absolute w-5 h-5 top-3 left-3 text-gray-500'>
              <path
                fillRule='evenodd'
                d='M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z'
                clipRule='evenodd'
              />
            </svg>
            <input
              className='w-full bg-white placeholder:text-gray-400 text-gray-800 text-sm border border-gray-200 rounded-lg pl-10 pr-12 py-3 transition duration-300 ease focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-gray-300 shadow-sm focus:shadow-md'
              placeholder='Search for jobs...'
              type='text'
              name='search'
              id='search'
              aria-label='Search job input field'
            />
            <button
              className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded-md p-1.5 hover:bg-blue-600 transition duration-200'
              aria-label='Search'>
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
            </button>
          </div>
          <Typography
            variant='h1'
            className='text-2xl sm:text-3xl lg:text-4xl text-white font-bold mt-6 leading-tight'>
            Your Career, Simplified - Land Your Dream Job Today!
          </Typography>
        </motion.div>

        {/* Cards section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4'>
          {cardsData.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
                <Card className='w-full bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300'>
                  <CardBody className='text-center'>
                    <Icon className='text-5xl text-blue-600 mx-auto mb-4' />
                    <Typography
                      variant='h5'
                      color='blue-gray'
                      className='mb-2 font-semibold'>
                      {card.title}
                    </Typography>
                    <Typography className='text-gray-600 text-sm'>
                      {card.description}
                    </Typography>
                  </CardBody>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
