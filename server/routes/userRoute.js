import express from 'express'

import { login, register, verifyEmail } from '../controllers/user.js'

const router = express.Router()

router.post('/', register)
router.post('/login/', login)
router.get('/verifyEmail/:email', verifyEmail)

export default router
