import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <h2 className={css.login}>LogIn</h2>
      <label className={css.label}>
        <input
          className={css.input}
          type="email"
          name="email"
          placeholder="Email"
        />
      </label>
      <label className={css.label}>
        <input
          className={css.input}
          type="password"
          name="password"
          placeholder="Password"
        />
      </label>
      <button type="submit" className={css.button__login}>
        LogIn
      </button>
    </form>
  );
};
