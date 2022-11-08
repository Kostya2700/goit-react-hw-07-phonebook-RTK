import React, { useState } from 'react';
import css from '../Form/Form.module.css';
import PropTypes from 'prop-types';

function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        return;
    }
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  const formSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    reset();
  };

  return (
    <form className={css.form} onSubmit={formSubmit} autoComplete="off">
      <label>
        Name
        <input
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </label>

      <label>
        Number
        <input
          onChange={handleChange}
          value={number}
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
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
