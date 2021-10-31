import React from 'react';

import PropTypes from 'prop-types';

import styles from './Teammates.module.scss';

const Teammates = ({ img, name, role }) => {
  return (
    <div className={styles.teammates__card}>
      <img className={styles.teammates__photo} src={img} alt={`${name}`} />
      <div className={styles.teammates__description}>
        <div className={styles.teammates__name}>{name}</div>
        <div className={styles.teammates__role}>{role}</div>
      </div>
    </div>
  );
};

Teammates.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Teammates;
