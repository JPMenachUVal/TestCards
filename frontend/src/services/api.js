import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const getCards = () => axios.get(`${API_URL}/cards/`);
export const createCard = (data) => axios.post(`${API_URL}/cards/`, data);
export const updateCard = (id, data) => axios.put(`${API_URL}/cards/${id}/`, data);
export const deleteCard = (id) => axios.delete(`${API_URL}/cards/${id}/`);