import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.nav_link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.nav_link} to="/login">
        LogIn
      </NavLink>
    </div>
  );
};
