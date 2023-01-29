import { getAllContacts } from 'redux/contacts/operation';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Box, Grid, Avatar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import css from "./ContactsList.module.css"
import { deleteContact } from "redux//contacts/operation" 



export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const contacts = useSelector(state => state.contacts.contacts);

  const handleDelete = (id) => {
    dispatch(deleteContact(id))
  }

  return (
    <Box sx={{ pt: 5 }}>
      {contacts.map(({ id, name, number }) => (
        <Paper elevation={2} className={css.item} key={ name}>
          <Grid container spacing={1} key={name} sx={{ alignItems: 'center' }}>
            <Grid item xs={1} md={1}>
              <Avatar className={css.avatar} aria-label="recipe">
                Ta
              </Avatar>
            </Grid>
            <Grid item xs={3} md={4}>
              {name}
            </Grid>
            <Grid item xs={3} md={3}>
              {number}
            </Grid>
            <Grid item xs={5} md={3}>
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
                onClick={() => handleDelete({id})}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
};
