import React from 'react';
import PropTypes from 'prop-types';
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
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
