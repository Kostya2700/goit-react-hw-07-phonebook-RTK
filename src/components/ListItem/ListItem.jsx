import React from 'react';
import css from '../ListItem/ListItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts, stateContacts } from 'redux/contactSlice';
import { stateFilter } from 'redux/filterSlice';
const ListItem = () => {
  const arrContacts = useSelector(stateContacts);
  const filterValue = useSelector(stateFilter);
  const dispatch = useDispatch();

  const getFilterContact = () => {
    if (filterValue === '') return arrContacts;
    return arrContacts.filter(contact => {
      return contact.name.toLowerCase().includes(filterValue.toLowerCase());
    });
  };
  const filterArrayContacts = getFilterContact();
  return (
    <ul>
      {filterArrayContacts?.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <span>{name}</span> : <span>{number}</span>
          <button
            className="{css.btn_item}"
            onClick={() => dispatch(deleteContacts(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ListItem;
