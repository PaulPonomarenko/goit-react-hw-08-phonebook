import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
      <h2>Please register</h2>
      <label>
        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="Username"
          required
        />
      </label>
      <label>
        <input
          className={css.input}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
      </label>
      <label>
        <input
          className={css.input}
          type="password"
          name="password"
          placeholder="Password"
        />
      </label>
      <button type="submit" className={css.button__register}>
        Register
      </button>
    </form>
  );
};
