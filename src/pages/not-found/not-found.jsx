import React from 'react';

import styles from './not-found.module.scss';

const NotFound = () => {
  return (
    <>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>Page Not Found</h2>
    </>
  );
};

export default NotFound;
