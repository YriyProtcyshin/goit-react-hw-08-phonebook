import React from 'react';
import { Container } from '@mui/material';
import { Contacts } from "../components/ContactsList/ContactsList"
import {SearchField} from "../components/SearchField/SearchField"

export const ContactsPage = () => {
  return (
    <Container maxWidth="md">
      <SearchField/>
      <Contacts/>
    </Container>
  );
};
