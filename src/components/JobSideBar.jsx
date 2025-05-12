import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Checkbox,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export function JobSideBar() {
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

  return (
    <Card className='h-full w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5'>
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
  );
}
