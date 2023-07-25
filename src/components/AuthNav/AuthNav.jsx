import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.nav_link} to="/register">
        Реєстрація
      </NavLink>
      <NavLink className={css.nav_link} to="/login">
        Вхід
      </NavLink>
    </div>
  );
};
