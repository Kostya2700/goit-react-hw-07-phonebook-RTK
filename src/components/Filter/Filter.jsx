import { useDispatch } from 'react-redux';
import { filter } from 'redux/filterSlice';
import css from '../Filter/Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const changeFilter = e => {
    const value = e.currentTarget.value;
    dispatch(filter(value));
  };
  return (
    <label className={css.search__label}>
      Search contacts
      <input
        type="text"
        onChange={e => {
          changeFilter(e);
        }}
      />
    </label>
  );
};
export default Filter;
