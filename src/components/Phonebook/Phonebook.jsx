import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';
import Form from 'components/Form/Form';
import css from '../Phonebook/Phonebook.module.css';
import Filter from 'components/Filter/Filter';
import ListItem from 'components/ListItem/ListItem';
import { Title } from 'components/Title/Title';
import { useState } from 'react';
function Phonebook() {
  const [contacts, setContacts] = useState(() =>
    JSON.parse(window.localStorage.getItem('contacts') ?? [])
  );
  const [filter, setFilter] = useState('');

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
    // this.setState(prev => ({
    //   contacts: prev.contacts.filter(contact => contact.id !== id),
    // }));
  };
  const addItem = (names, numbers) => {
    const normalizedFilter = names.toLowerCase();
    // console.log(contacts);
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
      // this.setState(({ contacts }) => ({
      //   contacts: [contact, ...contacts],
      // }));
    }
  };
  // const formSubmitChanging = (name, number) => {
  //   setContacts(addItem(name, number));
  //   // this.setState(this.addItem(name, number));
  // };
  const changeFilter = e => {
    setFilter(e.currentTarget.value);
    // this.setState({ filter: e.currentTarget.value });
  };
  const getFilterContact = () => {
    return contacts.filter(contact =>
      contact.names.toLowerCase().includes(filter.toLowerCase())
    );
  };
  // useEffect(() => {
  //   console.log('first');
  //   const local = localStorage.getItem('contacts');
  //   const localParse = JSON.parse(local);
  //   console.log(localParse);
  //   if (localParse) {
  //     setContacts(localParse);
  //   }
  // }, []);
  // componentDidMount() {
  //   const local = localStorage.getItem('contacts');
  //   const localParse = JSON.parse(local);
  //   if (localParse) {
  //     this.setState({ contacts: localParse });
  //   }
  // }
  useEffect(() => {
    console.log(contacts);
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

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
