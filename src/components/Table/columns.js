import { MUTES_TO_XTZ } from "../../helpers/constants";

const dayjs = require("dayjs");

export const COLUMNS = [
  {
    Header: "Block ID",
    accessor: "level",
    Cell: ({ value }) => value.toLocaleString(),
  },
  {
    Header: "Baker",
    accessor: "bakerName",
    Cell: ({ value }) => (value == null ? "- - -" : value),
  },
  {
    Header: "Timestamp",
    accessor: "timestamp",
    Cell: ({ value }) => dayjs.unix(value).format("YYYY.MM.DD HH:mm:ss"),
  },
  {
    Header: "# of operations",
    accessor: "number_of_operations",
  },
  {
    Header: "Volume",
    accessor: "volume",
    Cell: ({ value }) => MUTES_TO_XTZ(value.toFixed(6)),
  },
  {
    Header: "Fee",
    accessor: "fees",
    Cell: ({ value }) => MUTES_TO_XTZ(value.toFixed(6)),
  },
  {
    Header: "Endorsements",
    accessor: "endorsements",
  },
];
