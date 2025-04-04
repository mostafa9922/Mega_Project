import { useState, useRef } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { Alert } from "@material-tailwind/react";

export function CheckEmail() {
  const [code, setCode] = useState(["", "", "", "", ""]);
  const [error, setError] = useState(false);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Only allow digits
    const newCode = [...code];
    newCode[index] = value.slice(0, 1); // Limit to 1 digit
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 4) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullCode = code.join("");
    if (fullCode.length !== 5 || !/^\d{5}$/.test(fullCode)) {
      setError(true);
      return;
    }
    setError(false);
    console.log("Verification code submitted:", fullCode); // Replace with API call
  };

  return (
    <section className='flex flex-col min-h-screen items-center justify-center bg-gradient-to-t from-[#C5DBEB] via-[#4591C8] to-[#183F5B] px-4 py-16'>
      <div className='bg-[#F5F9FF] w-full max-w-md p-6 rounded-lg shadow-lg md:max-w-lg lg:max-w-xl'>
        <Typography variant='h3' className='mb-2 text-[#2775AD] text-center'>
          Verify Your Email
        </Typography>
        <Typography className='mb-8 text-gray-600 font-normal text-[18px] text-center'>
          We sent a 5-digit code to{" "}
          <span className='font-semibold'>contact@dscode.com</span>. Enter it
          below to reset your password.
        </Typography>
        <form onSubmit={handleSubmit} className='w-full text-center'>
          <div className='mb-6'>
            <Typography
              variant='small'
              className='mb-4 block font-medium text-gray-900'>
              Enter 5-Digit Code
            </Typography>
            <div className='flex justify-center gap-2 sm:gap-4'>
              {code.map((digit, index) => (
                <Input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type='text'
                  inputMode='numeric'
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  color='gray'
                  size='lg'
                  placeholder='0'
                  className='w-12 h-12 text-center text-xl font-bold placeholder:opacity-50 focus:border-[#2775AD] border-t-blue-gray-200'
                  containerProps={{ className: "min-w-[48px]" }}
                  labelProps={{ className: "hidden" }}
                />
              ))}
            </div>
            {error && (
              <Alert color='red' className='mt-4 max-w-xs mx-auto'>
                Please enter a valid 5-digit code!
              </Alert>
            )}
          </div>
          <Button
            type='submit'
            color='gray'
            size='lg'
            className='mt-6 bg-[#549acc] w-full hover:bg-[#4688b8] transition-all'>
            Verify Code
          </Button>
        </form>
      </div>
      <div className='absolute top-4 left-4 flex items-center z-10'>
        <img src='image14.png' alt='logo' className='w-8 h-8' />
        <p className='ml-2 text-white font-semibold'>OOKUP</p>
      </div>
    </section>
  );
}

export default CheckEmail;
