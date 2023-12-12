import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:3001/' })

API.interceptors.request.use(req => {
	if(localStorage.getItem('token')) req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('token')).token}`
	
	return req
})

// auth
export const login = data => API.post('user/login/', data)
export const register = data => API.post('user/', data)

// appointment
export const deleteAppointment = data => API.post(`appointment/deleteAppointment/`, data)
export const getAppointment = (appointmentDate, dentistId) => API.get(`appointment/getAppointment/${appointmentDate}/${dentistId}`)
export const newAppointment = data => API.post('appointment/', data)

// dentist
export const getDentists = () => API.get(`dentist/getDentists/`)

// user
export const getAppointmentsPerUser = userId => API.get(`user/getAppointmentsPerUser/${userId}`)
export const updateUserInfo = data => API.put(`user/updateUserInfo/`, data)
