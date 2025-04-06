import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <section className='flex items-center p-16 bg-gradient-to-t from-[#C5DBEB] via-[#4591C8] to-[#183F5B] h-screen'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl dark:text-gray-400'>
            <span className='sr-only'>Error</span>404
          </h2>
          <p className='text-2xl font-semibold md:text-3xl'>
            Sorry, we couldn't find this page.
          </p>
          <p className='mt-4 mb-8 dark:text-gray-600'>
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            rel='noopener noreferrer'
            to='/'
            className='flex items-center justify-center flex-col px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50 '>
            <Button
              variant='gradient'
              className='flex items-center gap-3'
              color='blue'>
              Back to homepage
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
