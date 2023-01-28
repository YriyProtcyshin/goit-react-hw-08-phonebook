import { getAllContacts } from 'redux/contacts/operation';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Box,  Grid, Avatar } from '@mui/material';




export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const contacts = useSelector(state => state.contacts.contacts);

  console.log(contacts);

  return (
    <>
      {contacts.map(({ name, number }) => (
        <Box key={name} sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid xs={6} md={2}>
              <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                R
              </Avatar>
            </Grid>
            <Grid xs={6} md={7}>
              {name}
            </Grid>
            <Grid xs={6} md={3}>
              {number}
            </Grid>
          </Grid>
        </Box>
      ))}
    </>
  );
};

//  <Card>
//    <CardHeader
//      avatar={
//        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
//          R
//        </Avatar>
//      }
//      title={name}
//      subheader={number}
//    />
//  </Card>;
