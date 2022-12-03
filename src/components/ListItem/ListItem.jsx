import React from 'react';
import css from '../ListItem/ListItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { stateContacts } from 'redux/contactSlice';
import { stateFilter } from 'redux/filterSlice';
import { deleteContact } from 'redux/operations';
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
      {filterArrayContacts?.map(({ id, name, phone }) => (
        <li key={id} className={css.item}>
          <span>{name}</span> : <span>{phone}</span>
          <button
            className="{css.btn_item}"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ListItem;
