import React from 'react';
import PropTypes from 'prop-types';

import styles from './Pagination.module.scss';

const Pagination = ({ offset, totalItems, page, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / offset); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.wrapper}>
      <ul className={styles.pages}>
        {pageNumbers.map((number) => (
          <li key={number} className={styles.active}>
            <a
              className={styles.link}
              href={page}
              onClick={() => paginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  offset: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  page: PropTypes.func.isRequired,
};

export default Pagination;
