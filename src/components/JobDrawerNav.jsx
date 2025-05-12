import React, { useState } from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Drawer,
  Card,
  Checkbox,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export function JobDrawerNav() {
  const filters = [
    {
      id: 1,
      title: "Type of Employment",
      options: ["Full Time", "Part Time", "Remote", "Internship", "Contract"],
      counts: [12, 8, 5, 10, 4],
    },
    {
      id: 2,
      title: "Categories",
      options: ["Design", "Sales", "Marketing", "Business", "Human Resource"],
      counts: [7, 6, 9, 3, 2],
    },
    {
      id: 3,
      title: "Job Level",
      options: ["Entry Level", "Mid Level", "Senior Level", "Director"],
      counts: [15, 10, 6, 1],
    },
    {
      id: 4,
      title: "Salary Range",
      options: [
        "700$ - 1000$",
        "1000$ - 1500$",
        "1500$ - 2000$",
        "3000$ or Above",
      ],
      counts: [4, 8, 3, 2],
    },
  ];

  const [openAccordion, setOpenAccordion] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleAccordionToggle = (id) => {
    setOpenAccordion(openAccordion === id ? 0 : id);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <IconButton variant='text' size='lg' onClick={toggleDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className='h-8 w-8 stroke-2' />
        ) : (
          <Bars3Icon className='h-8 w-8 stroke-2' />
        )}
      </IconButton>

      <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
        <Card color='transparent' shadow={false} className='h-full w-full p-4'>
          {filters.map(({ id, title, options, counts }) => (
            <Accordion
              key={id}
              open={openAccordion === id}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    openAccordion === id ? "rotate-180" : ""
                  }`}
                />
              }>
              <ListItem className='p-0' selected={openAccordion === id}>
                <AccordionHeader
                  onClick={() => handleAccordionToggle(id)}
                  className='border-b-0 p-3'>
                  <Typography color='blue-gray' className='mr-auto font-normal'>
                    {title}
                  </Typography>
                </AccordionHeader>
              </ListItem>

              <AccordionBody className='py-1'>
                <List>
                  {options.map((option, index) => (
                    <ListItem className='p-0' key={index}>
                      <label className='flex w-full cursor-pointer items-center px-3 py-2'>
                        <ListItemPrefix className='mr-3'>
                          <Checkbox
                            id={`${title}-${index}`}
                            ripple={false}
                            className='hover:before:opacity-0'
                            containerProps={{ className: "p-0" }}
                          />
                        </ListItemPrefix>
                        <Typography color='blue-gray' className='font-medium'>
                          {option} ({counts[index]})
                        </Typography>
                      </label>
                    </ListItem>
                  ))}
                </List>
              </AccordionBody>
            </Accordion>
          ))}
        </Card>
      </Drawer>
    </>
  );
}
