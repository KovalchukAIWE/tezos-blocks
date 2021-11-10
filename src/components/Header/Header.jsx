/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import HeaderNav from "../HeaderNav";
import items from "./path";

import styles from "./Header.module.scss";

const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.burger} onClick={() => setActive(!active)}>
          <span className={styles.burger__btn} />
        </div>
      </nav>
      <HeaderNav items={items} active={active} setActive={setActive} />
    </>
  );
};

export default Header;
