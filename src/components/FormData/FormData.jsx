import React from 'react';
import css from './FormData.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

export function FormData() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addContact({ name: form.name.value, phone: form.phone.value }));
    form.reset();
  };

  return (
    <>
      <h2 className={css.phonebook__title}>PHONEBOOK</h2>
      <div className={css.main__form}>
        <form onSubmit={handleSubmit}>
          <div className={css.input__form}>
            <label className={css.form__label}>Name</label>
            <input
              className={css.input__change}
              type="text"
              name="name"
              required
              placeholder="Name"
            />
          </div>
          <div className={css.input__form}>
            <label className={css.form__label}>Number</label>
            <input
              className={css.input__change}
              type="tel"
              name="phone"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="Number"
            />
          </div>
          <div className={css.form__button}>
            <button className={css.submit__button} type="submit">
              Add contact
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
