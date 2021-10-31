import React from 'react';

import data from '../../components/CustomerList/data';

import styles from './customer.module.scss';

import { LogoDark } from '../../components/Logo/Logo';
import CustomerList from '../../components/CustomerList';

const Customer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <div className={styles.image} />
      </div>
      <div className={styles.text}>
        <div className={styles.logo}>
          <LogoDark />
        </div>
        <h1 className={styles.text__title}>Target Customer</h1>
        <div className={styles.text__wrapper}>
          {data.card.map((el) => (
            <CustomerList {...el} />
          ))}
        </div>
        <h3 className={styles.text__subtitle}>
          In this city alone, there are 1M product managers.
        </h3>
      </div>
    </div>
  );
};

export default Customer;
