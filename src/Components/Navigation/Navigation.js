import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function NavigationBar() {
  return (
    <header className={s.Header}>
      <ul className={s.NavList}>
        <li className={s.NavItem}>
          <NavLink
            className={s.NavLink}
            activeClassName={s.NavLinkActive}
            to="/"
            exact
          >
            Home
          </NavLink>
        </li>
        <li className={s.NavItem}>
          <NavLink
            className={s.NavLink}
            activeClassName={s.NavLinkActive}
            to="/movies"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
