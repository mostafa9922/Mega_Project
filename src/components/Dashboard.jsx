import { useState } from "react";
import { NavMenu } from "./NavMenu";
import { Footer } from "./Footer";
import { DashTable } from "./DashTable";

export const Dashboard = ({ loggedIn, setLoggedIn }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = [
    "All",
    "In Review",
    "Interviewing",
    "Assessment",
    "Offered",
    "Hired",
  ];

  const getFilterCount = (filter) => {
    if (filter === "All") return 5;
    return 0;
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      <NavMenu loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <div className='container mx-auto px-4 py-8 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold text-[#183F5B] mb-6 md:text-4xl'>
          Dashboard
        </h1>

        <div className='flex justify-between items-center mb-10 flex-wrap gap-2'>
          <p className='text-[#7C8493]'>
            Here is job applications status from July 19 - July 25.
          </p>
          <input type='date' className='border px-2 py-1 rounded' />
        </div>

        <div className='flex gap-6 border-b-2 pb-4 mb-10 flex-wrap'>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-sm sm:text-base ${
                activeFilter === filter
                  ? "text-[#25324B] font-bold border-b-2 border-[#25324B]"
                  : "text-[#7C8493]"
              }`}>
              {filter} ({getFilterCount(filter)})
            </button>
          ))}
        </div>

        <div>
          <DashTable />
        </div>
      </div>
      <Footer />
    </div>
  );
};
