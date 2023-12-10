import mongoose from 'mongoose'

const appointmentSchema = new mongoose.Schema({
	dentist: {
		type: mongoose.Schema.ObjectId,
		ref: 'dentist'
	},
	user: {
		type: mongoose.Schema.ObjectId,
		ref: 'user'
	}
}, { timestamps: true })

export default mongoose.model('Appointment', appointmentSchema)
