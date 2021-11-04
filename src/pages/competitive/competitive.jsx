/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import data from "../../components/Company/data";

import styles from "./competitive.module.scss";

import { LogoDark } from "../../components/Logo/Logo";
import Company from "../../components/Company";

const Competitive = () => (
  <div className={styles.wrapper}>
    <div className={styles.logo}>
      <LogoDark />
    </div>
    <div className={styles.image}>
      <div className={styles.text}>
        <h1 className={styles.text__title}>The Competition</h1>
        <div className={styles.list}>
          {data.card.map((el) => (
            <Company {...el} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Competitive;
