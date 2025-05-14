import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { FaRegShareSquare } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { useState } from "react";

export function JobCard({ job }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);
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
            <IconButton
              variant='text'
              size='lg'
              color={isFavorite ? "red" : "blue-gray"}
              onClick={handleIsFavorite}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='h-10 w-10'>
                <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
              </svg>
            </IconButton>{" "}
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
