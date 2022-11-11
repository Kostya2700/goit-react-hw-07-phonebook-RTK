import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';
import Form from 'components/Form/Form';
import css from '../Phonebook/Phonebook.module.css';
import Filter from 'components/Filter/Filter';
import ListItem from 'components/ListItem/ListItem';
import { Title } from 'components/Title/Title';
import { useState } from 'react';
const KEYLOCAL = 'contacts';
function Phonebook() {
  const [contacts, setContacts] = useState(() =>
    JSON.parse(window.localStorage.getItem(KEYLOCAL) ?? [])
  );
  const [filter, setFilter] = useState('');

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };
  const addItem = (names, numbers) => {
    const normalizedFilter = names.toLowerCase();
    const checkByName = contacts.find(
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

      setContacts([contact, ...contacts]);
    }
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const getFilterContact = () => {
    return contacts.filter(contact =>
      contact.names.toLowerCase().includes(filter.toLowerCase())
    );
  };

  useEffect(() => {
    window.localStorage.setItem(KEYLOCAL, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <div className={css.div_form}>
        <Title title={'Phonebook'} />

        <Form onSubmit={addItem} />
      </div>
      {contacts.length ? (
        <>
          <Title title={'Contacts'} />
          <Filter value={filter} onChange={changeFilter} />
          <ListItem contacts={getFilterContact()} onDelete={deleteContact} />
        </>
      ) : (
        <Title title={'Write contact'} />
      )}
    </>
  );
}

export default Phonebook;
