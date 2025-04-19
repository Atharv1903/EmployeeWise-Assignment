import axios from 'axios';

const API_BASE = 'https://reqres.in/api';

export const login = (data) => axios.post(`${API_BASE}/login`, data);
export const getUsers = (page = 1) => axios.get(`${API_BASE}/users?page=${page}`);
export const getUserById = (id) => axios.get(`${API_BASE}/users/${id}`);
export const updateUser = (id, data) => axios.put(`${API_BASE}/users/${id}`, data);
export const deleteUser = (id) => axios.delete(`${API_BASE}/users/${id}`);
