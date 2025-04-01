import React, { useState } from "react";
import {
  Button,
  Input,
  Textarea,
  Typography,
  Alert,
} from "@material-tailwind/react";
import { NavBar_perview } from "./NavBar_perview";

export function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    inquiryType: "General inquiry",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInquiryType = (type) => {
    setFormData((prev) => ({ ...prev, inquiryType: type }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) {
      setError("Please fill out all required fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setIsSubmitted(true);
    console.log("Form submitted:", formData); // Replace with actual API call
    setTimeout(() => setIsSubmitted(false), 3000); // Reset after 3 seconds
  };

  return (
    <section className='px-8 py-8 lg:py-16 bg-gradient-to-b from-[#4591C8] to-[#2A5A8E] min-h-screen'>
      <NavBar_perview />
      <div className='container mx-auto text-center pt-8'>
        <Typography
          variant='h5'
          color='white'
          className='mb-4 !text-base lg:!text-2xl opacity-90'>
          Customer Care
        </Typography>
        <Typography
          variant='h1'
          color='white'
          className='mb-4 !text-3xl lg:!text-5xl font-bold'>
          We're Here to Help
        </Typography>
        <Typography className='mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl text-gray-200'>
          Whether it's a question about our services, a request for technical
          assistance, or suggestions for improvement, our team is eager to hear
          from you.
        </Typography>

        {isSubmitted && (
          <Alert color='green' className='mb-6 max-w-md mx-auto'>
            Thank you! Your message has been sent successfully.
          </Alert>
        )}
        {error && (
          <Alert color='red' className='mb-6 max-w-md mx-auto'>
            {error}
          </Alert>
        )}

        <div className='flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-16'>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-6 lg:max-w-md w-full bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md'>
            <Typography
              variant='small'
              className='text-left !font-semibold text-white'>
              Select Options for Business Engagement
            </Typography>
            <div className='flex gap-4'>
              <Button
                variant={
                  formData.inquiryType === "General inquiry"
                    ? "filled"
                    : "outlined"
                }
                color='white'
                className='max-w-fit transition-all'
                onClick={() => handleInquiryType("General inquiry")}>
                General Inquiry
              </Button>
              <Button
                variant={
                  formData.inquiryType === "Product Support"
                    ? "filled"
                    : "outlined"
                }
                color='white'
                className='max-w-fit transition-all'
                onClick={() => handleInquiryType("Product Support")}>
                Product Support
              </Button>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <Typography
                  variant='small'
                  className='mb-2 text-left font-medium text-white'>
                  First Name *
                </Typography>
                <Input
                  color='white'
                  size='lg'
                  placeholder='First Name'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                  className='text-white focus:ring-2 focus:ring-white/50'
                  containerProps={{ className: "min-w-full" }}
                  labelProps={{ className: "hidden" }}
                />
              </div>
              <div>
                <Typography
                  variant='small'
                  className='mb-2 text-left font-medium text-white'>
                  Last Name
                </Typography>
                <Input
                  color='white'
                  size='lg'
                  placeholder='Last Name'
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                  className='text-white focus:ring-2 focus:ring-white/50'
                  containerProps={{ className: "min-w-full" }}
                  labelProps={{ className: "hidden" }}
                />
              </div>
            </div>

            <div>
              <Typography
                variant='small'
                className='mb-2 text-left font-medium text-white'>
                Your Email *
              </Typography>
              <Input
                color='white'
                size='lg'
                placeholder='name@email.com'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='text-white focus:ring-2 focus:ring-white/50'
                containerProps={{ className: "min-w-full" }}
                labelProps={{ className: "hidden" }}
              />
            </div>

            <div>
              <Typography
                variant='small'
                className='mb-2 text-left font-medium text-white'>
                Your Message *
              </Typography>
              <Textarea
                rows={6}
                color='white'
                placeholder='Type your message here...'
                name='message'
                value={formData.message}
                onChange={handleChange}
                className='text-white focus:ring-2 focus:ring-white/50'
                containerProps={{ className: "min-w-full" }}
                labelProps={{ className: "hidden" }}
              />
            </div>

            <Button
              type='submit'
              className='w-full bg-white text-[#2A5A8E] hover:bg-gray-200 transition-all'>
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
