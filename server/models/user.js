import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	phoneNumber: String,
	sex: String,
	birthday: String,
	password: String,
	appointments: [{
		type: mongoose.Schema.ObjectId,
		ref: 'Appointment'
	}]
}, { timestamps: true })

export default mongoose.model('User', userSchema)
