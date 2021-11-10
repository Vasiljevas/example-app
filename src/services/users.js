import axios from "axios";
const baseUrl = "http://localhost:3001/api/users";

export const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const create = async (newObject) => {
  return await axios.post(baseUrl, newObject).data;
};

export const update = async (id, newObject) => {
  return await axios.put(`${baseUrl}/${id}`, newObject).data;
};
