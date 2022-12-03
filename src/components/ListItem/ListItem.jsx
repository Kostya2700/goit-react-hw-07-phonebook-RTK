import React from 'react';
import css from '../ListItem/ListItem.module.css';
import { useSelector } from 'react-redux';
import { getStateFilter } from 'redux/selectors';
import {
  useDeleteContactsMutation,
  useGetContactsQuery,
} from 'redux/contactsRTK';
const ListItem = () => {
  const filterValue = useSelector(getStateFilter);
  const { data: arrContacts } = useGetContactsQuery();
  const [deleteContacts] = useDeleteContactsMutation();

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
              deleteContacts(id);
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
