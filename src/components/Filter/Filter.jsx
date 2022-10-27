import React from 'react';
const Filter = ({ value, onChange }) => {
  return (
    <label>
      Search contacts
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
export default Filter;
