import React from "react";
import {
  Typography,
  Input,
  Button,
  Stepper,
  Step,
  Textarea,
} from "@material-tailwind/react";
import { NavMenu } from "./NavMenu";
import { useNavigate } from "react-router-dom";
import { CogIcon, UserIcon } from "@heroicons/react/24/outline";
import { FileUpload } from "./FileUpload";

export function StepperWithContent() {
  const [activeStep, setActiveStep] = React.useState(1);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div className='w-full px-4 sm:px-8 lg:px-24 py-4'>
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}>
        <Step
          onClick={() => {
            setActiveStep(0);
            navigate("/personal-info");
          }}>
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
        <Step onClick={() => setActiveStep(1)}>
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
              Career Information
            </Typography>
          </div>
        </Step>
      </Stepper>
    </div>
  );
}

export const CareerInfo = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
            Let’s Finish your profile
          </Typography>
          <span className='text-sm md:text-base text-[#8F929B]'>
            Step 2 of 2
          </span>
        </div>
        <p className='text-[#8F929B] mb-8 text-center md:text-left'>
          Let’s finish your profile to get better job matches.
        </p>

        <form onSubmit={handleSubmit} className='space-y-8'>
          <div className='flex flex-col lg:flex-row justify-around gap-8'>
            <div className='flex flex-col gap-8 w-full lg:w-2/3'>
              <Input label='Title of Current Job' type='text' />
              <Input label='Portfolio URL' type='url' />
              <Input label='LinkedIn URL' type='url' />
              <Textarea label='About Me' />
            </div>
            <div className='w-full lg:w-1/3'>
              <FileUpload />
            </div>
          </div>

          <div className='flex justify-center'>
            <Button type='submit' className='bg-[#183F5B] w-full sm:w-auto'>
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
