import React from 'react';
import css from '../ListItem/ListItem.module.css';
import PropTypes from 'prop-types';
const ListItem = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, names, numbers }) => (
        <li key={id} className={css.item}>
          <span>{names}</span> : <span>{numbers}</span>
          <button className="{css.btn_item}" onClick={() => onDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ListItem;
ListItem.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
