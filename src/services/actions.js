import axios from "axios";
const baseUrl = "http://localhost:3001/api/actions";

export const getAllActions = async () => {
	const response = await axios.get(baseUrl);
	return response.data;
};

export const getActionById = async (id) => {
	const response = await axios.get(`${baseUrl}/${id}`);
	return response.data;
};

export const createAction = async (newObject) => {
	return await axios.post(baseUrl, newObject).data;
};

export const updateAction = async (id, newObject) => {
	return await axios.put(`${baseUrl}/${id}`, newObject);
};

export const deleteAction = async (id) => {
	return await axios.delete(id);
};
