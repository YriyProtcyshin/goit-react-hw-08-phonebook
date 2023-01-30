import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Grid, Avatar } from '@mui/material';
import css from './ContactsItem.module.css';

export const ContactsItem = ({ filteredContact, handleDelete }) => {
  const getAvatar = name => {
    return name.slice(0, 1).toUpperCase() + name.slice(1, 2).toLowerCase();
  };
  return (
    <>
      {filteredContact.map(({ id, name, number }) => (
        <Paper elevation={2} className={css.item} key={name}>
          <Grid container spacing={1} key={name} sx={{ alignItems: 'center' }}>
            <Grid item xs={1} md={1}>
              <Avatar className={css.avatar} aria-label="recipe">
                {getAvatar(name)}
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
                onClick={() => handleDelete({ id })}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </>
  );
};
