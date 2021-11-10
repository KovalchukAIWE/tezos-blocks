/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderNav.module.scss";

const HeaderNav = ({ items, active, setActive }) => (
  <div
    className={active ? styles.menu__active : styles.menu}
    onClick={() => setActive(false)}
  >
    <div className={styles.menu__content} onClick={(e) => e.stopPropagation()}>
      <ul className={styles.menu__items}>
        {items.map((item) => (
          <Link to={item.to} className={styles.menu__item}>
            {item.value}
          </Link>
        ))}
      </ul>
    </div>
  </div>
);

export default HeaderNav;
