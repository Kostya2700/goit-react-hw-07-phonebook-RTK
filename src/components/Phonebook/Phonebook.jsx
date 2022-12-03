import React, { useEffect } from 'react';
import Form from 'components/Form/Form';
import css from '../Phonebook/Phonebook.module.css';
import Filter from 'components/Filter/Filter';
import ListItem from 'components/ListItem/ListItem';
import { Title } from 'components/Title/Title';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading, getStateContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

function Phonebook() {
  const arrContacts = useSelector(getStateContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
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
