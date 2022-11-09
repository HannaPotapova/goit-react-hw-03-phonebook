import React, {Component} from "react";
import ContactForm from "./ContactBook/ContactForm";
import ContactList from "./ContactBook/ContactList";
import Filter from "./ContactBook/Filter";
import initialContacts from "./data/contacts.json";
import { nanoid } from 'nanoid';
import css from './ContactBook/ContactBook.module.css'

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  }
  
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  contactAdd = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (this.state.contacts.map(contact => contact.name).includes(name)) {
      alert(`${name} is already in contact`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  }
  
  render() { 
    return (
      <div>
        <div className={css.box}>
          <h1>Phonebook</h1>
          <ContactForm
            contactAdd={this.contactAdd}
          />
        </div>
        <div className={css.box}>
          <h2>Contacts</h2>
          <Filter
            findeName={this.changeFilter} />
          <ContactList
            data={this.state}
            deleteContact={this.deleteContact}            
          />
        </div>
      </div>
    )  
  }
}

export default App;