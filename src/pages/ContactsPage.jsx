import React from 'react';
import { Container } from '@mui/material';
import { Contacts } from "../components/Contacts/Contacts"
import {SearchField} from "../components/SearchField/SearchField"

export const ContactsPage = () => {
  return (
    <Container maxWidth="md">
      <SearchField/>
      <Contacts/>
    </Container>
  );
};
