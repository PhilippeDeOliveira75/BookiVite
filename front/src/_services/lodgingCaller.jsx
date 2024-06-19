import apiClient from "./apiClient.jsx";

const LodgingCaller = {

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
  
    updateLodgingById: async (id, lodgingData) => {
  
      try {
  
        const response = await apiClient.patch(`/lodgings/${id}`, lodgingData)
        return response.data
  
      } 
      
      catch (error) {
  
        console.error(`Error updating lodging with id ${id}:`, error)
        throw error
  
      }
    },
  
    addLodging: async (lodgingData) => {
      try {
        const response = await apiClient.put('/lodgings', lodgingData);
        return response.data;
      } catch (error) {
        console.error('Error adding lodging:', error);
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
  
  export default LodgingCaller;
  