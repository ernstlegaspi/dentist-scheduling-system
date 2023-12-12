import express from 'express'

import { getAppointmentsPerUser, login, register, updateUserInfo } from '../controllers/user.js'

const router = express.Router()

router.post('/', register)
router.post('/login/', login)

router.put('/updateUserInfo/', updateUserInfo)

router.get('/getAppointmentsPerUser/:userId', getAppointmentsPerUser)

export default router
