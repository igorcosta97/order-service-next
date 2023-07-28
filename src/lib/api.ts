import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://orderservicedeploy-api.onrender.com/',
})
