import React from 'react';
import Form from 'components/Form/Form';
import css from '../Phonebook/Phonebook.module.css';
import Filter from 'components/Filter/Filter';
import ListItem from 'components/ListItem/ListItem';
import { Title } from 'components/Title/Title';
import { useSelector } from 'react-redux';

// const KEYLOCAL = 'contacts';
function Phonebook() {
  const arrContacts = useSelector(state => state.contacts.array);

  // const getFilterContact = () => {
  //   return contacts.filter(contact =>
  //     contact.names.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };
  return (
    <>
      <div className={css.div_form}>
        <Title title={'Phonebook'} />

        <Form />
      </div>
      {arrContacts.length ? (
        <>
          <Title title={'Contacts'} />
          <Filter />
          <ListItem />
        </>
      ) : (
        <Title title={'Write contact'} />
      )}
    </>
  );
}

export default Phonebook;
