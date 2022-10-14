import React, {Component} from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Title, Container} from './App.styled';
import { Filter } from './Filter/Filter';


export class App extends Component{
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  
  addContact = ({ name, number }) => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevStat => ({
      contacts: [newContact, ...prevStat.contacts],
    }));
  };

  findContact = searchName => {
    this.setState({ filter: searchName });
  };

  deleteContact = contactId=> {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render= () => {
  const normalizedFilter = this.state.filter.toLowerCase();
  const visibleContacts = this.state.contacts.filter(contact =>
  contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
  <Container>
    <h1>Phonebook</h1>
    <ContactForm onSubmit={this.addContact}>
    </ContactForm>
    <Title>Contacts</Title>
    <Filter value={this.state.filter} onSearch={this.findContact} />
    <ContactList contacts={visibleContacts} deleteContact={this.deleteContact} />
  </Container>)
  
  
  }
};