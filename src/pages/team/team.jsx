/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import styles from "./team.module.scss";

import data from "../../components/Teammates/data";

import { LogoDark } from "../../components/Logo/Logo";
import Teammates from "../../components/Teammates";

const Team = () => (
  <div className={styles.wrapper}>
    <div className={styles.logo}>
      <LogoDark />
    </div>
    <div className={styles.text}>
      <h1 className={styles.text__title}>Meet the Team</h1>
      <h2 className={styles.text__description}>
        A description about your team goes here. Talk about your values,
        mission, and anything else you think would be helpful or relevant for
        investors to know. A description about your team goes here.
      </h2>
    </div>
    <div className={styles.teammates}>
      {data.team.map((el) => (
        <Teammates {...el} />
      ))}
    </div>
  </div>
);

export default Team;
