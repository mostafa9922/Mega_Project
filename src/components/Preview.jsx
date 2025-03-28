import { NavBar } from "./NavBar";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { LuFolderSearch } from "react-icons/lu";

export const Preview = () => {
  return (
    <div>
      <NavBar />
      <div className=" bg-[url('/image2.png')] bg-cover w-screen h-screen">
        <div className='flex flex-col items-center justify-center h-screen w-screen gap-10 '>
          <div className='flex flex-col items-start justify-end w-[90%] h-full '>
            <h1 className='text-5xl font-bold text-white mb-4'>
              Job Search, Resume Review
            </h1>
            <h1 className='text-5xl font-bold text-white mb-4'>
              & Interview Prep
            </h1>
            <div className='flex flex-row items-center justify-center gap-10'>
              <h1 className='text-5xl font-bold text-[#00000085] '>
                All in One!
              </h1>
              <Button className='bg-[#214560]'>Get Started</Button>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center justify-start w-[90%] mb-10 gap-20 '>
            <Card className='mt-6 w-96 text-center'>
              <CardBody>
                <Typography className='flex flex-col items-center'>
                  <LuFolderSearch className='text-9xl ' />
                </Typography>
                <Typography variant='h5' color='blue-gray' className='mb-2'>
                  Find Your Dream Job
                </Typography>
                <Typography>
                  Browse thousands of job listings. Get personalized job
                  recommendations. Apply with one click.
                </Typography>
              </CardBody>
            </Card>
            <Card className='mt-6 w-96 text-center'>
              <CardBody>
                <Typography className='flex flex-col items-center'>
                  <LuFolderSearch className='text-9xl ' />
                </Typography>
                <Typography variant='h5' color='blue-gray' className='mb-2'>
                  Find Your Dream Job{" "}
                </Typography>
                <Typography>
                  Browse thousands of job listings. Get personalized job
                  recommendations. Apply with one click.
                </Typography>
              </CardBody>
            </Card>
            <Card className='mt-6 w-96 text-center'>
              <CardBody>
                <Typography className='flex flex-col items-center'>
                  <LuFolderSearch className='text-9xl ' />
                </Typography>
                <Typography variant='h5' color='blue-gray' className='mb-2'>
                  Find Your Dream Job{" "}
                </Typography>
                <Typography>
                  Browse thousands of job listings. Get personalized job
                  recommendations. Apply with one click.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <div className='layer absolute top-0 left-0 h-screen w-screen bg-gradient-radial from-[#F4F4F4] via-[#4591C8] to-[#4591C8] z-[-1]'></div>
    </div>
  );
};
