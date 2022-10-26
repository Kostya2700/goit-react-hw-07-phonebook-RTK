import React from 'react';
import { nanoid } from 'nanoid';
class Phonebook extends React.Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };
  renderContacts = () => {
    return this.state.contacts.map(nama => <li key={nanoid()}>{nama}</li>);
  };
  handleInput = e => {
    this.setState({ name: e.target.value });
  };
  addItem = item => {
    // console.log('Phonebook ~ item', item);
    this.setState({ contacts: [...this.state.contacts, item] });
  };
  render() {
    return (
      <>
        <div>
          <input
            onChange={this.handleInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <button onClick={() => this.addItem(this.state.name)}>Add</button>
        </div>
        <ul>{this.renderContacts()}</ul>
      </>
    );
  }
}
export default Phonebook;
