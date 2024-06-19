import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

const apiClient = axios.create({

  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  
})

const ActivityCaller = {

  getAllActivities: async () => {

    try {

      const response = await apiClient.get('/activities')
      return response.data.data

    } catch (error) {

      console.error('Error fetching activities:', error)
      throw error

    }
    
  },

}

export default ActivityCaller