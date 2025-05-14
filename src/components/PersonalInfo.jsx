import { useState } from "react";
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

export function StepperWithContent({ handleStepChange }) {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  return (
    <div className='w-full px-24 py-4'>
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}>
        <Step onClick={() => handleStepChange(0, setActiveStep)}>
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
        <Step onClick={() => handleStepChange(1, setActiveStep)}>
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

export const PersonalInfo = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    dob: "",
    phone: "",
    gender: "",
    country: "",
    city: "",
    email: "mostafa9922m@gmail.com",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};
    temp.fullName = form.fullName ? "" : "Full Name is required.";
    temp.dob = form.dob ? "" : "Date of birth is required.";
    temp.phone = form.phone ? "" : "Phone Number is required.";
    temp.gender = form.gender ? "" : "Gender is required.";
    temp.country = form.country ? "" : "Country is required.";
    temp.city = form.city ? "" : "City is required.";

    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("personalInfo", JSON.stringify(form));
      navigate("/career-info");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className='min-h-screen bg-white'>
      <NavMenu />
      <div className='mb-10'>
        <StepperWithContent
          handleStepChange={(step, setActiveStep) => {
            if (step === 1) {
              if (validate()) {
                localStorage.setItem("personalInfo", JSON.stringify(form));
                navigate("/career-info");
              }
            } else {
              setActiveStep(step);
            }
          }}
        />
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
            <Input
              label='Full Name'
              name='fullName'
              value={form.fullName}
              onChange={handleChange}
              error={!!errors.fullName}
              helperText={errors.fullName}
            />
            <Input
              type='date'
              label='Day/Month/Year'
              name='dob'
              value={form.dob}
              onChange={handleChange}
              error={!!errors.dob}
              helperText={errors.dob}
            />
            <Input
              label='Phone Number'
              name='phone'
              value={form.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
            />
            <Input value={form.email} type='text' disabled />
            <Select
              label='Gender'
              value={form.gender}
              onChange={(val) => setForm({ ...form, gender: val })}
              error={!!errors.gender}>
              <Option value='Male'>Male</Option>
              <Option value='Female'>Female</Option>
              <Option value='Other'>Other</Option>
            </Select>
            <Select
              label='Country'
              value={form.country}
              onChange={(val) => setForm({ ...form, country: val })}
              error={!!errors.country}>
              <Option value='Egypt'>Egypt</Option>
              <Option value='USA'>USA</Option>
              <Option value='Germany'>Germany</Option>
            </Select>
            <Select
              label='City'
              value={form.city}
              onChange={(val) => setForm({ ...form, city: val })}
              error={!!errors.city}>
              <Option value='Cairo'>Cairo</Option>
              <Option value='Giza'>Giza</Option>
              <Option value='Alexandria'>Alexandria</Option>
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
