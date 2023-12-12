import Appointment from "../models/appointment.js"
import User from "../models/user.js"

import { serverError500, success } from '../utils/index.js'

export const newAppointment = async (req, res) => {
	serverError500(res, async () => {
		const { appointmentDate, appointmentTime, dentistName, userId } = req.body

		let appointments = null

		const hasExistingAppointment = await Appointment.findOne({ appointmentDate, dentistName })

		if(hasExistingAppointment) {
			appointments = await Appointment.findByIdAndUpdate(hasExistingAppointment._id,
				{ $push: { appointmentTime } },
				{ new: true }
			)
		}
		else {
			appointments = await new Appointment({ ...req.body }).save()
		}

		const userAppointments = await User.findById({ _id: userId })

		const existingAppointments = userAppointments.appointments.map(appointment => appointment.toString() === appointments._id.toString())

		if(!existingAppointments[0]) {
			await User.findByIdAndUpdate(userId,
				{ $push: { appointments: appointments._id } },
				{ new: true }
			)
		}

		console.log(appointments._id)

		success(res, 200, { appointments, message: 'Appointments Saved!' })
	})
}

export const getAppointment = async (req, res) => {
	serverError500(res, async () => {
		const { appointmentDate, dentistId } = req.params

		const appointments = await Appointment.findOne({ dentistId, appointmentDate })

		success(res, 200, { appointments, message: 'Appointments Retrieved' })
	})
}

export const deleteAppointment = async (req, res) => {
	serverError500(res, async () => {
		const { id, userId } = req.body
		console.log(id)

		await Appointment.findByIdAndDelete({ _id: id })
		await User.findByIdAndUpdate({ _id: userId },
			{ $pull: { appointments: id } },
			{ new: true }
		)

		success(res, 200, { message: 'Appointment deleted successfully.' })
	})
}

