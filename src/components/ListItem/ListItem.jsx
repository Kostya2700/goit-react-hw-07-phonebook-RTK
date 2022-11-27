import React from 'react';
import css from '../ListItem/ListItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contactSlice';
import { filter } from 'redux/filterSlice';
console.log('filter', filter().payload);
const ListItem = () => {
  const arrContacts = useSelector(state => state.contacts.array);
  const filterValue = useSelector(state => state.filter.value);
  const dispatch = useDispatch();

  const getFilterContact = () => {
    return arrContacts.filter(contact => {
      return contact.name.toLowerCase().includes(filterValue.toLowerCase());
    });
  };
  const filterArrayContacts = getFilterContact();
  return (
    <ul>
      {filterArrayContacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <span>{name}</span> : <span>{number}</span>
          <button
            className="{css.btn_item}"
            onClick={() => dispatch(deleteContacts())}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ListItem;
