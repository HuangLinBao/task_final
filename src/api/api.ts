import axios from 'axios';

const api = axios.create({
  baseURL: 'https://658950df324d41715258c1e1.mockapi.io/api/v0', // replace with your API base URL
});

export const fetchProducts = async () => {
    const response = await api.get('/getprods');
    return response.data;
};