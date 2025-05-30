import { Textarea, IconButton } from "@material-tailwind/react";

export function ChatBox() {
  return (
    <div className='flex w-full flex-col sm:flex-row items-center gap-2 sm:gap-3 rounded-[99px] border border-gray-900/10 bg-gray-900/5 p-2 sm:p-3'>
      <div className='flex w-full sm:w-auto justify-between sm:justify-start gap-2 sm:gap-3 mb-2 sm:mb-0'>
        <IconButton
          variant='text'
          className='rounded-full h-8 w-8 sm:h-10 sm:w-10'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='h-4 w-4 sm:h-5 sm:w-5'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
            />
          </svg>
        </IconButton>
        <IconButton
          variant='text'
          className='rounded-full h-8 w-8 sm:h-10 sm:w-10'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
            className='h-4 w-4 sm:h-5 sm:w-5'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z'
            />
          </svg>
        </IconButton>
      </div>
      <Textarea
        rows={1}
        resize={true}
        placeholder='Your Message'
        className='min-h-full w-full sm:w-auto !border-0 focus:border-transparent flex-1 text-sm sm:text-base'
        containerProps={{
          className: "grid h-full w-full sm:w-auto",
        }}
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
      <div className='flex justify-end w-full sm:w-auto mt-2 sm:mt-0'>
        <IconButton
          variant='text'
          className='rounded-full h-8 w-8 sm:h-10 sm:w-10'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
            className='h-4 w-4 sm:h-5 sm:w-5'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
            />
          </svg>
        </IconButton>
      </div>
    </div>
  );
}
