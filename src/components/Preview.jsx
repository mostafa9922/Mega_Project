import { NavBar_perview } from "./NavBar_perview";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Create Account",
    description: "First you have to create a account  here",
  },
  {
    title: "Find your dream job  ",
    description: "Search the best freelance work here",
  },
  {
    title: "Save and apply",
    description: "Apply or save and start your work",
  },
];
const features2 = [
  {
    title: "Find Your Dream Job",
    description:
      "Browse thousands of job listings.Get personalized job recommendations.Apply with one click",
    image: "/hugeicons_job-search.png",
  },
  {
    title: "Perfect Your Resume  ",
    description:
      "AI-powered resume analysis.Get instant feedback & optimization tips.Stand out to recruiters.",
    image: "/qlementine-icons_resume-16.png",
  },
  {
    title: "Ace Your Interviews",
    description:
      "AI-driven mock interviews.Common interview questions & answers.Personalized feedback to boost confidence.",
    image: "/codicon_verified.png",
  },
];

export const Preview = ({ loggedIn, setLoggedIn }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='bg-[#EFF8F0] flex-grow w-full'>
        <NavBar_perview loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
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
                src='/Illustration.png'
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
                    <img
                      src={`/Group ${index + 1}.png`}
                      alt={`Feature ${index + 1}`}
                      className='w-auto h-20 object-contain'
                      loading='lazy'
                    />
                    <Typography
                      id={`feature-title-${index}`}
                      variant='h5'
                      className='text-lg sm:text-xl font-semibold text-center text-[#252525]'>
                      {feature.title}
                    </Typography>
                    <Typography className='text-sm sm:text-base text-[#9D9D9D] text-center'>
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

        <div className='flex flex-wrap items-center justify-center gap-12 mt-8'>
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

      <div className='mt-16 sm:mt-32 text-center px-4'>
        <div className='relative w-full px-4 sm:px-6 mb-12'>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 p-4 sm:p-6 max-w-6xl mx-auto'>
            {features2.map((feature, index) => (
              <Card
                key={index}
                className='w-full rounded-xl shadow-xl'
                aria-labelledby={`feature-title-${index}`}>
                <CardBody className='flex flex-col items-center gap-3 p-4'>
                  <img src={`${feature.image}`} alt='' />
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
      </div>

      <Footer />
    </div>
  );
};
