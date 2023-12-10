import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:3001/' })

// auth
export const login = data => API.post('user/login/', data)
export const register = data => API.post('user/', data)
export const verifyEmail = email => API.get(`user/verifyEmail/${email}`)

