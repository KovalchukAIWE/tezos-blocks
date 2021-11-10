import axios from "axios";

const NETWORK = "mainnet";

const blocksInstance = axios.create({
  baseURL: "https://api.teztracker.com/v2/data/tezos",
});

export const getBlocks = async (offset = 0, limit = 10) =>
  blocksInstance
    .get(`/${NETWORK}/blocks?offset=${offset}&limit=${limit}`)
    .then((response) => ({
      blocks: response.data,
      totalCount: response.headers["x-total-count"],
    }));

// export const getDataFromApi = async (offset = 0, limit = 15) => {
//   const url = `${BASE_URL}/${NETWORK}/blocks?offset=${offset}&limit=${limit}`;
//   const res = await axios.get(url);
//   return {
//     blocks: res.data,
//     totalCount: res.headers["x-total-count"],
//   };
// };
