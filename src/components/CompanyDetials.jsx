import React from "react";
import { NavMenu } from "./NavMenu";
import { Footer } from "./Footer";
import { Typography, Avatar } from "@material-tailwind/react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaFireFlameCurved } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegBuilding } from "react-icons/fa";
import { CompanyList } from "./CompanyList";
import { FaLinkedin } from "react-icons/fa";

export const CompanyDetials = () => {
  return (
    <div className='min-h-screen'>
      <NavMenu />
      <main className='min-h-screen'>
        <div className='pt-16 px-4 sm:px-8 lg:px-16 flex flex-col gap-8 items-center justify-center mb-12'>
          <Typography
            variant='h2'
            className='text-[#25324B] w-full text-3xl sm:text-4xl lg:text-5xl'>
            Company Details
          </Typography>
          <div className='w-full'>
            <Link to='https://dealljob.com' className='flex gap-3 items-center'>
              <Avatar
                src='https://docs.material-tailwind.com/img/face-2.jpg'
                alt='avatar'
                size='xxl'
                className='w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24'
              />
              <div className='flex flex-col items-start gap-2'>
                <Typography
                  variant='h3'
                  className='text-[#2F343A] flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl'>
                  Deall Job
                  <IoCheckmarkCircle className='text-[#549ACC] text-xl sm:text-2xl lg:text-3xl' />
                </Typography>
                <span className='text-[#796C6C] text-xs sm:text-sm'>
                  https://dealljob.com
                </span>
              </div>
            </Link>
          </div>
          <div className='flex flex-col sm:flex-row items-center justify-around w-full gap-4 sm:gap-6'>
            <div className='flex items-center gap-3 sm:gap-4'>
              <FaFireFlameCurved className='text-[#549ACC] text-lg sm:text-xl' />
              <span className='flex flex-col'>
                <span className='text-[#515B6F] text-sm sm:text-base'>
                  Founded
                </span>
                <span className='text-[#25324B] font-bold text-sm sm:text-base'>
                  July 31, 2011
                </span>
              </span>
            </div>
            <div className='flex items-center gap-3 sm:gap-4'>
              <HiMiniUserGroup className='text-[#549ACC] text-lg sm:text-2xl' />
              <span className='flex flex-col'>
                <span className='text-[#515B6F] text-sm sm:text-base'>
                  Employees
                </span>
                <span className='text-[#25324B] font-bold text-sm sm:text-base'>
                  4000+
                </span>
              </span>
            </div>
            <div className='flex items-center gap-3 sm:gap-4'>
              <FaLocationDot className='text-[#549ACC] text-lg sm:text-xl' />
              <span className='flex flex-col'>
                <span className='text-[#515B6F] text-sm sm:text-base'>
                  Location
                </span>
                <span className='text-[#25324B] font-bold text-sm sm:text-base'>
                  20 countries
                </span>
              </span>
            </div>
            <div className='flex items-center gap-3 sm:gap-4'>
              <FaRegBuilding className='text-[#549ACC] text-lg sm:text-xl' />
              <span className='flex flex-col'>
                <span className='text-[#515B6F] text-sm sm:text-base'>
                  Industry
                </span>
                <span className='text-[#25324B] font-bold text-sm sm:text-base'>
                  Payment Gateway
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row justify-between p-4 sm:p-6 lg:p-10 gap-8'>
          <div className='px-4 sm:px-8 lg:px-16 flex flex-col gap-6 w-full lg:w-2/3'>
            <div className='flex flex-col gap-3'>
              <Typography
                variant='h3'
                className='text-[#25324B] font-bold text-2xl sm:text-3xl'>
                Company Profile
              </Typography>
              <p className='text-[#515B6F] text-sm sm:text-base'>
                Stripe is a software platform for starting and running internet
                businesses. Millions of businesses rely on Stripe’s software
                tools to accept payments, expand globally, and manage their
                businesses online. Stripe has been at the forefront of expanding
                internet commerce, powering new business models, and supporting
                the latest platforms, from marketplaces to mobile commerce
                sites. We believe that growing the GDP of the internet is a
                problem rooted in code and design, not finance. Stripe is built
                for developers, makers, and creators. We work on solving the
                hard technical problems necessary to build global economic
                infrastructure—from designing highly reliable systems to
                developing advanced machine learning algorithms to prevent
                fraud.
              </p>
            </div>
            <div className='flex flex-col gap-3'>
              <Typography
                variant='h3'
                className='text-[#25324B] font-bold text-2xl sm:text-3xl'>
                Contact
              </Typography>
              <div className='links flex flex-wrap gap-3 sm:gap-4'>
                <Link
                  to=''
                  className='border-2 border-[#183F5B] flex gap-2 items-center p-2 w-fit text-sm sm:text-base'>
                  <FaLinkedin className='text-lg sm:text-xl text-[#183F5B]' />
                  <span className='text-[#183F5B]'>
                    linkedin.com/company/stripe
                  </span>
                </Link>
                <Link
                  to=''
                  className='border-2 border-[#183F5B] flex gap-2 items-center p-2 w-fit text-sm sm:text-base'>
                  <FaLinkedin className='text-lg sm:text-xl text-[#183F5B]' />
                  <span className='text-[#183F5B]'>
                    linkedin.com/company/stripe
                  </span>
                </Link>
                <Link
                  to=''
                  className='border-2 border-[#183F5B] flex gap-2 items-center p-2 w-fit text-sm sm:text-base'>
                  <FaLinkedin className='text-lg sm:text-xl text-[#183F5B]' />
                  <span className='text-[#183F5B]'>
                    linkedin.com/company/stripe
                  </span>
                </Link>
              </div>
              <div className='images flex flex-wrap items-center gap-4'>
                <img
                  className='object-cover object-center w-24 h-24 sm:w-32 sm:h-32'
                  src='/co1.png'
                  alt='company image 1'
                />
                <img
                  className='object-cover object-center w-24 h-24 sm:w-32 sm:h-32'
                  src='/co2.png'
                  alt='company image 2'
                />
              </div>
            </div>
            <div className='flex flex-col gap-5'>
              <Typography
                variant='h3'
                className='text-[#25324B] font-bold text-2xl sm:text-3xl'>
                Open Jobs
              </Typography>
            </div>
          </div>
          <aside className='w-full lg:w-1/3 px-4 sm:px-8'>
            <CompanyList />
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};
