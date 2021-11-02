import React, { useContext }  from 'react';
import { BlocksContext } from '../../components/Provider/Provider';
import Table from '../../components/Table';
import Pagination from '../../components/Pagination/Pagination';

import styles from './blocks.module.scss';

const Blocks = () => {
  const { blocks, limit, currentPage, setCurrentPage, setLimit, setTotalCount} = useContext(BlocksContext);

  const indexOfLastBlock = currentPage * limit;
  const indexOfFirstBlock = indexOfLastBlock - limit;
  const currentBlock = blocks.slice(indexOfFirstBlock, indexOfLastBlock);

  const paginate = (pageNumber) => setTotalCount(pageNumber);

  const selectQuantity = [10, 25, 50];
  const handlePageSizeChange = (e) => {
    setLimit(e.target.value);
  }
  
  return (
    <>
      <div className={styles.blocks}>
        <h2 className={styles.blocks__page}>Page {currentPage}</h2>
        <p className={styles.blocks__header}>Blocks list</p>
        <div className={styles.blocks__select}>
          <p>Items per page</p>
          <select onChange={handlePageSizeChange} value={limit} className={styles.blocks__quantity}>
            {selectQuantity.map((limit) => (
              <option key={limit} value={limit}>
                {limit}
              </option>
            ))}
          </select>
        </div>
        <Table blocks={currentBlock}/>
      </div>
      <div>
        <Pagination
          limit={limit}
          totalCount={setTotalCount.length}
          paginate={paginate}
          setCurrentPage={setCurrentPage}
          currentBlock={currentPage}
        />
      </div>
    </>
  );
};

export default Blocks;
