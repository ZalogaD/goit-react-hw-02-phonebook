import React, { useState } from 'react';
import {Form, Input, Btn} from './ContactForm.styled';
import prop from 'prop-types';

const ContactForm = ({ addNewContact }) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewContact(newName, newNumber);
    setNewName('');
    setNewNumber('');
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
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={newNumber}
        onChange={(e) => setNewNumber(e.target.value)}
      />
      <Btn type="submit">Add Contact</Btn>
    </Form>
  );
};

ContactForm.prop = {
    addNewContact: prop.func.isRequired,
};

export default ContactForm;