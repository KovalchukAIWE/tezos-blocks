import React from 'react';
import PropTypes from 'prop-types';

import styles from './Company.module.scss';

const Company = ({ title, subtitle }) => {
  return (
    <div className={styles.list__item}>
      <div className={styles.list__text}>
        <h2 className={styles.list__title}>{title}</h2>
        <h3 className={styles.list__subtitle}>{subtitle}</h3>
      </div>
    </div>
  );
};

Company.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Company;
