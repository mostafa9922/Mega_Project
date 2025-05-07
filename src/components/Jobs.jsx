import { JobCard } from "./JobCard";
import { NavMenu } from "./NavMenu";

export const Jobs = () => {
  return (
    <div>
      <NavMenu />
      <div className='flex flex-col justify-center items-center mt-10'>
        <div className='relative flex flex-col w-[60%] '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='absolute w-5 h-5 top-2.5 left-2.5 text-slate-600'>
            <path
              fillRule='evenodd'
              d='M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z'
              clipRule='evenodd'
            />
          </svg>
          <input
            className='w-full bg-[#F5F9FF] placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow'
            placeholder='Job Search'
            type='text'
            name='search'
            id='search'
          />
        </div>
        <div className='w-[60%] mt-10'>
          <JobCard />
        </div>
      </div>
    </div>
  );
};
