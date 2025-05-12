import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Button, IconButton } from "@material-tailwind/react";

export function Pagination({ active, onChange, totalPages }) {
  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => onChange(index),
  });

  const next = () => {
    if (active === totalPages) return;
    onChange(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    onChange(active - 1);
  };

  return (
    <div className='flex flex-wrap items-center justify-center gap-4 mt-6'>
      <Button
        variant='text'
        className='flex items-center gap-2 text-sm'
        onClick={prev}
        disabled={active === 1}>
        <ArrowLeftIcon strokeWidth={2} className='h-4 w-4' /> Previous
      </Button>

      <div className='flex flex-wrap justify-center gap-2'>
        {Array.from({ length: totalPages }, (_, i) => (
          <IconButton
            key={i + 1}
            {...getItemProps(i + 1)}
            className={`w-10 h-10 text-sm ${
              active === i + 1 && "bg-[#549ACC]"
            }`}>
            {i + 1}
          </IconButton>
        ))}
      </div>

      <Button
        variant='text'
        className='flex items-center gap-2 text-sm'
        onClick={next}
        disabled={active === totalPages}>
        Next <ArrowRightIcon strokeWidth={2} className='h-4 w-4' />
      </Button>
    </div>
  );
}
