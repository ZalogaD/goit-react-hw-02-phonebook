import React, { useState } from 'react';
import ContactForm from './ContactForm/СontactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Cont, TitlePh, TitleCont} from './App.styled';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  
    const addNewContact = (newName, newNumber) => {
      const isContactExists = contacts.some((contact) => contact.name.toLowerCase() === newName.toLowerCase());
      
        if (isContactExists) {
          alert(`${newName} is already in contacts. Please enter a different name.`);
        return;
      }

      const newContact = {
        id: nanoid(),
        name: newName,
        number: newNumber
      };
    setContacts([...contacts, newContact]);
    };

    const deleteContact = (id) => {
      setContacts(contacts.filter((contact) => contact.id !== id));
    };

    const filterContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <Cont>
      <TitlePh>Phonebook</TitlePh>
        <ContactForm addNewContact={addNewContact} contacts = {contacts} />
          <TitleCont>Contacts:</TitleCont>
            <Filter filter={filter} onFilterChange={(e) => setFilter(e.target.value)} />
              <ContactList contacts={filterContacts} onDeleteContact={deleteContact} />
            </Cont>
  );
};

export default App;