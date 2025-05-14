import { useState } from "react";
import { NavMenu } from "./NavMenu";
import { Footer } from "./Footer";
import { DashTable } from "./DashTable";

export const Dashboard = ({ loggedIn, setLoggedIn }) => {
  const [TABLE_ROWS] = useState([
    {
      img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
      name: "Spotify",
      roles: "Social Media Assistant",
      date: "2021-07-24",
      status: "In Review",
    },
    {
      img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
      name: "Amazon",
      roles: "Social Media Assistant",
      date: "2021-07-24",
      status: "Shortlisted",
    },
    {
      img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
      name: "Pinterest",
      roles: "Social Media Assistant",
      date: "2021-07-24",
      status: "Offered",
    },
    {
      img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
      name: "Google",
      roles: "Social Media Assistant",
      date: "2021-07-24",
      status: "Interviewing",
    },
    {
      img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
      name: "Netflix",
      roles: "Social Media Assistant",
      date: "2021-07-24",
      status: "Unsuitable",
    },
  ]);
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
    if (filter === "All") return TABLE_ROWS.length;
    if (filter === "In Review")
      return TABLE_ROWS.filter((row) => row.status === filter).length;
    if (filter === "Interviewing")
      return TABLE_ROWS.filter((row) => row.status === filter).length;
    if (filter === "Assessment")
      return TABLE_ROWS.filter((row) => row.status === filter).length;
    if (filter === "Offered")
      return TABLE_ROWS.filter((row) => row.status === filter).length;
    if (filter === "Hired")
      return TABLE_ROWS.filter((row) => row.status === filter).length;
    return 0;
  };

  const [selectedStatus, setSelectedStatus] = useState("All");

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
              name={filter}
              onClick={(e) => {
                setActiveFilter(filter);
                setSelectedStatus(e.target.name);
              }}
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
          <DashTable
            filter={{ status: selectedStatus }}
            TABLE_ROWS={TABLE_ROWS}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
