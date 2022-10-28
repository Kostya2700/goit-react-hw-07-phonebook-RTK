import React from 'react';
import css from '../Filter/Filter.module.css';
const Filter = ({ value, onChange }) => {
  return (
    <label className={css.search__label}>
      Search contacts
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
export default Filter;
