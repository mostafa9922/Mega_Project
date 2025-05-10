import React from "react";
import {
  Typography,
  Avatar,
  Input,
  Button,
  Select,
  Option,
  Stepper,
  Step,
} from "@material-tailwind/react";
import { NavMenu } from "./NavMenu";
import { ImageUpload } from "./ImageUpload";
import { useNavigate } from "react-router-dom";
import { CogIcon, UserIcon } from "@heroicons/react/24/outline";

export function StepperWithContent() {
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  return (
    <div className='w-full px-24 py-4'>
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}>
        <Step onClick={() => setActiveStep(0)}>
          <UserIcon className='h-5 w-5' />
          <div className='absolute -bottom-[4.5rem] w-max text-center'>
            <Typography
              variant='h6'
              color={activeStep === 0 ? "blue-gray" : "gray"}>
              Step 1
            </Typography>
            <Typography
              color={activeStep === 0 ? "blue-gray" : "gray"}
              className='font-normal'>
              Personal Information
            </Typography>
          </div>
        </Step>
        <Step
          onClick={() => {
            setActiveStep(1);
            navigate("/career-info");
          }}>
          <CogIcon className='h-5 w-5' />
          <div className='absolute -bottom-[4.5rem] w-max text-center'>
            <Typography
              variant='h6'
              color={activeStep === 1 ? "blue-gray" : "gray"}>
              Step 2
            </Typography>
            <Typography
              color={activeStep === 1 ? "blue-gray" : "gray"}
              className='font-normal'>
              career Information
            </Typography>
          </div>
        </Step>
      </Stepper>
    </div>
  );
}

export const PersonalInfo = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/career-info");
  };

  return (
    <div className='min-h-screen bg-white'>
      <NavMenu />
      <div className='mb-10'>
        <StepperWithContent />
      </div>
      <div className='container mx-auto px-4 py-10'>
        <div className='flex flex-col md:flex-row items-center justify-between mb-6'>
          <Typography
            variant='h2'
            className='text-2xl md:text-4xl text-[#183F5B]'>
            Welcome Mostafa
          </Typography>
          <span className='text-sm md:text-base text-[#8F929B]'>
            Step 1 of 2
          </span>
        </div>
        <p className='text-[#8F929B] mb-8 text-center md:text-left'>
          Let’s complete your profile to get better job matches!
        </p>

        <form onSubmit={handleSubmit} className='space-y-8'>
          <div className='flex flex-col md:flex-row items-center justify-center gap-6'>
            <Avatar
              src={import.meta.env.VITE_DEFAULT_AVATAR}
              alt='avatar'
              size='xxl'
              className='bg-[#F8F8FD] object-contain p-4 border border-[#C1C1C1]'
            />
            <ImageUpload />
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2'>
            <Input label='Full Name' type='text' />
            <Input type='date' label='Day/Month/Year' />
            <Input label='Phone Number' type='text' />
            <Input value={"mostafa9922m@gmail.com"} type='text' disabled />
            <Select label='Gender'>
              <Option>Male</Option>
              <Option>Female</Option>
              <Option>Other</Option>
            </Select>
            <Select label='Country'>
              <Option>Male</Option>
            </Select>
            <Select label='City'>
              <Option>Male</Option>
            </Select>
          </div>

          <div className='flex justify-center'>
            <Button type='submit' className='bg-[#183F5B] w-full sm:w-auto'>
              Save & Continue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
