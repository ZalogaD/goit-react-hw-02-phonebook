import React, { useState } from 'react';
import {Form, Input, Btn} from './ContactForm.styled';
import prop from 'prop-types';

const ContactForm = ({ addNewContact }) => {
  const [newName, setNewName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewContact(newName);
    setNewName('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <Btn type="submit">Add Contact</Btn>
    </Form>
  );
};

ContactForm.prop = {
    onChange: prop.func,
    onAddContact: prop.func,
    contacts: prop.array.isRequired
};

export default ContactForm;