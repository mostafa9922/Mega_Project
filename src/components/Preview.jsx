import { NavBar_perview } from "./NavBar_perview";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { LuFolderSearch } from "react-icons/lu";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

export const Preview = () => {
  return (
    <div>
      <div className='min-h-screen bg-gradient-to-b from-[#4591C8] to-[#2A5A8E]'>
        <NavBar_perview />
        <div className="w-full min-h-screen bg-[url('/image2.png')] bg-cover bg-center">
          {/* Add padding-top to offset the fixed navbar */}
          <div className='pt-[8vh] flex items-center justify-center min-h-screen'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex flex-col items-center justify-center gap-6 sm:gap-8'>
              {/* Header Section */}
              <div className='text-center w-full max-w-2xl'>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2'>
                  Job Search, Resume Review
                </h1>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2'>
                  & Interview Prep
                </h1>
                <div className='flex flex-col items-center justify-center gap-3 sm:gap-4'>
                  <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white'>
                    All in One!
                  </h2>
                  <Link to='/login'>
                    <Button
                      className='bg-[#214560] px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg uppercase font-semibold rounded-full shadow-md hover:bg-[#173247] transition'
                      aria-label='Get started with job search'>
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Cards Section */}
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl'>
                {/* Card 1 */}
                <Card className='w-full bg-white rounded-lg shadow-md hover:shadow-lg transition'>
                  <CardBody className='flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6'>
                    <LuFolderSearch
                      className='text-3xl sm:text-4xl md:text-5xl text-gray-500'
                      aria-hidden='true'
                    />
                    <Typography
                      variant='h5'
                      color='blue-gray'
                      className='text-base sm:text-lg md:text-xl font-semibold'>
                      Find Your Dream Job
                    </Typography>
                    <Typography className='text-xs sm:text-sm md:text-base text-gray-600'>
                      Browse thousands of job listings, get personalized
                      recommendations, and apply easily.
                    </Typography>
                  </CardBody>
                </Card>

                {/* Card 2 */}
                <Card className='w-full bg-white rounded-lg shadow-md hover:shadow-lg transition'>
                  <CardBody className='flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6'>
                    <LuFolderSearch
                      className='text-3xl sm:text-4xl md:text-5xl text-gray-500'
                      aria-hidden='true'
                    />
                    <Typography
                      variant='h5'
                      color='blue-gray'
                      className='text-base sm:text-lg md:text-xl font-semibold'>
                      Perfect Your Resume
                    </Typography>
                    <Typography className='text-xs sm:text-sm md:text-base text-gray-600'>
                      Upload your resume and get expert suggestions to make it
                      stand out.
                    </Typography>
                  </CardBody>
                </Card>

                {/* Card 3 */}
                <Card className='w-full bg-white rounded-lg shadow-md hover:shadow-lg transition'>
                  <CardBody className='flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6'>
                    <LuFolderSearch
                      className='text-3xl sm:text-4xl md:text-5xl text-gray-500'
                      aria-hidden='true'
                    />
                    <Typography
                      variant='h5'
                      color='blue-gray'
                      className='text-base sm:text-lg md:text-xl font-semibold'>
                      Ace Your Interviews
                    </Typography>
                    <Typography className='text-xs sm:text-sm md:text-base text-gray-600'>
                      Practice with AI-powered mock interviews and get instant
                      feedback.
                    </Typography>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
