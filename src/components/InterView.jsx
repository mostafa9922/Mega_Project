import { ChatData } from "./ChatData";
import { NavMenu } from "./NavMenu";
import { SideBar } from "./SideBar";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export const InterView = () => {
  return (
    <div>
      <NavMenu />
      <div className='flex flex-row gap-10'>
        <SideBar />
        <div className='flex w-full flex-col items-center justify-center gap-20 p-4'>
          <div className='flex w-full flex-col items-center justify-between gap-4'>
            <p className='text-[#549ACC] text-2xl font-bold'>
              Ace Your Next Interview with Confidence!
            </p>
            <p className='text-gray-500 text-sm font-normal'>
              Use one of the most common prompts below or use your to begin{" "}
            </p>
          </div>
          <div className='flex w-full flex-row items-center justify-center  gap-6 p-2'>
            <Card className='mt-6 w-[20%]'>
              <CardBody>
                <Typography>
                  What are the best ways to introduce myself in an interview?
                </Typography>
              </CardBody>
            </Card>
            <Card className='mt-6 w-[20%]'>
              <CardBody>
                <Typography>
                  What are the best ways to introduce myself in an interview?
                </Typography>
              </CardBody>
            </Card>
            <Card className='mt-6 w-[20%]'>
              <CardBody>
                <Typography>
                  What are the best ways to introduce myself in an interview?
                </Typography>
              </CardBody>
            </Card>
          </div>
          <ChatData />
        </div>
      </div>
    </div>
  );
};
