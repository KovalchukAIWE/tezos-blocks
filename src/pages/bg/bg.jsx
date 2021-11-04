import React from "react";
import { LogoLight } from "../../components/Logo/Logo";

import styles from "./bg.module.scss";

const Background = () => (
  <div className={styles.background}>
    <div className={styles.logo}>
      <LogoLight />
    </div>
    <h1 className={styles.background__text}>
      Introducing: the next generation of online payments.
    </h1>
  </div>
);

export default Background;
