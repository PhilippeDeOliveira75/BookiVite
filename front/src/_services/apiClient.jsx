import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

const ApiClient = axios.create({

  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  
})

export default ApiClient