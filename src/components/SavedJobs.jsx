import React, { useState, useEffect } from "react";
import { Typography, Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { JobCard } from "./JobCard";

export function DefaultPagination({ active, onChange, totalPages }) {
  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => onChange(index),
  });

  const next = () => {
    if (active === totalPages) return;
    onChange(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    onChange(active - 1);
  };

  return (
    <div className='flex flex-wrap items-center justify-center gap-4 mt-6'>
      <Button
        variant='text'
        className='flex items-center gap-2 text-sm'
        onClick={prev}
        disabled={active === 1}>
        <ArrowLeftIcon strokeWidth={2} className='h-4 w-4' /> Previous
      </Button>

      <div className='flex flex-wrap justify-center gap-2'>
        {Array.from({ length: totalPages }, (_, i) => (
          <IconButton
            key={i + 1}
            {...getItemProps(i + 1)}
            className={`w-10 h-10 text-sm ${
              active === i + 1 && "bg-[#549ACC]"
            }`}>
            {i + 1}
          </IconButton>
        ))}
      </div>

      <Button
        variant='text'
        className='flex items-center gap-2 text-sm'
        onClick={next}
        disabled={active === totalPages}>
        Next <ArrowRightIcon strokeWidth={2} className='h-4 w-4' />
      </Button>
    </div>
  );
}

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
        <DefaultPagination
          active={active}
          totalPages={Math.ceil(allJobs.length / jobsPerPage)}
          onChange={setActive}
        />
      </div>
    </div>
  );
};
