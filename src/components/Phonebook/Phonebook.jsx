import React from 'react';
import { nanoid } from 'nanoid';
import Form from 'components/Form/Form';
import css from '../Phonebook/Phonebook.module.css';
import Filter from 'components/Filter/Filter';
import ListItem from 'ListItem/ListItem';
class Phonebook extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  // renderContacts = () => {
  //   return this.state.contacts.map(contact => (
  //     <li key={contact.id}>
  //       <span>{contact.names}</span>:<span>{contact.numbers}</span>
  //       <button className={css.btn_item}>Delete</button>
  //     </li>
  //   ));
  // };
  addItem = (names, numbers) => {
    this.setState({
      contacts: [
        ...this.state.contacts,
        { names: names, numbers: numbers, id: nanoid() },
      ],
    });
    console.log(names, numbers);
  };
  formSubmitChanging = data => {
    this.setState(this.addItem(data.name, data.number));
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    // const filterContact = this.state.contacts.filter(name =>
    //   name.name.toLowerCase().includes(this.state.filter.toLowerCase())
    // );
    return (
      <>
        <div className={css.div_form}>
          <h1>Phonebook</h1>
          <Form onSubmit={this.formSubmitChanging} />
        </div>
        {this.state.contacts.length ? (
          <>
            <h2>Contacts</h2>
            <Filter value={this.state.filter} onChange={this.changeFilter} />
            <ListItem contacts={this.state.contacts} />
          </>
        ) : (
          <h3>Write contact</h3>
        )}
      </>
    );
  }
}
export default Phonebook;
