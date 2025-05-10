import { Typography, Input, Button } from "@material-tailwind/react";
import { NavBar_perview } from "./NavBar_perview"; // Consider renaming to NavBar_preview if it's a typo
import { Footer } from "./Footer";
import { IoCheckmarkOutline } from "react-icons/io5";

export const AboutUs = ({ loggedIn, setLoggedIn }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='bg-[#EFF6F8] flex-grow w-full h-screen'>
        <NavBar_perview loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <div className='flex flex-col justify-center items-center gap-10 p-8'>
          <Typography variant='h2' className='text-[#183F5B] text-center'>
            About Us
          </Typography>
          <img
            src='/Illustration.png'
            alt='Team Illustration'
            className='w-full max-w-md object-contain'
          />
        </div>
      </div>

      {/* Main Content */}
      <main className='py-10 flex flex-col gap-10 w-full'>
        <section className='container mx-auto'>
          <Typography variant='h5' className='text-[#183F5B] mb-2'>
            Our Story
          </Typography>
          <p className='text-[#183F5B]'>
            Empowering Careers. Connecting Talent. At Uxellence, we believe
            finding a job—or the right learning path—shouldn't feel like a maze.
            We created this platform to make career discovery, preparation, and
            application smoother, smarter, and more personal.
          </p>
          <br />
          <p className='text-[#183F5B]'>
            It started with a simple idea: what if career growth was as
            accessible as your favorite app? Many students and job seekers were
            overwhelmed by unclear career paths, scattered resources, and
            generic advice. So, we set out to build a solution that connects
            people with the opportunities, skills, and confidence they need to
            succeed—from resume testing to interview prep, job tracking, and
            personalized recommendations.
          </p>
        </section>

        <section className='container mx-auto'>
          <Typography variant='h5' className='text-[#183F5B] mb-2'>
            Our Mission
          </Typography>
          <p className='text-[#183F5B]'>
            To guide and empower individuals by providing smart tools and
            resources that simplify job searching and career development.
          </p>
          <br />
          <Typography variant='h6' className='text-[#183F5B] mb-2'>
            Our Vision
          </Typography>
          <p className='text-[#183F5B]'>
            A world where everyone—no matter their background—can unlock their
            potential and build a fulfilling career.
          </p>
        </section>

        {/* CTA Section */}
        <section className='p-6 bg-[#549ACC] flex flex-col items-center justify-center gap-6 w-full'>
          <Typography variant='h3' className='text-white text-center'>
            Focus on the work you love.
            <br /> We’ll handle the rest.
          </Typography>
          <form onSubmit={handleSubmit} className='w-full max-w-md'>
            <div className='flex gap-2 items-center bg-white p-2 rounded'>
              <Input
                label='Email'
                type='email'
                required
                aria-label='Email Address'
                className='flex-grow bg-white text-black'
              />
              <Button
                type='submit'
                aria-label='Get Started'
                className='bg-[#183F5B] text-white'>
                Get Started for Free
              </Button>
            </div>
            <div className='text-white mt-2 flex justify-between text-sm'>
              <span>
                <IoCheckmarkOutline />
                No credit card
              </span>
              <span>
                <IoCheckmarkOutline />
                No spam
              </span>
              <span>
                <IoCheckmarkOutline />
                No hassle
              </span>
            </div>
          </form>
        </section>

        <section className='container mx-auto'>
          <Typography variant='h5' className='text-[#183F5B] mb-2'>
            What We Offer
          </Typography>
          <ul className='list-disc pl-6 space-y-1 text-[#183F5B]'>
            <li>
              Smart Job Search: Personalized recommendations based on your
              profile.
            </li>
            <li>
              Resume Tester: Get feedback and improve your resume instantly.
            </li>
            <li>
              Interview Prep: Practice questions and expert tips to build
              confidence.
            </li>
            <li>Job Tracker: Keep track of your applications in one place.</li>
            <li>
              Learning Modules: Upskill with curated content and
              beginner-friendly courses.
            </li>
          </ul>
        </section>

        <section className='container mx-auto'>
          <Typography variant='h5' className='text-[#183F5B] mb-2'>
            Our Values
          </Typography>
          <ul className='list-disc pl-6 space-y-1 text-[#183F5B]'>
            <li>Inclusivity – Careers are for everyone.</li>
            <li>Innovation – We’re always improving to serve you better.</li>
            <li>Trust – Your growth is our priority.</li>
            <li>User-First – Every feature is designed with you in mind.</li>
          </ul>
        </section>

        <section className='container mx-auto'>
          <Typography variant='h5' className='text-[#183F5B] mb-2'>
            Our Partners
          </Typography>
          <p className='text-[#183F5B]'>
            Proudly working with companies and communities including:
          </p>
          <ul className='list-disc pl-6 space-y-1 text-[#183F5B]'>
            <li>HubSpot</li>
            <li>Nike</li>
            <li>Dropbox</li>
            <li>TechSummit</li>
            <li>Wild Wild</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
};
