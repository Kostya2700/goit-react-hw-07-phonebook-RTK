import React from 'react';
import Form from 'components/Form/Form';
import css from '../Phonebook/Phonebook.module.css';
import Filter from 'components/Filter/Filter';
import ListItem from 'components/ListItem/ListItem';
import { Title } from 'components/Title/Title';
import { useGetContactsQuery } from 'redux/contactsRTK';

function Phonebook() {
  const { data, error, isLoading } = useGetContactsQuery();
  return (
    <>
      <div className={css.div_form}>
        <Title title={'Phonebook'} />

        <Form />
      </div>
      {data?.length ? (
        <>
          <Title title={'Contacts'} />
          <Filter />
          {isLoading && !error && <b>Request in progress...</b>}
          <ListItem />
        </>
      ) : (
        <Title title={'Write contact'} />
      )}
    </>
  );
}

export default Phonebook;
