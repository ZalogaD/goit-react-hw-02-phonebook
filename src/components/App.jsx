import React, { useState } from 'react';
import ContactForm from './ContactForm/СontactForm';
import { nanoid } from 'nanoid';
import { Cont, TitlePh, TitleCont} from './App.styled';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  
    const addNewContact = (newName, newNumber) => {
      const NewContact = {
        id: nanoid(),
        name: newName,
        number: newNumber
      };
    setContacts([...contacts, NewContact]);
    };

    const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <Cont>
      <TitlePh>Phonebook</TitlePh>
        <ContactForm addNewContact={addNewContact} />
          <TitleCont>Contacts:</TitleCont>
            <input 
              type="text"
              placeholder="Search contacts"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
              <ul>{filterContacts.map(contact => (
                  <li key = {contact.id}>{contact.name} - {contact.number}</li>
                ))}
              </ul>
    </Cont>
  );
};

export default App;
