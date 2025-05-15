import { useRef, useState } from "react";
import axios from "axios";

export const FileUpload = ({ userInfo, setUserInfo }) => {
  const inputRef = useRef(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("resumefile", file);

    setIsUploading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_ECTRACTION_CV_API}`,
        formData
      );
      setUserInfo(response.data.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div>
      <label
        htmlFor='file-upload'
        className='cursor-pointer bg-[#F8F8FD] text-[#7C8493] p-4 rounded-xl border-2 border-dashed border-[#877474] flex flex-row items-center justify-center gap-4'>
        <div className='rounded-full border-2 border-[#C3C6CF] p-1 mb-2'>
          <img src='/add.png' alt='Add' />
        </div>
        <span>
          {isUploading ? (
            <div className='flex items-center gap-2'>
              <svg
                className='animate-spin h-5 w-5 text-gray-600'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'>
                <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'></circle>
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8v8z'></path>
              </svg>
              Uploading...
            </div>
          ) : (
            "Add Resume/CV"
          )}
        </span>
      </label>

      <input
        id='file-upload'
        type='file'
        ref={inputRef}
        className='hidden'
        onChange={handleFileChange}
      />
    </div>
  );
};
