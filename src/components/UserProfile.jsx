import { useState, useEffect } from "react";
import { NavMenu } from "./NavMenu";
import {
  Avatar,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Typography,
  Collapse,
  Card,
  CardBody,
  Textarea,
} from "@material-tailwind/react";
import { CiClock2 } from "react-icons/ci";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { FaRegEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

export const UserProfile = ({ loggedIn, setLoggedIn }) => {
  const token = localStorage.getItem("token");
  const user = jwtDecode(token);
  const [openCoverModal, setOpenCoverModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openCollapse, setOpenCollapse] = useState(false);

  const [userInfo, setUserInfo] = useState({
    avatarUrl: "",
    bio: "",
    coverUrl: "",
    createdAt: "",
    email: "",
    firstName: "",
    fullName: "",
    id: "",
    jobTitle: "",
    lastName: "",
    location: "",
    skills: [],
    updatedAt: "",
    username: "",
  });

  const [experiences, setExperiences] = useState([
    {
      id: 1,
      title: "Product Designer",
      company: "Twitter",
      type: "Full-Time",
      duration: "Jun 2019 - Present (1y 1m)",
      location: "Manchester, UK",
      description:
        "Created and executed social media plan for 10 brands utilizing multiple features and content types to increase brand outreach, engagement, and leads.",
    },
    {
      id: 2,
      title: "Growth Marketing Designer",
      company: "GoDaddy",
      type: "Full-Time",
      duration: "Jun 2011 - May 2019 (8y)",
      location: "Manchester, UK",
      description:
        "Developed digital marketing strategies, activation plans, proposals, contests and promotions for client initiatives.",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "TechCorp",
      type: "Contract",
      duration: "Jan 2010 - May 2011 (1y 4m)",
      location: "London, UK",
      description:
        "Designed user interfaces and improved user experience for web applications, increasing user retention by 20%.",
    },
  ]);

  const [educations, setEducations] = useState([
    {
      id: 1,
      institution: "Harvard University",
      degree: "Postgraduate degree, Applied Psychology",
      duration: "2010 - 2012",
      description:
        "As an Applied Psychologist in the field of Consumer and Society, I am specialized in creating business opportunities by observing, analyzing, researching and changing behaviour.",
    },
    {
      id: 2,
      institution: "University of Toronto",
      degree: "Bachelor of Arts, Visual Communication",
      duration: "2005 - 2009",
      description: "",
    },
    {
      id: 3,
      institution: "MIT",
      degree: "Certificate, Advanced Programming",
      duration: "2012 - 2013",
      description:
        "Completed intensive course on modern programming techniques.",
    },
  ]);

  // Add portfolios state
  const [portfolios, setPortfolios] = useState([]);

  // State for modals and forms
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [formData, setFormData] = useState({
    section: "",
    title: "",
    company: "",
    type: "",
    duration: "",
    location: "",
    description: "",
    institution: "",
    degree: "",
    skillName: "",
    about: "",
  });

  const toggleCollapse = () => setOpenCollapse((cur) => !cur);

  const handleOpenCoverModal = () => setOpenCoverModal(true);
  const handleCloseCoverModal = () => setOpenCoverModal(false);

  const handleCoverChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        setIsLoading(true);
        setError(null);
        const newCoverUrl = URL.createObjectURL(file);
        setUserInfo((prev) => ({ ...prev, coverUrl: newCoverUrl }));
        handleCloseCoverModal();
      } else {
        setError("Please upload a valid image file.");
      }
      setIsLoading(false);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Open add modal for a specific section
  const handleOpenAddModal = (section) => {
    setFormData({
      section,
      title: "",
      company: "",
      type: "",
      duration: "",
      location: "",
      description: "",
      institution: "",
      degree: "",
      skillName: "",
      about: "",
    });
    setOpenAddModal(true);
  };

  // Open edit modal with item data
  const handleOpenEditModal = (item, section) => {
    setEditItem(item);
    setFormData({
      section,
      title: item.title || "",
      company: item.company || "",
      type: item.type || "",
      duration: item.duration || "",
      location: item.location || "",
      description: item.description || "",
      institution: item.institution || "",
      degree: item.degree || "",
      skillName: item.name || "",
      about: item.about || "",
    });
    setOpenEditModal(true);
  };

  // Handle form submission for adding new item
  const handleAddSubmit = () => {
    const newId = Date.now();
    if (formData.section === "skills") {
      setUserInfo((prev) => [...prev, { id: newId, name: formData.skillName }]);
    } else if (formData.section === "experiences") {
      setExperiences((prev) => [
        ...prev,
        { id: newId, ...formData, description: formData.description || "" },
      ]);
    } else if (formData.section === "educations") {
      setEducations((prev) => [
        ...prev,
        { id: newId, ...formData, description: formData.description || "" },
      ]);
    } else if (formData.section === "portfolios") {
      setPortfolios((prev) => [
        ...prev,
        {
          id: newId,
          title: formData.title,
          description: formData.description || "",
        },
      ]);
    }
    setOpenAddModal(false);
  };

  // Handle form submission for editing item
  const handleEditSubmit = () => {
    if (formData.section === "about") {
      setUserInfo((prev) => ({ ...prev, bio: formData.about }));
    } else if (formData.section === "skills") {
      setUserInfo((prev) =>
        prev.map((skill) =>
          skill.id === editItem.id
            ? { ...skill, name: formData.skillName }
            : skill
        )
      );
    } else if (formData.section === "experiences") {
      setExperiences((prev) =>
        prev.map((exp) =>
          exp.id === editItem.id ? { ...exp, ...formData } : exp
        )
      );
    } else if (formData.section === "educations") {
      setEducations((prev) =>
        prev.map((edu) =>
          edu.id === editItem.id ? { ...edu, ...formData } : edu
        )
      );
    } else if (formData.section === "portfolios") {
      setPortfolios((prev) =>
        prev.map((portfolio) =>
          portfolio.id === editItem.id
            ? {
                ...portfolio,
                title: formData.title,
                description: formData.description,
              }
            : portfolio
        )
      );
    }
    setOpenEditModal(false);
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/profiles/${user.nameid}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const userFetchedData = response.data;
        setUserInfo(userFetchedData);
        console.log(userFetchedData);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    fetchUserProfile();
  }, []);

  return (
    <div className='min-h-screen bg-gray-50'>
      <NavMenu loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <div className='container mx-auto px-4 py-8 sm:px-6 lg:px-8'>
        <Typography
          variant='h1'
          className='text-3xl font-bold text-[#183F5B] mb-6 md:text-4xl'>
          My Profile
        </Typography>

        {/* Cover Image */}
        <div
          className='relative mb-10 md:mb-16 flex justify-end items-start pt-2 pr-2'
          style={{
            backgroundImage: `url(${
              userInfo.coverUrl || import.meta.env.VITE_DEFAULT_COVER_IMAGE
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "400px",
            borderRadius: "0.5rem",
          }}>
          {isLoading && (
            <div className='absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center'>
              <Typography color='white' className='text-lg'>
                Loading...
              </Typography>
            </div>
          )}
          {error && (
            <div className='absolute inset-0 bg-red-100 bg-opacity-75 flex items-center justify-center'>
              <Typography color='red' className='text-sm'>
                {error}
              </Typography>
            </div>
          )}
          <Button
            size='sm'
            className='bg-white text-gray-800 hover:bg-gray-200 transition-colors'
            onClick={handleOpenCoverModal}
            disabled={isLoading}
            aria-label='Edit cover image'>
            Edit Cover
          </Button>
          <div className='absolute -bottom-10 left-4 sm:left-6'>
            <Avatar
              src={`${
                userInfo.avatarUrl || import.meta.env.VITE_DEFAULT_AVATAR
              }`}
              alt={`${userInfo.name}'s avatar`}
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
              disabled={isLoading}
              className='mb-4'
            />
            {error && (
              <Typography color='red' className='text-sm mb-2'>
                {error}
              </Typography>
            )}
          </DialogBody>
          <DialogFooter>
            <Button
              variant='text'
              color='red'
              onClick={handleCloseCoverModal}
              disabled={isLoading}>
              Cancel
            </Button>
            <Button
              variant='gradient'
              color='blue'
              onClick={handleCloseCoverModal}
              disabled={isLoading}>
              Save
            </Button>
          </DialogFooter>
        </Dialog>

        {/* Profile Info */}
        <div className='sm:ml-28 mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
          <div>
            <Typography
              variant='h2'
              className='text-2xl font-bold text-gray-900 md:text-3xl'>
              {userInfo.fullName}
            </Typography>
            <Typography className='text-gray-600 mb-2 text-sm sm:text-base'>
              {userInfo.email}
            </Typography>
            <div className='text-gray-500 flex items-center gap-2 mb-4 text-sm sm:text-base'>
              <CiClock2 className='text-xl' aria-hidden='true' />
              <span>Last Active: {}</span>
            </div>
            <div className='mb-5'>
              <ul className='text-gray-700 flex flex-wrap items-center gap-3'>
                <li className='flex items-center gap-2 border-2 p-1 rounded-md text-sm sm:text-base'>
                  <CiClock2
                    className='text-xl text-gray-500'
                    aria-hidden='true'
                  />
                  {}
                </li>
                <li className='flex items-center gap-2 border-2 p-1 rounded-md text-sm sm:text-base'>
                  <CiClock2
                    className='text-xl text-gray-500'
                    aria-hidden='true'
                  />
                  {}
                </li>
              </ul>
            </div>
          </div>
          <Button
            className='bg-[#183F5B] normal-case hover:bg-[#102a3d] transition-colors text-sm sm:text-base px-4 py-2'
            aria-label='Edit profile details'>
            Edit Profile
          </Button>
        </div>

        {/* About Section */}
        <Card className='mt-10 border-2 border-[#D6DDEB] p-4'>
          <div className='flex justify-between items-center mb-4'>
            <Typography
              variant='h3'
              className='text-xl font-semibold text-gray-900 md:text-2xl'>
              About
            </Typography>
            <FaRegEdit
              className='text-2xl sm:text-3xl border-2 border-[#D6DDEB] p-1 hover:bg-gray-100 transition-colors cursor-pointer'
              onClick={() => handleOpenEditModal(userInfo.bio, "about")}
            />
          </div>
          <Typography className='text-gray-700 leading-relaxed text-base sm:text-lg'>
            {userInfo.bio || ""}
          </Typography>
        </Card>

        {/* Skills Section */}
        <Card className='mt-10 border-2 border-[#D6DDEB] p-4'>
          <div className='flex justify-between items-center mb-4'>
            <Typography
              variant='h3'
              className='text-xl font-semibold text-gray-900 md:text-2xl'>
              Skills
            </Typography>
            <div className='flex gap-2'>
              <FaRegEdit
                className='text-2xl sm:text-3xl border-2 border-[#D6DDEB] p-1 hover:bg-gray-100 transition-colors cursor-pointer'
                onClick={() => handleOpenAddModal("skills")}
              />
              <FaPlus
                className='text-2xl sm:text-3xl border-2 border-[#D6DDEB] p-1 hover:bg-gray-100 transition-colors cursor-pointer'
                onClick={() => handleOpenAddModal("skills")}
              />
            </div>
          </div>
          <ul className='text-gray-700 flex flex-wrap items-center gap-3'>
            {userInfo.skills.length > 0 ? (
              skills.map((skill) => (
                <li
                  key={skill.id}
                  className='flex items-center gap-2 border-2 p-1 rounded-md text-sm sm:text-base'>
                  <CiClock2
                    className='text-xl text-gray-500'
                    aria-hidden='true'
                  />
                  {skill.name}
                  <FaRegEdit
                    className='text-xl border-2 border-[#D6DDEB] p-0.5 hover:bg-gray-100 transition-colors cursor-pointer ml-2'
                    onClick={() => handleOpenEditModal(skill, "skills")}
                  />
                </li>
              ))
            ) : (
              <p>No skills</p>
            )}
          </ul>
        </Card>

        {/* Experience Section */}
        <div className='mt-10 border-2 border-[#D6DDEB] p-4 flex flex-col justify-center items-center gap-4'>
          <div className='flex justify-between mb-5 w-full'>
            <Typography variant='h3' className='text-[#25324B] font-bold'>
              Experience
            </Typography>
            <FaPlus
              className='text-2xl sm:text-3xl border-2 border-[#D6DDEB] p-1 hover:bg-gray-100 transition-colors cursor-pointer'
              onClick={() => handleOpenAddModal("experiences")}
            />
          </div>
          {experiences.map((exp) => (
            <div key={exp.id} className='flex gap-4 w-full sm:w-[80%]'>
              <Avatar
                src='https://docs.material-tailwind.com/img/face-2.jpg'
                alt='avatar'
                size='xl'
              />
              <div className='flex flex-col w-full border-b-2 pb-4'>
                <div className='flex justify-between items-center'>
                  <Typography variant='h5' className='text-[#25324B]'>
                    {exp.title}
                  </Typography>
                  <FaRegEdit
                    className='text-2xl sm:text-3xl border-2 border-[#D6DDEB] p-1 hover:bg-gray-100 transition-colors cursor-pointer'
                    onClick={() => handleOpenEditModal(exp, "experiences")}
                  />
                </div>
                <div className='flex gap-3 flex-wrap text-sm sm:text-base'>
                  <span className='text-[#25324B] font-bold'>
                    {exp.company}
                  </span>
                  <span className='text-[#515B6F]'>{exp.type}</span>
                  <span className='text-[#515B6F]'>{exp.duration}</span>
                </div>
                <span className='text-[#7C8493] text-sm sm:text-base'>
                  {exp.location}
                </span>
                <Typography className='text-[#25324B] text-sm sm:text-base mt-2'>
                  {exp.description}
                </Typography>
              </div>
            </div>
          ))}
          <Link
            className='text-[#183F5B] font-bold text-sm sm:text-base'
            onClick={toggleCollapse}>
            Show 3 more experiences
          </Link>
        </div>

        {/* Education Section */}
        <div className='mt-10 border-2 border-[#D6DDEB] p-4 flex flex-col justify-center items-center gap-4'>
          <div className='flex justify-between mb-5 w-full'>
            <Typography variant='h3' className='text-[#25324B] font-bold'>
              Education
            </Typography>
            <FaPlus
              className='text-2xl sm:text-3xl border-2 border-[#D6DDEB] p-1 hover:bg-gray-100 transition-colors cursor-pointer'
              onClick={() => handleOpenAddModal("educations")}
            />
          </div>
          {educations.map((edu) => (
            <div key={edu.id} className='flex gap-4 w-full sm:w-[80%]'>
              <Avatar
                src='https://docs.material-tailwind.com/img/face-2.jpg'
                alt='avatar'
                size='xl'
              />
              <div className='flex flex-col w-full border-b-2 pb-4'>
                <div className='flex justify-between items-center'>
                  <Typography variant='h5' className='text-[#25324B]'>
                    {edu.institution}
                  </Typography>
                  <FaRegEdit
                    className='text-2xl sm:text-3xl border-2 border-[#D6DDEB] p-1 hover:bg-gray-100 transition-colors cursor-pointer'
                    onClick={() => handleOpenEditModal(edu, "educations")}
                  />
                </div>
                <div className='flex gap-3 flex-wrap text-sm sm:text-base'>
                  <span className='text-[#25324B] font-bold'>{edu.degree}</span>
                </div>
                <span className='text-[#7C8493] text-sm sm:text-base'>
                  {edu.duration}
                </span>
                <Typography className='text-[#25324B] text-sm sm:text-base mt-2'>
                  {edu.description}
                </Typography>
              </div>
            </div>
          ))}
          <Link
            className='text-[#183F5B] font-bold text-sm sm:text-base'
            onClick={toggleCollapse}>
            Show 2 more Educations
          </Link>
        </div>

        {/* Portfolios Section */}
        <Card className='mt-10 border-2 border-[#D6DDEB] p-4'>
          <div className='flex justify-between items-center mb-4'>
            <Typography variant='h3' className='text-[#25324B] font-bold'>
              Portfolios
            </Typography>
            <FaPlus
              className='text-2xl sm:text-3xl border-2 border-[#D6DDEB] p-1 hover:bg-gray-100 transition-colors cursor-pointer'
              onClick={() => handleOpenAddModal("portfolios")}
            />
          </div>
          {portfolios.length > 0 ? (
            portfolios.map((portfolio, index) => (
              <div key={index} className='flex gap-4 w-full sm:w-[80%] mb-4'>
                <Avatar
                  src='https://docs.material-tailwind.com/img/face-2.jpg'
                  alt='portfolio avatar'
                  size='xl'
                />
                <div className='flex flex-col w-full border-b-2 pb-4'>
                  <div className='flex justify-between items-center'>
                    <Typography variant='h5' className='text-[#25324B]'>
                      {portfolio.title}
                    </Typography>
                    <FaRegEdit
                      className='text-2xl sm:text-3xl border-2 border-[#D6DDEB] p-1 hover:bg-gray-100 transition-colors cursor-pointer'
                      onClick={() =>
                        handleOpenEditModal(portfolio, "portfolios")
                      }
                    />
                  </div>
                  {portfolio.description && (
                    <Typography className='text-[#25324B] text-sm sm:text-base mt-2'>
                      {portfolio.description}
                    </Typography>
                  )}
                </div>
              </div>
            ))
          ) : (
            <Typography className='text-gray-600'>
              No portfolios added yet. Click the "+" button to add one.
            </Typography>
          )}
        </Card>

        {/* Add Modal */}
        <Dialog
          open={openAddModal}
          handler={() => setOpenAddModal(false)}
          className='rounded-lg'>
          <DialogHeader>
            Add New{" "}
            {formData.section.charAt(0).toUpperCase() +
              formData.section.slice(1)}
          </DialogHeader>
          <DialogBody>
            {formData.section === "skills" && (
              <Input
                label='Skill Name'
                name='skillName'
                value={formData.skillName}
                onChange={handleInputChange}
                className='mb-4'
              />
            )}
            {formData.section === "experiences" && (
              <>
                <Input
                  label='Title'
                  name='title'
                  value={formData.title}
                  onChange={handleInputChange}
                  className='mb-4'
                />
                <Input
                  label='Company'
                  name='company'
                  value={formData.company}
                  onChange={handleInputChange}
                  className='mb-4'
                />
                <Input
                  label='Type'
                  name='type'
                  value={formData.type}
                  onChange={handleInputChange}
                  className='mb-4'
                />
                <Input
                  label='Duration'
                  name='duration'
                  value={formData.duration}
                  onChange={handleInputChange}
                  className='mb-4'
                />
                <Input
                  label='Location'
                  name='location'
                  value={formData.location}
                  onChange={handleInputChange}
                  className='mb-4'
                />
                <Textarea
                  label='Description'
                  name='description'
                  value={formData.description}
                  onChange={handleInputChange}
                  className='mb-4'
                />
              </>
            )}
            {formData.section === "educations" && (
              <>
                <Input
                  label='Institution'
                  name='institution'
                  value={formData.institution}
                  onChange={handleInputChange}
                  className='mb-4'
                />
                <Input
                  label='Degree'
                  name='degree'
                  value={formData.degree}
                  onChange={handleInputChange}
                  className='mb-4'
                />
                <Input
                  label='Duration'
                  name='duration'
                  value={formData.duration}
                  onChange={handleInputChange}
                  className='mb-4'
                />
                <Textarea
                  label='Description'
                  name='description'
                  value={formData.description}
                  onChange={handleInputChange}
                  className='mb-4'
                />
              </>
            )}
            {formData.section === "portfolios" && (
              <>
                <Input
                  label='Portfolio URL'
                  name='title'
                  value={formData.title}
                  onChange={handleInputChange}
                  className='mb-4'
                />
                <Textarea
                  label='Description (Optional)'
                  name='description'
                  value={formData.description}
                  onChange={handleInputChange}
                  className='mb-4'
                />
              </>
            )}
            {error && (
              <Typography color='red' className='text-sm mb-2'>
                {error}
              </Typography>
            )}
          </DialogBody>
          <DialogFooter>
            <Button
              variant='text'
              color='red'
              onClick={() => setOpenAddModal(false)}>
              Cancel
            </Button>
            <Button variant='gradient' color='blue' onClick={handleAddSubmit}>
              Add
            </Button>
          </DialogFooter>
        </Dialog>

        {/* Edit Modal */}
        <Dialog
          open={openEditModal}
          handler={() => setOpenEditModal(false)}
          className='rounded-lg'>
          <DialogHeader>
            Edit{" "}
            {formData.section.charAt(0).toUpperCase() +
              formData.section.slice(1)}
          </DialogHeader>
          <DialogBody>
            {formData.section === "about" && (
              <Textarea
                label='About'
                name='about'
                value={formData.about}
                onChange={handleInputChange}
                className='mb-4'
              />
            )}
            {formData.section === "skills" && (
              <Input
                label='Skill Name'
                name='skillName'
                value={formData.skillName}
                onChange={handleInputChange}
                className='mb-4'
              />
            )}
            {formData.section === "experiences" && (
              <>
                <Input
                  label='Title'
                  name='title'
                  value={formData.title}
                  onChange={handleInputChange}
                  className='mb-4'
                />
                <Input
                  label='Company'
                  name='company'
                  value={formData.company}
                  onChange={handleInputChange}
                  className='mb-4'
                />
                <Input
                  label='Type'
                  name='type'
                  value={formData.type}
                  onChange={handleInputChange}
                  className='mb-4'
                />
                <Input
                  label='Duration'
                  name='duration'
                  value={formData.duration}
                  onChange={handleInputChange}
                  className='mb-4'
                />
                <Input
                  label='Location'
                  name='location'
                  value={formData.location}
                  onChange={handleInputChange}
                  className='mb-4'
                />
                <Textarea
                  label='Description'
                  name='description'
                  value={formData.description}
                  onChange={handleInputChange}
                  className='mb-4'
                />
              </>
            )}
            {formData.section === "educations" && (
              <>
                <Input
                  label='Institution'
                  name='institution'
                  value={formData.institution}
                  onChange={handleInputChange}
                  className='mb-4'
                />
                <Input
                  label='Degree'
                  name='degree'
                  value={formData.degree}
                  onChange={handleInputChange}
                  className='mb-4'
                />
                <Input
                  label='Duration'
                  name='duration'
                  value={formData.duration}
                  onChange={handleInputChange}
                  className='mb-4'
                />
                <Textarea
                  label='Description'
                  name='description'
                  value={formData.description}
                  onChange={handleInputChange}
                  className='mb-4'
                />
              </>
            )}
            {formData.section === "portfolios" && (
              <>
                <Input
                  label='Portfolio URL'
                  name='title'
                  value={formData.title}
                  onChange={handleInputChange}
                  className='mb-4'
                />
                <Textarea
                  label='Description (Optional)'
                  name='description'
                  value={formData.description}
                  onChange={handleInputChange}
                  className='mb-4'
                />
              </>
            )}
            {error && (
              <Typography color='red' className='text-sm mb-2'>
                {error}
              </Typography>
            )}
          </DialogBody>
          <DialogFooter>
            <Button
              variant='text'
              color='red'
              onClick={() => setOpenEditModal(false)}>
              Cancel
            </Button>
            <Button variant='gradient' color='blue' onClick={handleEditSubmit}>
              Save
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
      <Footer />
    </div>
  );
};
