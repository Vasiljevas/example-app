import axios from "axios";
const baseUrl = "http://localhost:3001/api/users";

export const getAllUsers = async () => {
	const response = await axios.get(baseUrl);
	return response.data;
};

export const getUserById = async (id) => {
	const response = await axios.get(`${baseUrl}/${id}`);
	return response.data;
};

export const createUser = async (newObject) => {
	return await axios.post(baseUrl, newObject).data;
};

export const updateUser = async (id, newObject) => {
	return await axios.put(`${baseUrl}/${id}`, newObject);
};

export const deleteUser = async (id) => {
	return await axios.delete(`${baseUrl}/${id}`);
};
