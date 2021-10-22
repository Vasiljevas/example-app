import axios from "axios";
const baseUrl = "/api/cards";

export const getAll = async () => {
  return await axios.get(baseUrl).data;
};

export const create = async (newObject) => {
  return await axios.post(baseUrl, newObject).data;
};

export const update = async (id, newObject) => {
  return await axios.put(`${baseUrl}/${id}`, newObject).data;
};
