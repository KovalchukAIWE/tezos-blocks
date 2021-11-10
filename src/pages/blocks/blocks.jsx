import React, { useContext } from "react";
import Select from "react-select";
import { BlocksContext } from "../../contexts/BlocksProvider";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination/Pagination";
import { selectQuantityPages } from "../../helpers/selectQuantityPages";

import styles from "./blocks.module.scss";

const Blocks = () => {
  const { blocks, limit, offset, handleLimit, totalCount } =
    useContext(BlocksContext);

  const indexOfLastBlock = offset * limit;
  const indexOfFirstBlock = indexOfLastBlock - limit;
  const currentBlock = blocks.slice(indexOfFirstBlock, indexOfLastBlock);

  return (
    <>
      <div className={styles.blocks}>
        <h2 className={styles.blocks__page}>Total: {totalCount}</h2>
        <p className={styles.blocks__header}>Blocks list</p>
        <div className={styles.blocks__select}>
          <p className={styles.blocks__label}>Items per page</p>
          <Select
            defaultValue={selectQuantityPages[0]}
            options={selectQuantityPages}
            onChange={(e) => handleLimit(e.value)}
          />
        </div>
        <Table blocks={currentBlock} />
      </div>
      <div>
        <Pagination />
      </div>
    </>
  );
};

export default Blocks;
