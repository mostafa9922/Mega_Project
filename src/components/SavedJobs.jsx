import { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import { JobCard } from "./JobCard";
import { Pagination } from "./Pagination";

export const SavedJobs = () => {
  const jobsPerPage = 4;

  const [active, setActive] = useState(() => {
    return parseInt(localStorage.getItem("savedJobsPage")) || 1;
  });

  // Simulated saved jobs list
  const allJobs = Array.from({ length: 22 }, (_, i) => ({
    id: i + 1,
    title: `Job Title ${i + 1}`,
    company: `Company ${i + 1}`,
  }));

  useEffect(() => {
    localStorage.setItem("savedJobsPage", active);
  }, [active]);

  const paginatedJobs = allJobs.slice(
    (active - 1) * jobsPerPage,
    active * jobsPerPage
  );

  return (
    <div className='w-full p-6'>
      <Typography variant='h4' color='blue-gray' className='mb-2'>
        {`Saved Jobs (${allJobs.length})`}
      </Typography>
      <Typography variant='lead' color='blue-gray' className='mb-8'>
        Here you can find all the jobs you have saved.
      </Typography>
      <div className='flex flex-wrap gap-4 justify-center'>
        {paginatedJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      <div className='mt-6 flex justify-center'>
        <Pagination
          active={active}
          totalPages={Math.ceil(allJobs.length / jobsPerPage)}
          onChange={setActive}
        />
      </div>
    </div>
  );
};
