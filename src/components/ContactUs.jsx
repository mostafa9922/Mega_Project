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

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, email, message } = formData;

    if (!firstName || !email || !message) {
      setError("Please fill out all required fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setIsSubmitted(true);
    console.log("Form submitted:", formData); // Replace with actual API call

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className='bg-gradient-to-b pb-10 from-[#4591C8] to-[#2A5A8E] min-h-screen'>
      <NavBar_perview />
      <div className='container mx-auto text-center px-2'>
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
