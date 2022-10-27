import React from 'react';
const ListItem = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <span>{contact.names}</span> : <span>{contact.numbers}</span>
          <button className="{css.btn_item}">Delete</button>
        </li>
      ))}
    </ul>
  );
};
export default ListItem;
