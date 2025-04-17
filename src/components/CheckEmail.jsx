import { useState, useRef } from "react";
import { Typography, Input, Button, Alert } from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export function CheckEmail() {
  const [code, setCode] = useState(["", "", "", "", ""]);
  const [error, setError] = useState(false);
  const inputRefs = useRef([]);
  const location = useLocation();
  const email = location.state?.email;

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value.slice(0, 1);
    setCode(newCode);

    // Move to next input if value is entered
    if (value && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (code[index]) {
        // Case 1: If there's a digit in the current box, just clear it
        const newCode = [...code];
        newCode[index] = "";
        setCode(newCode);
      } else if (index > 0) {
        // Case 2: If it's empty, move to the previous box and clear that one
        inputRefs.current[index - 1]?.focus();
        const newCode = [...code];
        newCode[index - 1] = "";
        setCode(newCode);
      }
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
          <span className='font-semibold'>{email}</span>. Enter it below to
          reset your password.
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
                  type='text'
                  inputMode='numeric'
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  inputRef={(el) => (inputRefs.current[index] = el)}
                  color='gray'
                  size='lg'
                  placeholder='0'
                  className='w-12 h-12 text-center text-xl font-bold placeholder:opacity-50 focus:border-[#2775AD] border-t-blue-gray-200'
                  containerProps={{ className: "min-w-[48px]" }}
                  labelProps={{ className: "hidden" }}
                  autoFocus={index === 0}
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
        <Link to='/' className='flex items-center'>
          <img src='/image 14.png' alt='logo' className='w-14 h-8' />
          <img src='/ookup.png' alt='' className='w-14 h-8' />
        </Link>
      </div>
    </section>
  );
}

export default CheckEmail;

const Msg = ({ closeToast, toastProps }) => (
  <div>code has sent to your email</div>
);

function Msg1() {
  const displayMsg = () => {
    toast(Msg);
    // toast(<Msg />) would also work
  };

  return (
    <div>
      <button onClick={displayMsg}>Click me</button>
      <ToastContainer />
    </div>
  );
}
