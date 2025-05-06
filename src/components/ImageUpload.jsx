import React from "react";

export const ImageUpload = () => {
  return (
    <div>
      <label className='cursor-pointer bg-[#F8F8FD] text-[#7C8493] p-10 rounded-xl border-2 border-dashed border-[#183F5B] flex flex-col items-center justify-center'>
        <span>
          <span className='font-bold text-[#183F5B]'>Click to replace</span> or
          drag and drop
        </span>
        <span>SVG, PNG, JPG or GIF (max. 400 x 400px)</span>
        <input type='file' className='hidden' />
      </label>
    </div>
  );
};
