import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

const ApiCaller = {
  getAllLodgings: async () => {
    try {
      const response = await apiClient.get('/lodgings');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching lodgings:', error);
      throw error;
    }
  },

  getLodgingById: async (id) => {
    try {
      const response = await apiClient.get(`/lodgings/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching lodging with id ${id}:`, error);
      throw error;
    }
  },

  deleteLodgingById: async (id) => {
    try {
      const response = await apiClient.delete(`/lodgings/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting lodging with id ${id}:`, error);
      throw error;
    }
  },

  login: async (userData) => {
    try {
      const response = await apiClient.post('/auth/login', userData);
      return response.data;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  },
};

export default ApiCaller;
