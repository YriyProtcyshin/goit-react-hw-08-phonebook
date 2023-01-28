import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addContactOperation } from 'redux/contacts/operation';

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>Name</p>
      <input
        type="text"
        placeholder="name"
        {...register('name', {
          required: 'Name is required',
          maxLength: 80,
        })}
      />
      <p>{errors.name?.message}</p>

      <p>Number</p>
      <input
        type="tel"
        placeholder="Mobile number"
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

      <p>{errors.number?.message}</p>

      <button type="submit">Add contact</button>
    </form>
  );
};
