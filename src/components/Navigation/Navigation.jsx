import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  const navLinkStyles = ({ isActive }) => {
    return isActive ? s.active : s.link;
  };

  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={navLinkStyles} to="/">
            Home
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={navLinkStyles} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
