import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
import { CiSearch } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";

const TABLE_HEAD = ["#", "Company Name", "Roles", "Date Applied", "Status"];

const statusColor = {
  "In Review": "blue",
  Shortlisted: "amber",
  Offered: "green",
  Interviewing: "purple",
  Unsuitable: "red",
};

export function DashTable({ filter, TABLE_ROWS }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRows, setFilteredRows] = useState(TABLE_ROWS);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const totalPages = Math.ceil(filteredRows.length / rowsPerPage);

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const result = TABLE_ROWS.filter(
      ({ name, roles, status }) =>
        name.toLowerCase().includes(query) ||
        roles.toLowerCase().includes(query) ||
        status.toLowerCase().includes(query)
    );
    setFilteredRows(result);
    setCurrentPage(1); // Reset to first page after search
  };

  const applyFilter = () => {
    let filtered = TABLE_ROWS;

    if (filter?.status != "All") {
      filtered = filtered.filter((row) => row.status === filter.status);
    }
    if (filter?.company) {
      filtered = filtered.filter((row) =>
        row.name.toLowerCase().includes(filter.company.toLowerCase())
      );
    }

    setFilteredRows(filtered);
    setCurrentPage(1);
  };

  useEffect(() => {
    applyFilter();
  }, [filter]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentRows = filteredRows.slice(indexOfFirst, indexOfLast);

  return (
    <Card className='h-full w-full'>
      <CardHeader floated={false} shadow={false} className='rounded-none'>
        <div className='mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center'>
          <Typography variant='h5' color='blue-gray'>
            Applications History
          </Typography>
          <div className='flex w-full shrink-0 gap-2 md:w-max'>
            <input
              type='text'
              placeholder='Search...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='border px-3 py-1 rounded-md text-sm w-48'
            />
            <Button
              className='flex items-center gap-3'
              size='sm'
              onClick={handleSearch}>
              <CiSearch className='h-4 w-4' /> Search
            </Button>
            <Button className='flex items-center gap-3' size='sm'>
              <IoFilterOutline className='h-4 w-4' /> Filter
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardBody className='overflow-x-auto px-0'>
        <table className='w-full min-w-max table-auto text-left'>
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className='border-y border-blue-gray-100 bg-blue-gray-50/50 p-4'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal leading-none opacity-70'>
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentRows.map(({ img, name, roles, date, status }, index) => {
              const classes =
                index === currentRows.length - 1
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

              const formattedDate = new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(new Date(date));

              return (
                <tr key={name}>
                  <th scope='row' className={classes}>
                    {(currentPage - 1) * rowsPerPage + index + 1}
                  </th>
                  <td className={classes}>
                    <div className='flex items-center gap-3'>
                      <Avatar
                        src={img}
                        alt={name}
                        size='md'
                        className='border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1'
                      />
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-bold'>
                        {name}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>{roles}</td>
                  <td className={classes}>{formattedDate}</td>
                  <td className={classes}>
                    <Chip
                      size='sm'
                      variant='ghost'
                      color={statusColor[status] || "gray"}
                      value={status}
                      className='w-fit'
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>

      <CardFooter className='flex items-center justify-between border-t border-blue-gray-50 p-4'>
        <Button
          variant='outlined'
          size='sm'
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}>
          Previous
        </Button>

        <div className='flex items-center gap-2'>
          {Array.from({ length: totalPages }, (_, i) => (
            <IconButton
              key={i}
              variant={currentPage === i + 1 ? "outlined" : "text"}
              size='sm'
              onClick={() => handlePageChange(i + 1)}>
              {i + 1}
            </IconButton>
          ))}
        </div>

        <Button
          variant='outlined'
          size='sm'
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}>
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
