import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addContactOperation } from 'redux/contacts/operation';
import { TextField, Box, Button } from '@mui/material';
import { Container } from '@mui/material';

export const AddContactForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ name, number }) => {
    dispatch(addContactOperation({ name, number }));
    console.log('form:', name, number);
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mt={5}>
          <TextField
            variant="outlined"
            label="Name"
            autofocus
            {...register('name', {
              required: 'Name is required',
              maxLength: 80,
            })}
          />
        </Box>
        <p>{errors.name?.message}</p>
        <Box mt={5} mb={5}>
          <TextField
            variant="outlined"
            label="Phome number"
            autofocus
            {...register('number', {
              required: 'Phone number is required',
              minLength: {
                value: 8,
                message: 'Phone number must be between 8 and 10 numbers ',
              },
              maxLength: {
                value: 10,
                message: 'Phone number must be between 8 and 10 numbers ',
              },
            })}
          />
        </Box>
        <Button type="submit" variant="contained" color="primary">
          Add Contact
        </Button>
      </form>
    </Container>
  );
};
