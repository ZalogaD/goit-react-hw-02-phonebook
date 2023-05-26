import React, { Phone } from 'react';


const ContactForm = ({ addNewContact }) => {
  const [newName, setNewName] = Phone('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewContact(newName);
    setNewName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <btn type="submit">Add Contact</btn>
    </form>
  );
};

export default ContactForm;
