import React from "react";

import styles from "./marketing.module.scss";

import { LogoDark } from "../../components/Logo/Logo";
import MarketingStar from "../../components/Svg/MarketingStar";

const Marketing = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageWrapper}>
      <div className={styles.image}>
        <div className={styles.text}>
          <div className={styles.logo}>
            <LogoDark />
          </div>
          <h1 className={styles.text__title}>Marketing strategy</h1>
          <div className={styles.links}>
            <div className={styles.links__item}>
              <MarketingStar />
              <div className={styles.links__text}>
                <h2 className={styles.links__title}>Advertising</h2>
                <h3 className={styles.links__subtitle}>Reach COOs quickly</h3>
              </div>
            </div>
            <div className={styles.links__item}>
              <MarketingStar />
              <div className={styles.links__text}>
                <h2 className={styles.links__title}>Organic search</h2>
                <h3 className={styles.links__subtitle}>
                  With a focus on long-tail keywords
                </h3>
              </div>
            </div>
            <div className={styles.links__item}>
              <MarketingStar />
              <div className={styles.links__text}>
                <h2 className={styles.links__title}>Content marketing</h2>
                <h3 className={styles.links__subtitle}>
                  Providing useful, niche content
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Marketing;
