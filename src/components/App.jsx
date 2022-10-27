import Phonebook from './Phonebook/Phonebook';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.elem_div}>
      <Phonebook />
    </div>
  );
};
