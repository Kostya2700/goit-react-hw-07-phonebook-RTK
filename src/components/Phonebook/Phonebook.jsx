import React from 'react';
import { nanoid } from 'nanoid';
import Form from 'components/Form/Form';
import css from '../Phonebook/Phonebook.module.css';
import Filter from 'components/Filter/Filter';
import ListItem from 'components/ListItem/ListItem';
import { Title } from 'components/Title/Title';
class Phonebook extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };
  addItem = (names, numbers) => {
    const normalizedFilter = names.toLowerCase();
    const checkByName = this.state.contacts.find(
      contact => contact.names.toLowerCase() === normalizedFilter
    );
    if (checkByName) {
      alert(`${names} is already in contacts`);
      return;
    } else {
      const contact = {
        id: nanoid(),
        names,
        numbers,
      };

      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };
  formSubmitChanging = data => {
    this.setState(this.addItem(data.name, data.number));
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getFilterContact = () => {
    return this.state.contacts.filter(contact =>
      contact.names.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };
  componentDidMount() {
    const local = localStorage.getItem('contacts');
    const localParse = JSON.parse(local);
    if (localParse) {
      this.setState({ contacts: localParse });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const filterContact = this.getFilterContact();
    return (
      <>
        <div className={css.div_form}>
          <Title title={'Phonebook'} />

          <Form onSubmit={this.formSubmitChanging} />
        </div>
        {this.state.contacts.length ? (
          <>
            <Title title={'Contacts'} />
            <Filter value={this.state.filter} onChange={this.changeFilter} />
            <ListItem contacts={filterContact} onDelete={this.deleteContact} />
          </>
        ) : (
          <Title title={'Write contact'} />
        )}
      </>
    );
  }
}
export default Phonebook;
