import { NavMenu } from "./NavMenu";
import {
  Avatar,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { FaShareSquare } from "react-icons/fa";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoCheckmarkCircle } from "react-icons/io5";
import { RiPokerDiamondsFill } from "react-icons/ri";
import React from "react";
import { ApplicaionDialog } from "./ApplicaionDialog";
import { SmallCardJob } from "./SmallCardJob";

export const JobDetails = () => {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const relatedJobs = [
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
    <div className='min-h-screen'>
      <ApplicaionDialog open={open} handleOpen={handleOpen} />
      <NavMenu />
      <div className='flex flex-col lg:flex-row-reverse justify-between px-4 sm:px-8 lg:px-20 pt-6 sm:pt-8 lg:pt-10 mb-5'>
        <aside className='w-full lg:w-1/4  lg:mb-0 flex flex-col gap-3 border-2 border-[#87878766] rounded-xl p-4'>
          <Typography variant='h3' className='text-[#183F5B]'>
            Related Jobs
          </Typography>
          {relatedJobs.map((job, index) => (
            <SmallCardJob
              key={index}
              {...job}
              to={`/job-details/${index + 1}`}
            />
          ))}
        </aside>
        <main className='w-full lg:w-3/4 flex flex-col gap-6 sm:gap-8 lg:gap-10 lg:pr-7'>
          <div className='flex flex-col gap-6 sm:gap-8'>
            <Typography
              variant='h2'
              className='text-[#25324B] text-2xl sm:text-3xl lg:text-4xl'>
              Job Details
            </Typography>
            <div className='flex flex-col gap-3'>
              <span className='text-[#796C6C] text-sm sm:text-base'>
                Full time . Remote
              </span>
              <Typography
                variant='h3'
                className='text-[#2775AD] text-xl sm:text-2xl lg:text-3xl'>
                Data Analyst
              </Typography>
              <div className='flex gap-3 items-center'>
                <Avatar
                  src='https://docs.material-tailwind.com/img/face-2.jpg'
                  alt='avatar'
                  className='w-10 h-10 sm:w-12 sm:h-12'
                />
                <Link to='/company-details/1' className='flex flex-col gap-1'>
                  <span className='text-[#2F343A] flex items-center gap-2 text-sm sm:text-base'>
                    Deall Job
                    <IoCheckmarkCircle className='text-[#549ACC] text-lg sm:text-xl' />
                  </span>
                  <span className='text-[#796C6C] text-xs sm:text-sm'>
                    Cairo Egypt
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0'>
            <div className='flex items-center gap-4 sm:gap-8'>
              <IconButton
                variant='text'
                size='lg'
                color={isFavorite ? "red" : "blue-gray"}
                onClick={handleIsFavorite}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='h-10 w-10'>
                  <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
                </svg>
              </IconButton>
              <Button
                onClick={handleOpen}
                className='bg-[#549ACC] flex items-center gap-2 text-sm sm:text-base'>
                <FaShareSquare />
                Apply for Job
              </Button>
            </div>
            <span className='text-[#A3A2AE] text-xs sm:text-sm'>
              Updated 23 Days Ago
            </span>
          </div>
          <div className='flex flex-col sm:flex-row justify-around gap-4 sm:gap-0'>
            <div className='border-b sm:border-b-0 sm:border-r-2 border-[#CDCDCD] flex flex-col items-center justify-center py-4 sm:py-0 sm:pr-8 lg:pr-20'>
              <Typography
                variant='h5'
                className='text-[#C3C8D4] text-base sm:text-lg lg:text-xl'>
                Experience
              </Typography>
              <Typography
                variant='h5'
                className='text-[#95989F] text-base sm:text-lg lg:text-xl'>
                2 - 6 Years
              </Typography>
            </div>
            <div className='border-b sm:border-b-0 sm:border-r-2 border-[#CDCDCD] flex flex-col items-center justify-center py-4 sm:py-0 sm:pr-8 lg:pr-20'>
              <Typography
                variant='h5'
                className='text-[#C3C8D4] text-base sm:text-lg lg:text-xl'>
                Salary
              </Typography>
              <Typography
                variant='h5'
                className='text-[#95989F] text-base sm:text-lg lg:text-xl'>
                20 - 30 k
              </Typography>
            </div>
            <div className='flex flex-col items-center justify-center py-4 sm:py-0 sm:pr-8 lg:pr-20'>
              <Typography
                variant='h5'
                className='text-[#C3C8D4] text-base sm:text-lg lg:text-xl'>
                Level
              </Typography>
              <Typography
                variant='h5'
                className='text-[#95989F] text-base sm:text-lg lg:text-xl'>
                Entry Level
              </Typography>
            </div>
          </div>
          <div className='flex flex-col gap-3 p-4'>
            <Typography
              variant='h3'
              className='text-[#000000] text-xl sm:text-2xl lg:text-3xl'>
              Job Description
            </Typography>
            <p className='text-[#3D3939] text-sm sm:text-base'>
              We are seeking a skilled Data Analyst to join our team. You will
              be responsible for collecting, analyzing, and interpreting large
              datasets to help drive business decisions. If you have a passion
              for numbers and insights, we’d love to hear from you
            </p>
          </div>
          <div className='flex flex-col gap-3 p-4'>
            <Typography
              variant='h3'
              className='text-[#000000] text-xl sm:text-2xl lg:text-3xl'>
              Requirements & Qualifications
            </Typography>
            <ul className='text-[#454040] flex flex-col gap-2 text-sm sm:text-base'>
              <li className='flex gap-2 items-center'>
                <RiPokerDiamondsFill className='text-[#549ACC] text-lg sm:text-xl' />
                Skills Required: SQL, Python, Power BI, Excel, Data
                Visualization
              </li>
              <li className='flex gap-2 items-center'>
                <RiPokerDiamondsFill className='text-[#549ACC] text-lg sm:text-xl' />
                Experience Level: 1-3 years in a data analysis role
              </li>
              <li className='flex gap-2 items-center'>
                <RiPokerDiamondsFill className='text-[#549ACC] text-lg sm:text-xl' />
                Education: Bachelor's degree in Data Science, Computer Science,
                or related field
              </li>
              <li className='flex gap-2 items-center'>
                <RiPokerDiamondsFill className='text-[#549ACC] text-lg sm:text-xl' />
                Preferred: Experience with machine learning or predictive
                analytics
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-3 p-4'>
            <Typography
              variant='h3'
              className='text-[#000000] text-xl sm:text-2xl lg:text-3xl'>
              Responsibilities
            </Typography>
            <ul className='text-[#484444] flex flex-col gap-2 text-sm sm:text-base'>
              <li className='flex gap-2 items-center'>
                <IoIosCheckmarkCircle className='text-[#549ACC] text-lg sm:text-xl' />
                Collect, clean, and analyze large datasets
              </li>
              <li className='flex gap-2 items-center'>
                <IoIosCheckmarkCircle className='text-[#549ACC] text-lg sm:text-xl' />
                Create data visualizations and dashboards using Power BI &
                Tableau.
              </li>
              <li className='flex gap-2 items-center'>
                <IoIosCheckmarkCircle className='text-[#549ACC] text-lg sm:text-xl' />
                Identify trends and insights to improve business strategy.
              </li>
              <li className='flex gap-2 items-center'>
                <IoIosCheckmarkCircle className='text-[#549ACC] text-lg sm:text-xl' />
                Skill with cross-functional teams to support data-driven
                decision-making.
              </li>
              <li className='flex gap-2 items-center'>
                <IoIosCheckmarkCircle className='text-[#549ACC] text-lg sm:text-xl' />
                Ensure data accuracy and maintain documentation
              </li>
            </ul>
          </div>
          <div className='p-4 flex flex-col gap-4 items-start'>
            <Typography
              variant='h5'
              className='text-[#000000] text-base sm:text-lg lg:text-xl'>
              About Company
            </Typography>
            <p className='text-[#7A7D85] text-sm sm:text-base'>
              TechVista Solutions is a global leader in data-driven solutions.
              We empower businesses with real-time insights, helping them make
              smarter decisions. Join our innovative team and grow your career
              in data analytics!
            </p>
            <Link
              to='/company-details/1'
              className='text-[#549ACC] border-b-2 border-[#549ACC] text-sm sm:text-base'>
              View more jobs from this company
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};
