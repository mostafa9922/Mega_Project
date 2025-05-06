import React from "react";

export const FileUpload = () => {
  return (
    <div>
      <label className='cursor-pointer bg-[#F8F8FD] text-[#7C8493] p-4 rounded-xl border-2 border-dashed border-[#877474] flex flex-row items-center justify-center gap-4'>
        <div className='rounded-full border-2 border-[#C3C6CF] p-1 mb-2'>
          <img src='/add.png' alt='' />
        </div>
        <span>Add Resume/CV</span>
        <input type='file' className='hidden' />
      </label>
    </div>
  );
};
