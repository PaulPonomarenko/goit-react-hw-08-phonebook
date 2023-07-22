import React from 'react';
import css from './FormData.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { useState } from 'react';

export function FormData() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
    event.target.reset();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
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
              onChange={handleChange}
              type="text"
              name="name"
              required
              placeholder="Name"
              defaultValue={name}
            />
          </div>
          <div className={css.input__form}>
            <label className={css.form__label}>Number</label>
            <input
              className={css.input__change}
              onChange={handleChange}
              type="tel"
              name="phone"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="Number"
              defaultValue={phone}
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
