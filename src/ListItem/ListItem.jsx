import React from 'react';
const ListItem = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, names, numbers }) => (
        <li key={id}>
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
