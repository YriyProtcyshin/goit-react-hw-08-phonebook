import React from 'react';
import { Container } from '@mui/material';
import {Contacts} from "../components/Contacts/Contacts"

export const ContactsPage = () => {
  return (
    <Container maxWidth="md">
      {<Contacts/>}
    </Container>
  );
};
