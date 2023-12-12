import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

import appointmentRoutes from './routes/appointmentRoute.js'
import dentistRoutes from './routes/dentistRoute.js'
import userRoutes from './routes/userRoute.js'

const app = express()

dotenv.config()

app.use(cors())
app.use(express.json({ extended: true, limit: '30mb' }))
app.use(express.urlencoded({ extended: true, limit: '30mb' }))

app.use('/appointment', appointmentRoutes)
app.use('/dentist', dentistRoutes)
app.use('/user', userRoutes)

const PORT = process.env.PORT || 2217

mongoose.connect(process.env.DATABASE_URL)
	.then(() => app.listen(PORT, () => console.log(`Server is running in port: ${PORT}`)))
	.catch(e => console.log(`Error connecting to the database: ${e}`))
