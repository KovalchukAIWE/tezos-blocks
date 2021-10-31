/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import BlockList from '../../components/BlockList';
// import Pagination from '../../components/Pagination';
// import { getDataFromApi } from '../../api';
import Table from '../../components/Table';

import styles from './blocks.module.scss';

const Blocks = () => {
  // eslint-disable-next-line no-unused-vars
  // const [blocks, setBlocks] = useState([]);

  // const [page, setPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);
  // const [pageSize, setPageSize] = useState(10);
  // const [offset, setOffset] = useState(10);

  // const pageSizes = [10, 20, 50];

  // const handlePageChange = (event, value) => {
  //   setPage(value);
  // };

  // const handlePageSizeChange = (event) => {
  //   setPageSize(event.target.value);
  //   setPage(1);
  // };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect(() => {
  //   const getData = async () => {
  //     const currentPage = offset / pageSize + 1;
  //     const newBlocks = await getDataFromApi(pageSize, offset);
  //     console.log(newBlocks, currentPage);
  //     setBlocks(newBlocks);
  //     setPage(currentPage);
  //   };
  //   getData();
  // }, [pageSize, offset]);

  // const lastItemIndex = page * offset;
  // const firstItemIndex = lastItemIndex - offset;
  // const currentItemIndex = blocks.slice(firstItemIndex, lastItemIndex);

  // const paginate = (pageNumber) => setTotalPages(pageNumber);
  // const nextPage = () => setTotalPages((prev) => prev + 1);
  // const prevPage = () => setTotalPages((prev) => prev - 1);

  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.page}>Page</h2>
        <p className={styles.block_header}>Blocks list</p>
        <div>
          <p>Items per page</p>
          {/* <select onChange={handlePageSizeChange} value={pageSize}>
            {pageSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select> */}
        </div>
        <Table />
        {/* <BlockList blocks={blocks} /> */}
      </div>
      <div>
        {/* <Pagination
          page={currentItemIndex}
          totalItems={blocks.length}
          paginate={paginate}
          // onChange={handlePageChange}
        /> */}
        <div className={styles.buttons}>
          <button className={styles.button} type="button">
            prev
          </button>
          <button className={styles.button} type="button">
            next
          </button>
        </div>
      </div>
    </>
  );
};

export default Blocks;
