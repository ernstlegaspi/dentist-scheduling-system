import express from 'express'

import { getDentists, newDentist } from '../controllers/dentist.js'

const router = express.Router()

router.get('/getDentists/', getDentists)

router.post('/', newDentist)

export default router
