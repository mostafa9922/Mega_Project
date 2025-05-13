import { NavMenu } from "./NavMenu";
import { Footer } from "./Footer";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { SmallCardJob } from "./SmallCardJob";

export const JobSearch = () => {
  const features = [
    { title: "Test Resume", to: "" },
    { title: "Interview prep", to: "" },
    { title: "Applications", to: "" },
    { title: "Saved jobs", to: "" },
  ];

  const recommendedJobs = [
    {
      id: "job1",
      title: "Social Media Manager",
      company: "Big Kahuna Burger Ltd.",
      location: "On-Site",
      salary: "$400 - $1000",
      logo: "/smallJob.png",
    },
    {
      id: "job2",
      title: "Frontend Developer",
      company: "TechTrend Innovations",
      location: "Remote",
      salary: "$800 - $1500",
      logo: "/smallJob.png",
    },
    {
      id: "job3",
      title: "UX Designer",
      company: "Creative Solutions Inc.",
      location: "Hybrid",
      salary: "$600 - $1200",
      logo: "/smallJob.png",
    },
    {
      id: "job4",
      title: "Data Analyst",
      company: "Insight Analytics",
      location: "On-Site",
      salary: "$500 - $1100",
      logo: "/smallJob.png",
    },
    {
      id: "job5",
      title: "Product Manager",
      company: "GrowthLabs",
      location: "Remote",
      salary: "$900 - $1800",
      logo: "/smallJob.png",
    },
    {
      id: "job6",
      title: "Backend Engineer",
      company: "CodeWorks",
      location: "Hybrid",
      salary: "$700 - $1400",
      logo: "/smallJob.png",
    },
    {
      id: "job7",
      title: "Marketing Specialist",
      company: "BrandBoost",
      location: "On-Site",
      salary: "$450 - $1000",
      logo: "/smallJob.png",
    },
    {
      id: "job8",
      title: "Graphic Designer",
      company: "DesignPro Studio",
      location: "Remote",
      salary: "$500 - $1100",
      logo: "/smallJob.png",
    },
  ];

  return (
    <div>
      <NavMenu />
      <main className='min-h-screen'>
        {/* Hero Section */}
        <div
          className='flex w-full flex-col justify-center items-center px-4 sm:px-6 lg:px-8'
          style={{
            backgroundImage: `url(/job_search.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "613px",
            minHeight: "calc(100vh - 80px)", // Adjust based on NavMenu height
          }}>
          <div className='text-center max-w-3xl mx-auto'>
            <Typography
              variant='h1'
              className='text-[#F9FBFC] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4'>
              Find your dream job
            </Typography>
            <p className='text-[#F9FBFC] text-base sm:text-lg md:text-xl mb-6'>
              Find your next career at companies like HubSpot, Nike, and Dropbox
            </p>
            <div className='bg-[#FFFFFF] rounded-lg flex items-center gap-3 p-3 sm:p-4 w-full max-w-lg mx-auto'>
              <label htmlFor='search' className='sr-only'>
                Search for jobs
              </label>
              <IoSearchOutline
                id='search'
                className='text-2xl sm:text-3xl flex-shrink-0'
              />
              <input
                type='search'
                className='placeholder:opacity-100 w-full text-base sm:text-xl focus-visible:outline-none'
                placeholder='Search for jobs, skills, or companies.'
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-4 my-5'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {features.map((feature, index) => (
              <Link to={feature.to} key={index} className='w-full'>
                <Card
                  className='w-full border-2 border-[#FFFFFF] shadow-[#00000040] hover:shadow-lg transition-shadow'
                  aria-labelledby={`feature-title-${index}`}>
                  <CardBody className='flex flex-col items-center gap-3 p-4'>
                    <img
                      src={`/G${index + 1}.png`}
                      alt={`Feature${index + 1}`}
                      className='w-auto h-16 sm:h-20 object-contain'
                      loading='lazy'
                    />
                    <Typography
                      id={`feature-title-${index}`}
                      variant='h5'
                      className='text-base sm:text-lg md:text-xl font-semibold text-center text-[#505051]'>
                      {feature.title}
                    </Typography>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Recommended Section */}
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-3 pb-8'>
          <Typography
            variant='h3'
            className='text-[#183F5B] text-2xl sm:text-3xl md:text-4xl'>
            Recommended for You
          </Typography>
          <p className='text-[#7C8493] text-sm sm:text-base md:text-lg'>
            Based on your profile, job recommendation, and recent activity
          </p>
          <div className='jobs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
            {recommendedJobs.map((job, index) => (
              <SmallCardJob
                key={index}
                {...job}
                to={`/job-details/${index + 1}`}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
