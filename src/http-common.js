import axios from 'axios';

const basePathUrl = process.env.API_BASE_URL + ':' + process.env.API_BASE_PORT

export const HTTP = axios.create({
  baseURL: basePathUrl,
  headers: {
    
  }
})