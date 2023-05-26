import React, { useState } from 'react';
import ContactForm from './ContactForm/СontactForm';
import { nanoid } from 'nanoid';
import { Cont, TitlePh, TitleCont} from './App.styled';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  
    const addNewContact = (newName) => {
      const NewContact = {
        id: nanoid(),
        name: newName
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
                  <li key = {contact.id}>{contact.name}</li>
                ))}
              </ul>
    </Cont>
  );
};

export default App;
