import React from "react";
import { NavMenu } from "./NavMenu";
import { jwtDecode } from "jwt-decode";

export const Dashboard = ({ loggedIn, setLoggedIn }) => {

  return (
    <div className='min-h-screen bg-gray-50'>
      <NavMenu loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <div className='container mx-auto px-4 py-8 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold text-[#183F5B] mb-6 md:text-4xl'>
          DashBoard
        </h1>
      </div>
    </div>
  );
};
