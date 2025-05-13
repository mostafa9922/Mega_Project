import { useState } from "react";
import { JobCard } from "./JobCard";
import { NavMenu } from "./NavMenu";
import { Footer } from "./Footer";
import { JobDrawerNav } from "./JobDrawerNav";
import { JobSideBar } from "./JobSideBar";
import { Typography, Select, Option } from "@material-tailwind/react";
import { Pagination } from "./Pagination";
import { Link } from "react-router-dom";

const allJobs = new Array(73).fill({}).map((_, index) => ({ id: index + 1 })); // Add unique IDs

export const Jobs = () => {
  const [active, setActive] = useState(1);
  const jobsPerPage = 10;

  // Calculate jobs to display on the current page
  const startIndex = (active - 1) * jobsPerPage;
  const currentJobs = allJobs.slice(startIndex, startIndex + jobsPerPage);

  return (
    <div className='min-h-screen bg-white flex flex-col'>
      <NavMenu />

      <main className='flex-1 flex flex-col lg:flex-row'>
        <aside className='w-full lg:w-1/4 px-4 pt-6'>
          <div className='block lg:hidden'>
            <JobDrawerNav />
          </div>
          <div className='hidden lg:block min-h-full'>
            <JobSideBar />
          </div>
        </aside>

        <section className='w-full lg:w-3/4 px-4 py-10 flex flex-col items-start'>
          <div className='w-full flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8'>
            <div className='mb-4 lg:mb-0'>
              <Typography variant='h3' className='text-[#373636]'>
                Search Results
              </Typography>
              <span className='text-[#7C8493]'>
                Showing {allJobs.length} Results
              </span>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-3 w-full lg:w-auto'>
              <label htmlFor='sort-select' className='text-sm font-medium'>
                Sort By:
              </label>
              <Select
                id='sort-select'
                variant='standard'
                label='Sort By'
                defaultValue='Most Relevant'
                className='w-full'>
                <Option>Most Relevant</Option>
                <Option>Newest</Option>
                <Option>Highest Salary</Option>
                <Option>Location</Option>
              </Select>
            </div>
          </div>

          <div className='w-full max-w-3xl flex flex-col gap-5'>
            {currentJobs.map((job) => (
              <Link to={`/job-details/${job.id}`} key={job.id}>
                <JobCard job={job} />
              </Link>
            ))}

            <div className='mt-8 flex justify-center'>
              <Pagination
                active={active}
                totalPages={Math.ceil(allJobs.length / jobsPerPage)}
                onChange={setActive}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
