import mongoose from 'mongoose'

const dentistSchema = new mongoose.Schema({
	name: String,
	degree: String,
	profession: String
}, { timestamps: true })

export default mongoose.model('Dentist', dentistSchema)
