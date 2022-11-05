// import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Title, Container} from './App.styled';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(() =>
  (JSON.parse(window.localStorage.getItem('contacts')) || []));
  const [filter, setFilter] = useState('');

  useEffect(() => { window.localStorage.setItem('contacts', JSON.stringify(contacts)); }, [contacts]);

  const addContact = ({ name, number }) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    };

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(contacts =>
      [newContact, ...contacts]
    );
  };
  

  const findContact = searchName => {
    setFilter(searchName);
  };

  const deleteContact = contactId => {
    setContacts(prevState => (
      prevState.filter(contact => contact.id !== contactId)
    ));
  };

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact}>
      </ContactForm>
      <Title>Contacts</Title>
      <Filter value={filter} onSearch={findContact} />
      <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
    </Container>);

};

export default App;

