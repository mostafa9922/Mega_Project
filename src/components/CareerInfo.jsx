import React, { useState, useEffect } from "react";
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
import axios from "axios";

export function StepperWithContent() {
  const [activeStep, setActiveStep] = useState(1);
  const navigate = useNavigate();

  return (
    <div className='w-full px-4 sm:px-8 lg:px-24 py-4'>
      <Stepper activeStep={activeStep}>
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
  const navigate = useNavigate();
  const [form, setForm] = useState({
    jobTitle: "",
    portfolio: "",
    linkedin: "",
    about: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("personalInfo");
    if (stored) {
      setForm(JSON.parse(stored));
    }
  }, []);

  const isValidURL = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const validate = () => {
    const temp = {
      jobTitle: form.jobTitle ? "" : "Job Title is required.",
      portfolio:
        form.portfolio && isValidURL(form.portfolio)
          ? ""
          : "Valid Portfolio URL is required.",
      linkedin:
        form.linkedin && isValidURL(form.linkedin)
          ? ""
          : "Valid LinkedIn URL is required.",
      about: form.about ? "" : "About Me is required.",
    };
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...form, [name]: value };
    setForm(updatedForm);

    // real-time validation per field
    setErrors((prev) => ({
      ...prev,
      [name]:
        name === "portfolio" || name === "linkedin"
          ? !value || !isValidURL(value)
            ? `Valid ${name} URL is required.`
            : ""
          : name === "jobTitle" && !value
          ? "Job Title is required."
          : name === "about" && !value
          ? "About Me is required."
          : "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/profiles`, form);
      localStorage.removeItem("personalInfo");
      navigate("/dashboard");
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "An unexpected error occurred";
      setErrors((prev) => ({ ...prev, general: errorMessage }));
    } finally {
      setIsSubmitting(false);
    }
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
              <div>
                <Input
                  label='Title of Current Job'
                  name='jobTitle'
                  value={form.jobTitle}
                  onChange={handleChange}
                  className={errors.jobTitle ? "border-red-500" : ""}
                />
                {errors.jobTitle && (
                  <span className='text-red-500 text-sm'>
                    {errors.jobTitle}
                  </span>
                )}
              </div>

              <div>
                <Input
                  label='Portfolio URL'
                  name='portfolio'
                  value={form.portfolio}
                  onChange={handleChange}
                  className={errors.portfolio ? "border-red-500" : ""}
                />
                {errors.portfolio && (
                  <span className='text-red-500 text-sm'>
                    {errors.portfolio}
                  </span>
                )}
              </div>

              <div>
                <Input
                  label='LinkedIn URL'
                  name='linkedin'
                  value={form.linkedin}
                  onChange={handleChange}
                  className={errors.linkedin ? "border-red-500" : ""}
                />
                {errors.linkedin && (
                  <span className='text-red-500 text-sm'>
                    {errors.linkedin}
                  </span>
                )}
              </div>

              <div>
                <Textarea
                  label='About Me'
                  name='about'
                  value={form.about}
                  onChange={handleChange}
                  className={errors.about ? "border-red-500" : ""}
                />
                {errors.about && (
                  <span className='text-red-500 text-sm'>{errors.about}</span>
                )}
              </div>

              {errors.general && (
                <div className='text-center text-red-600 font-medium'>
                  {errors.general}
                </div>
              )}
            </div>

            <div className='w-full lg:w-1/3'>
              <FileUpload />
            </div>
          </div>

          <div className='flex justify-center'>
            <Button
              type='submit'
              className='bg-[#183F5B] w-full sm:w-auto'
              disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
