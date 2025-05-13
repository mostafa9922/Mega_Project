import { List, ListItem, Card } from "@material-tailwind/react";

export const JobList = () => {
  return (
    <div>
      <Card className='w-full'>
        <List>
          <ListItem>Inbox</ListItem>
          <ListItem>Trash</ListItem>
          <ListItem>Settings</ListItem>
        </List>
      </Card>
    </div>
  );
};
