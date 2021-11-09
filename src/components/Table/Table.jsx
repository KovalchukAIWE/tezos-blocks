/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useContext, useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import { BlocksContext } from "../Provider/Provider";
import { COLUMNS } from "./columns";
import styles from "./Table.module.scss";

const Table = () => {
  const { blocks, offset, limit } = useContext(BlocksContext);

  const columns = useMemo(() => COLUMNS, []);
  const data = blocks;

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy,
    );

  return (
    <>
      <table {...getTableProps()} className={styles.table}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={styles.item}
                >
                  {column.render("Header")}
                  <span>{column.isSortedDesc ? " 🔽" : " 🔼"}</span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className={styles.table__cell}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
