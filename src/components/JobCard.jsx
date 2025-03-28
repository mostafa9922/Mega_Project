import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaRegShareSquare } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";

export function JobCard() {
  return (
    <section className='place-items-center p-4'>
      <Card className='w-full'>
        <CardHeader
          floated={false}
          shadow={false}
          className='mb-4 flex justify-between items-center'>
          <div className='flex gap-20 flex-row items-center'>
            <p className='text-[#2775AD] text-2xl'>Data Analyst Intern</p>
            <p className='text-gray-500 flex gap-2 flex-row items-center'>
              <CiClock2 className='text-xl' />3 Hours ago
            </p>
          </div>
          <div className='flex gap-20 flex-row items-center'>
            <p className='text-black flex gap-2 flex-row items-center'>
              <FaLocationDot className='text-xl' />
              Raya holding
            </p>
            <p className='text-gray-500'>Cairo.Egypt</p>
          </div>
        </CardHeader>
        <CardBody className='px-4 pt-0'>
          <Typography className='font-normal text-gray-600'>
            The CS Data Analyst will support the rapid growth of Customer
            Service Org by developing business metrics
          </Typography>
        </CardBody>
        <CardFooter className='pt-0 px-4 flex justify-between items-center'>
          <div className='flex gap-20 flex-row items-center'>
            <p>1-3 Experience</p>
            <p className='text-gray-500 flex gap-2 flex-row items-center'>
              <BsFillBuildingsFill className='text-xl' />
              Hyprid
            </p>
          </div>
          <div className='flex gap-4 flex-row items-center'>
            <IoHeartOutline className='text-3xl hover:text-red-700 cursor-pointer' />
            <Button className='bg-[#549ACC] flex items-center gap-2 text-white hover:bg-[#549ACC] hover:shadow-lg transition duration-300 ease-in-out'>
              <FaRegShareSquare className='text-xl' />
              Send Resume
            </Button>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
}

export default JobCard;
