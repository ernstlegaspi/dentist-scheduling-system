import mongoose from 'mongoose'

const appointmentSchema = new mongoose.Schema({
	dentistId: {
		type: mongoose.Schema.ObjectId,
		ref: 'dentist'
	},
	userId: {
		type: mongoose.Schema.ObjectId,
		ref: 'user'
	},
	appointmentDate: String,
	appointmentTime: [String],
	dentistName: String,
	userName: String
}, { timestamps: true })

export default mongoose.model('Appointment', appointmentSchema)
