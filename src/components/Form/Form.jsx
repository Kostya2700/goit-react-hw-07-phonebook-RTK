import React from 'react';
import css from '../Form/Form.module.css';
import { useAddContactsMutation, useGetContactsQuery } from 'redux/contactsRTK';

function Form() {
  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactsMutation();

  const formSubmit = e => {
    e.preventDefault();
    const forms = e.currentTarget.elements;
    const normalizedFilter = forms.name.value.toLowerCase();

    const checkByName = data.find(
      contact => contact.name.toLowerCase() === normalizedFilter
    );
    if (checkByName) {
      e.currentTarget.reset();
      alert('this contacts is written in phonebook');
      return;
    }

    addContact({
      name: forms.name.value,
      phone: forms.number.value,
    });
    console.log('contacts is added');
    e.currentTarget.reset();
  };

  return (
    <form className={css.form} onSubmit={formSubmit} autoComplete="off">
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </label>

      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit" className={css.big_button}>
        Add contacts
      </button>
    </form>
  );
}

export default Form;
