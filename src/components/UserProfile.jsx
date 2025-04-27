import { useState } from "react";
import { NavMenu } from "./NavMenu";
import {
  Avatar,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { CiClock2 } from "react-icons/ci";
import { jwtDecode } from "jwt-decode";

export const UserProfile = () => {
  const token = localStorage.getItem("token");
  const user = jwtDecode(token);
  const [openCoverModal, setOpenCoverModal] = useState(false);
  const [coverImage, setCoverImage] = useState(
    "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
  );

  const PROFILE_INFO = {
    name: "Mostafa Abd El-Rasheed",
    email: "mostafa9922m@gmail.com",
    location: "Cairo,Egypt",
    jobTitle: "Frontend Developer",
    lastActive: "3 Hours ago",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptate similique earum blanditiis at laboriosam placeat voluptatem impedit, qui facere molestias tempora tempore. Culpa deserunt maxime maiores reprehenderit delectus eos!",
    skills: [
      "JavaScript & React",
      "HTML, CSS, Tailwind",
      "Embedded Systems (ATmega32, STM32)",
    ],
  };

  // Modal handlers
  const handleOpenCoverModal = () => setOpenCoverModal(true);
  const handleCloseCoverModal = () => setOpenCoverModal(false);
  const handleCoverChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const newCoverUrl = URL.createObjectURL(file);
      setCoverImage(newCoverUrl);
      handleCloseCoverModal();
    }
    if (file && file.type.startsWith("image/")) {
      const newCoverUrl = URL.createObjectURL(file);
      setCoverImage(newCoverUrl);
      handleCloseCoverModal();
    } else {
      alert("Please upload a valid image file.");
    }
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      <NavMenu />
      <div className='container mx-auto px-4 py-8 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold text-[#183F5B] mb-6 md:text-4xl'>
          My Profile
        </h1>

        {/* Cover Image */}
        <div
          className='relative mb-10 md:mb-16 flex justify-end items-start pt-2 pr-2'
          style={{
            backgroundImage: `url(${coverImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "400px",
            borderRadius: "0.5rem",
          }}>
          <Button
            size='sm'
            className='bg-white text-gray-800'
            onClick={handleOpenCoverModal}
            aria-label='Edit cover image'>
            Edit Cover
          </Button>
          <div className='absolute -bottom-10 left-4 sm:left-6'>
            <Avatar
              src='https://docs.material-tailwind.com/img/face-2.jpg'
              alt={`${PROFILE_INFO.name}'s avatar`}
              size='xxl'
              variant='rounded'
              className='border-4 border-white shadow-lg'
            />
          </div>
        </div>

        {/* Cover Image Modal */}
        <Dialog
          open={openCoverModal}
          handler={handleCloseCoverModal}
          className='rounded-lg'>
          <DialogHeader>Change Cover Image</DialogHeader>
          <DialogBody>
            <Input
              type='file'
              accept='image/*'
              label='Upload new cover image'
              onChange={handleCoverChange}
              className='mb-4'
            />
          </DialogBody>
          <DialogFooter>
            <Button variant='text' color='red' onClick={handleCloseCoverModal}>
              Cancel
            </Button>
            <Button
              variant='gradient'
              color='blue'
              onClick={handleCloseCoverModal}>
              Save
            </Button>
          </DialogFooter>
        </Dialog>

        {/* Profile Info */}
        <div className='sm:ml-28 mb-10 flex justify-between items-center'>
          <div>
            <h2 className='text-2xl font-bold text-gray-900 md:text-3xl'>
              {PROFILE_INFO.name}
            </h2>
            <p className='text-gray-600 mb-2'>{PROFILE_INFO.email}</p>
            <div className='text-gray-500 flex items-center gap-2 mb-4'>
              <CiClock2 className='text-xl' aria-hidden='true' />
              <span>Last Active: {PROFILE_INFO.lastActive}</span>
            </div>
            <div className='mb-5'>
              <ul className=' text-gray-700 flex flex-wrap items-center justify-start gap-3'>
                <li className='flex items-center gap-2 border-2 p-1 rounded-md'>
                  <CiClock2
                    className='text-xl text-gray-500'
                    aria-hidden='true'
                  />
                  {PROFILE_INFO.jobTitle}
                </li>
                <li className='flex items-center gap-2 border-2 p-1 rounded-md'>
                  <CiClock2
                    className='text-xl text-gray-500'
                    aria-hidden='true'
                  />
                  {PROFILE_INFO.location}
                </li>
              </ul>
            </div>
          </div>
          <Button
            className='bg-[#183F5B] normal-case hover:bg-[#102a3d] transition-colors'
            aria-label='Edit profile details'>
            Edit Profile
          </Button>
        </div>

        {/* About Section */}
        <div className='mt-10'>
          <h2 className='text-xl font-semibold text-gray-900 mb-2 md:text-2xl'>
            About
          </h2>
          <p className='text-gray-700 leading-relaxed w-full text-xl'>
            {PROFILE_INFO.about}
          </p>
        </div>

        {/* Skills Section */}
        <div className='mt-10'>
          <h2 className='text-xl font-semibold text-gray-900 mb-2 md:text-2xl'>
            Skills
          </h2>
          <ul className=' text-gray-700 flex flex-wrap items-center justify-start gap-3'>
            {PROFILE_INFO.skills.map((skill, index) => (
              <li
                key={index}
                className='flex items-center gap-2 border-2 p-1 rounded-md'>
                <CiClock2
                  className='text-xl text-gray-500'
                  aria-hidden='true'
                />
                {skill}
              </li>
            ))}
            <li className='flex items-center gap-2 border-2 p-1 rounded-md'>
              Add New Skill
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
