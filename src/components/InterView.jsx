import { ChatBox } from "./ChatBox";
import { NavMenu } from "./NavMenu";
import { SideBar } from "./SideBar";

import { Card, CardBody, Typography } from "@material-tailwind/react";

export const InterView = () => {
  const handleCardClick = (prompt) => {
    // Logic to populate ChatBox with the prompt (e.g., via a ref or state)
    console.log("Selected prompt:", prompt); // Replace with actual ChatBox integration
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      <NavMenu />
      <div className='flex flex-col justify-between lg:flex-row gap-4 lg:gap-10 p-4 lg:p-6'>
        <SideBar className='w-full lg:w-1/4' />
        <div className='flex-1 flex flex-col items-center justify-center gap-8 lg:gap-12 w-full'>
          <div className='flex flex-col items-center justify-between w-full gap-2 lg:gap-4'>
            <p className='text-[#549ACC] text-lg sm:text-xl lg:text-2xl font-bold text-center'>
              Ace Your Next Interview with Confidence!
            </p>
            <p className='text-gray-500 text-xs sm:text-sm lg:text-base font-normal text-center'>
              Use one of the most common prompts below or use your own to begin
            </p>
          </div>
          <div className='flex flex-col lg:flex-row items-center justify-center gap-4 w-full p-2'>
            <Card
              className='mt-4 w-full sm:w-1/2 lg:w-1/4 cursor-pointer hover:bg-gray-100 transition-colors'
              onClick={() =>
                handleCardClick(
                  "What are the best ways to introduce myself in an interview?"
                )
              }>
              <CardBody>
                <Typography>
                  What are the best ways to introduce myself in an interview?
                </Typography>
              </CardBody>
            </Card>
            <Card
              className='mt-4 w-full sm:w-1/2 lg:w-1/4 cursor-pointer hover:bg-gray-100 transition-colors'
              onClick={() =>
                handleCardClick(
                  "What are the best ways to introduce myself in an interview?"
                )
              }>
              <CardBody>
                <Typography>
                  What are the best ways to introduce myself in an interview?
                </Typography>
              </CardBody>
            </Card>
            <Card
              className='mt-4 w-full sm:w-1/2 lg:w-1/4 cursor-pointer hover:bg-gray-100 transition-colors'
              onClick={() =>
                handleCardClick(
                  "What are the best ways to introduce myself in an interview?"
                )
              }>
              <CardBody>
                <Typography>
                  What are the best ways to introduce myself in an interview?
                </Typography>
              </CardBody>
            </Card>
          </div>
          <ChatBox />
        </div>
      </div>
    </div>
  );
};
