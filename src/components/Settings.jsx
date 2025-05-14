import { useState } from "react";
import { NavMenu } from "./NavMenu";
import { Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { ProfileSetting } from "./ProfileSetting";
import { SecuritySetting } from "./SecuritySetting";
import { SavedJobs } from "./SavedJobs";
import { Footer } from "./Footer";

function DefaultSidebar({ setLoggedIn, setPageselected, pageselected }) {
  const handleSignOut = () => {
    localStorage.clear();
    setLoggedIn(false);
  };

  const handlePageSelect = (page) => {
    setPageselected(page);
    localStorage.setItem("selectedPage", page);
  };

  const getLiClasses = (name) =>
    `pl-5 cursor-pointer ${
      pageselected === name
        ? "text-[#183F5B] border-l-4 border-[#183F5B] font-bold"
        : "text-[#7A7D85]"
    }`;

  return (
    <Card className='h-full w-full max-w-[12rem] p-4 shadow-xl border-r-2 border-[#C3C6CF] rounded-none'>
      <div className='mb-2 p-4'>
        <Typography variant='h3' className='text-[#183F5B] font-bold'>
          Settings
        </Typography>
      </div>
      <ul className='flex flex-col justify-between gap-4 px-4 h-full font-bold'>
        <div className='flex flex-col gap-4'>
          <li
            data-name='profile'
            className={getLiClasses("profile")}
            onClick={(e) => handlePageSelect(e.target.dataset.name)}>
            My Profile
          </li>
          <li
            data-name='security'
            className={getLiClasses("security")}
            onClick={(e) => handlePageSelect(e.target.dataset.name)}>
            Security
          </li>
          <li
            data-name='jobs'
            className={getLiClasses("jobs")}
            onClick={(e) => handlePageSelect(e.target.dataset.name)}>
            Saved Jobs
          </li>
        </div>
        <div className='text-[#2F2F2F] font-bold'>
          <Link
            to='/login'
            onClick={handleSignOut}
            className='flex items-center gap-2'>
            <img src='logOut.png' alt='logout' className='w-6 h-6' />
            Log Out
          </Link>
        </div>
      </ul>
    </Card>
  );
}

export const Settings = ({ loggedIn, setLoggedIn }) => {
  const [pageselected, setPageselected] = useState(() => {
    return localStorage.getItem("selectedPage") || "profile";
  });
  return (
    <div className='min-h-screen flex flex-col'>
      <NavMenu loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <div className='flex flex-col lg:flex-row gap-4 flex-grow'>
        <div className='hidden lg:block'>
          <DefaultSidebar
            setLoggedIn={setLoggedIn}
            setPageselected={setPageselected}
            pageselected={pageselected}
          />
        </div>
        {pageselected === "profile" ? (
          <ProfileSetting
            setPageselected={setPageselected}
            pageselected={pageselected}
          />
        ) : pageselected === "security" ? (
          <SecuritySetting setLoggedIn={setLoggedIn} />
        ) : pageselected === "jobs" ? (
          <SavedJobs />
        ) : null}
      </div>
      <Footer />
    </div>
  );
};
