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

export const UserProfile = () => {

  const [openCoverModal, setOpenCoverModal] = useState(false);
  const [coverImage, setCoverImage] = useState(
    "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
  );

  const PROFILE_INFO = {
    name: "Mostafa Abd El-Rasheed",
    email: "mostafa9922m@gmail.com",
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
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      <NavMenu />
      <div className='container mx-auto px-4 py-8 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold text-[#183F5B] mb-6 md:text-4xl'>
          My Profile
        </h1>

        {/* Cover Image */}
        <div className='relative mb-16 md:mb-20'>
          <img
            className='h-64 w-full rounded-lg object-cover object-center shadow-xl sm:h-80 md:h-96'
            src={coverImage}
            alt='Profile cover'
            onError={(e) =>
              (e.target.src = "https://via.placeholder.com/1200x400")
            } 
          />
          <Button
            size='sm'
            className='absolute top-4 right-4 bg-white text-gray-800'
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
        <div className='ml-4 sm:ml-28 mb-10'>
          <h2 className='text-2xl font-bold text-gray-900 md:text-3xl'>
            {PROFILE_INFO.name}
          </h2>
          <p className='text-gray-600 mb-2'>{PROFILE_INFO.email}</p>
          <div className='text-gray-500 flex items-center gap-2 mb-4'>
            <CiClock2 className='text-xl' aria-hidden='true' />
            <span>Last Active: {PROFILE_INFO.lastActive}</span>
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
          <p className='text-gray-700 leading-relaxed max-w-3xl'>
            {PROFILE_INFO.about}
          </p>
        </div>

        {/* Skills Section */}
        <div className='mt-10'>
          <h2 className='text-xl font-semibold text-gray-900 mb-2 md:text-2xl'>
            Skills
          </h2>
          <ul className='space-y-3 text-gray-700'>
            {PROFILE_INFO.skills.map((skill, index) => (
              <li key={index} className='flex items-center gap-2'>
                <CiClock2
                  className='text-xl text-gray-500'
                  aria-hidden='true'
                />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
