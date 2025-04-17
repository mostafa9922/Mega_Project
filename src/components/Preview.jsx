import { NavBar_perview } from "./NavBar_perview";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { LuFolderSearch } from "react-icons/lu";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Find Your Dream Job",
    description:
      "Browse thousands of job listings, get personalized recommendations, and apply easily.",
  },
  {
    title: "Perfect Your Resume",
    description:
      "Upload your resume and get expert suggestions to make it stand out.",
  },
  {
    title: "Ace Your Interviews",
    description:
      "Practice with AI-powered mock interviews and get instant feedback.",
  },
];

export const Preview = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='bg-[#EFF8F0] flex-grow w-full'>
        <NavBar_perview />
        <section className='relative flex flex-col items-center justify-center pt-12'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 py-12'>
            {/* Left Text Content */}
            <div className='max-w-lg flex flex-col items-start gap-4 sm:gap-6'>
              <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[#183F5B] leading-tight'>
                Job Search, Resume Review <br /> & Interview Prep
              </h1>
              <h2 className='text-lg sm:text-xl lg:text-2xl font-semibold text-[#00000085]'>
                All in One!
              </h2>
              <p className='text-base text-[#183F5B]'>
                Get organized. Get business. Get paid.
                <br />
                Get back to the work that drives you.
              </p>
              <Link to='/login'>
                <Button
                  className='bg-[#214560] px-6 py-3 text-sm sm:text-base uppercase font-semibold rounded-full shadow-md hover:bg-[#173247] transition-colors'
                  aria-label='Get started with job search, resume review, and interview prep'>
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Right Image */}
            <div className='w-full max-w-md'>
              <img
                className='w-full max-h-[300px] sm:max-h-full h-auto object-cover object-center'
                src='/image 2.png'
                alt='Illustration of job search process'
                loading='lazy'
              />
            </div>
          </div>

          {/* Feature Cards */}
          <div className='relative w-full px-4 sm:px-6 mb-12'>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white shadow-lg rounded-xl p-4 sm:p-6 max-w-6xl mx-auto'>
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className='w-full rounded-none shadow-none'
                  aria-labelledby={`feature-title-${index}`}>
                  <CardBody className='flex flex-col items-center gap-3 p-4'>
                    <LuFolderSearch
                      className='text-4xl sm:text-5xl text-gray-500'
                      aria-hidden='true'
                    />
                    <Typography
                      id={`feature-title-${index}`}
                      variant='h5'
                      color='blue-gray'
                      className='text-lg sm:text-xl font-semibold text-center'>
                      {feature.title}
                    </Typography>
                    <Typography className='text-sm sm:text-base text-gray-600 text-center'>
                      {feature.description}
                    </Typography>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className='mt-16 sm:mt-32 text-center px-4'>
        <Typography variant='h6' color='blue-gray'>
          Trusted by thousands of job seekers and employers
        </Typography>

        <div className='flex flex-wrap items-center justify-center gap-6 mt-8'>
          <img
            src='/CoinBase.png'
            alt='CoinBase Logo'
            className='h-6 sm:h-6 object-contain'
          />
          <img
            src='/Zoom.png'
            alt='Zoom Logo'
            className='h-10 sm:h-12 object-contain'
          />
          <img
            src='/Slack.png'
            alt='Slack Logo'
            className='h-10 sm:h-12 object-contain'
          />
          <img
            src='/Webflow.png'
            alt='Webflow Logo'
            className='h-10 sm:h-12 object-contain'
          />
          <img
            src='/Adobe.png'
            alt='Adobe Logo'
            className='h-10 sm:h-12 object-contain'
          />
          <img
            src='/Spotify.png'
            alt='Spotify Logo'
            className='h-10 sm:h-12 object-contain'
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};
