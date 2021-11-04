import React from "react";

import styles from "./our-mission.module.scss";

import { LogoDark } from "../../components/Logo/Logo";

const OurMission = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageWrapper}>
      <div className={styles.image} />
    </div>
    <div className={styles.text}>
      <div className={styles.logo}>
        <LogoDark />
      </div>
      <h1 className={styles.text__title}>Our Mission</h1>
      <div>
        <h2 className={styles.text__subtitle}>Become the #1 Platform</h2>
        <h3 className={styles.text__description}>
          There is an opportunity to become the go-to platform for product
          managers.
        </h3>
      </div>
      <div>
        <h2 className={styles.text__subtitle}>Create a Great Community</h2>
        <h3 className={styles.text__description}>
          We want to help others by creating a community where people can get
          answers to questions.
        </h3>
      </div>
      <div>
        <h2 className={styles.text__subtitle}>Lead by Example</h2>
        <h3 className={styles.text__description}>
          Our goal is to become the industry leader by fostering great
          relationships.
        </h3>
      </div>
    </div>
  </div>
);

export default OurMission;
