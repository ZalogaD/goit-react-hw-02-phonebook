import React from 'react';
import prop from 'prop-types';
import { List, ListItem } from './ContactList.styled';

const ContactList = ({ contacts }) => {
  return (
    <List>
      {contacts.map((contact) => (
        <ListItem key={contact.id}>
          {contact.name} - {contact.number}
        </ListItem>
      ))}
    </List>
  );
};

ContactList.prop = {
  contacts: prop.arrayOf(
    prop.shape({
      id: prop.string.isRequired,
      name: prop.string.isRequired,
      number: prop.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
