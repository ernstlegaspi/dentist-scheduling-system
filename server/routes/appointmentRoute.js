import express from 'express'

import { deleteAppointment, getAppointment, newAppointment } from '../controllers/appointments.js'

const router = express.Router()

router.post('/deleteAppointment/', deleteAppointment)

router.get('/getAppointment/:appointmentDate/:dentistId', getAppointment)

router.post('/', newAppointment)


export default router
