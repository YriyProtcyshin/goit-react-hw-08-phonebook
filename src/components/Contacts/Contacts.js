import { getAllContacts } from 'redux/contacts/operation';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Box, Grid, Avatar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';

import Paper from '@mui/material/Paper';

import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  color: theme.palette.text.secondary,

  height: 60,
  marginBottom: '12px',
  padding: '0 10px',
}));

export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const contacts = useSelector(state => state.contacts.contacts);

  console.log(contacts);

  return (
    <Box sx={{ pt: 5 }}>
      {contacts.map(({ name, number }) => (
        <Item elevation={2}>
          <Grid container spacing={1} key={name} sx={{ alignItems: 'center' }}>
            <Grid item xs={1} md={1}>
              <Avatar sx={{ bgcolor: '#1976d2' }} aria-label="recipe">
                Ta
              </Avatar>
            </Grid>
            <Grid item xs={4} md={4}>
              {name}
            </Grid>
            <Grid item xs={4} md={3}>
              {number}
            </Grid>
            <Grid item xs={4} md={3}>
              <Button
                size="small"
                variant="contained"
                color="success"
                startIcon={<EditIcon />}
                sx={{ marginRight: '10px' }}
              >
                Edit
              </Button>
              <Button
                size="small"
                color="error"
                variant="contained"
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </Item>
      ))}
    </Box>
  );
};
