import { Card } from "@material-tailwind/react";
import { FaFile } from "react-icons/fa6";
import { FaClockRotateLeft } from "react-icons/fa6";

export function SideBar() {
  return (
    <Card className='h-[90vh] p-6 shadow-xl shadow-blue-gray-900/5 rounded-none text-2xl'>
      <div className='mb-10'>
        <FaFile />
      </div>
      <div>
        <FaClockRotateLeft />
      </div>
    </Card>
  );
}
