import React from 'react';
import PropTypes from 'prop-types';

import styles from './Pagination.module.scss';

const Pagination = ({ limit, totalCount, paginate, currentBlock, setCurrentPage}) => {
  const pageNumbers = [];

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);


  for (let i = 1; i <= Math.ceil(totalCount / limit); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.paginate}>
      <ul className={styles.paginate__pages}>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              className={styles.paginate__link}
              href={currentBlock}
              onClick={() => paginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.paginate__buttons}>
        <button className={styles.paginate__button} type="button" onClick={prevPage}>
          prev
        </button>
        <button className={styles.paginate__button} type="button" onClick={nextPage}>
          next
        </button>
      </div>
    </nav>
  );
};

Pagination.propTypes = {
  offset: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  page: PropTypes.func.isRequired,
};

export default Pagination;
