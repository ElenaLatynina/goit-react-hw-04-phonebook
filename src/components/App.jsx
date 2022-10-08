import React, {Component} from 'react';
// import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';
import { Title} from './App.styled';
import { Filter } from './Filter/Filter';


export class App extends Component{
  state = {
    contacts: [],
    filter: ''
  }

  onAddingToPhonebook = (newContact) => {
  const { name } = newContact;
  const { contacts } = this.state;
  const contactName = contacts.map(contact => contact.name);

    if (contactName.includes(name)) {
      alert(`${name} is already in contacts`);
    } else {
      newContact.id = `id-${this.contactId()}`;
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  }

  contactId = () => {
    const { contacts } = this.state;

    return contacts.length > 0
      ? Math.max.apply(null, contacts.map(({ id }) => Number(id.replace("id-", "")))) + 1
      : 1;
  }

  deleteContact = (needlessContact) => {
    this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== needlessContact),
    }));
  }

  searchContact = e => {
    this.setState({filter: e.target.value});
}
onFilterContacts = () => {
  const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
    );
  }
  render= () => {
  const { filter } = this.state;
    return (
  <Section>
    <h1>Phonebook</h1>
    <ContactForm onSubmit={this.onAddingToPhonebook}>
    </ContactForm>
    <Title>Contacts</Title>
    <Filter query={filter} onChange={this.searchContact} />
    <ContactList contacts={this.onFilterContacts()} onDeleteContact={this.deleteContact}></ContactList>
  </Section>)
  
  
  }
};