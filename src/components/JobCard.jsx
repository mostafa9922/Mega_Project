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

export function JobCard({ job }) {
  return (
    <section className='w-full sm:max-w-[600px]'>
      <Card className='w-full shadow-lg rounded-xl'>
        <CardHeader
          floated={false}
          shadow={false}
          className='mb-4 p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2'>
          <div className='flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-20'>
            <Typography variant='h6' className='text-[#2775AD]'>
              {job?.title || "Data Analyst Intern"}
            </Typography>
            <Typography className='text-gray-500 flex items-center gap-1 text-sm'>
              <CiClock2 className='text-base' />
              {job?.posted || "3 Hours ago"}
            </Typography>
          </div>
          <div className='flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-20'>
            <Typography className='text-black flex items-center gap-1 text-sm'>
              <FaLocationDot className='text-base' />
              {job?.company || "Raya Holding"}
            </Typography>
            <Typography className='text-gray-500 text-sm'>
              {job?.location || "Cairo, Egypt"}
            </Typography>
          </div>
        </CardHeader>

        <CardBody className='px-4 pt-0'>
          <Typography className='text-gray-600 text-sm'>
            {job?.description ||
              "The CS Data Analyst will support the rapid growth of Customer Service Org by developing business metrics."}
          </Typography>
        </CardBody>

        <CardFooter className='pt-4 px-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
          <div className='flex flex-col sm:flex-row gap-4 text-sm'>
            <p>{job?.experience || "1-3 Years Experience"}</p>
            <p className='text-gray-500 flex items-center gap-1'>
              <BsFillBuildingsFill className='text-base' />
              {job?.type || "Hybrid"}
            </p>
          </div>

          <div className='flex gap-4 items-center self-end sm:self-auto'>
            <IoHeartOutline className='text-2xl hover:text-red-600 cursor-pointer transition-colors' />
            <Button
              className='bg-[#549ACC] text-white flex items-center gap-2 px-4 py-2 hover:shadow-lg transition duration-300 ease-in-out'
              size='sm'>
              <FaRegShareSquare className='text-base' />
              Send Resume
            </Button>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
}
