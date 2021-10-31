import React from 'react';

import styles from './cover-primary.module.scss';

import { LogoDark } from '../../components/Logo/Logo';
import CoverWeb from '../../components/Svg/CoverWeb';
import CoverCompany from '../../components/Svg/CoverCompany';
import CoverHandle from '../../components/Svg/CoverHandle';

const CoverPrimary = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <div className={styles.image} />
      </div>
      <div className={styles.text}>
        <div className={styles.logo}>
          <LogoDark />
        </div>
        <h1 className={styles.text__title}>Company Name</h1>
        <h2 className={styles.text__subtitle}>
          Intriguing summary goes here. Keep it short & sweet. Describe the
          problem you are solving. Focus on the pain point.
        </h2>
        <div className={styles.link}>
          <div className={styles.link__item}>
            <CoverWeb />
            <a
              className={styles.link__text}
              href="https://kovalchukaiwe.github.io/react-training/"
            >
              website.com
            </a>
          </div>
          <div className={styles.link__item}>
            <CoverCompany />
            <a
              className={styles.link__text}
              href="https://kovalchukaiwe.github.io/react-training/"
            >
              @companyhandle
            </a>
          </div>
          <div className={styles.link__item}>
            <CoverHandle />
            <a
              className={styles.link__text}
              href="https://kovalchukaiwe.github.io/react-training/"
            >
              @handle
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverPrimary;
