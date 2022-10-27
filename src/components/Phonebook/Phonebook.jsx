import React from 'react';
import { nanoid } from 'nanoid';
import Form from 'components/Form/Form';
import css from '../Phonebook/Phonebook.module.css';
class Phonebook extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  renderContacts = () => {
    return this.state.contacts.map(nama => (
      <li key={nanoid()}>
        {nama.names} : {nama.numbers}
        <button>Delete</button>
      </li>
    ));
  };
  addItem = (names, numbers) => {
    this.setState({
      contacts: [...this.state.contacts, { names: names, numbers: numbers }],
    });
    console.log(names, numbers);
  };
  formSubmitChanging = data => {
    this.setState(this.addItem(data.name, data.number));
  };

  render() {
    return (
      <>
        <div className={css.div_form}>
          <h1>Phonebook</h1>
          <Form onSubmit={this.formSubmitChanging} />
        </div>
        <h2>Contacts</h2>
        <ul>{this.renderContacts()}</ul>
      </>
    );
  }
}
export default Phonebook;
