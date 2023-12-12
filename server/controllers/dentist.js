import Dentist from '../models/dentist.js'

import { serverError500, success } from '../utils/index.js'

export const getDentists = async (req, res) => {
	serverError500(res, async () => {
		const dentists = await Dentist.find({})

		success(res, 200, dentists)
	})
}

export const newDentist = async (req, res) => {
	serverError500(res, async () => {
		await new Dentist({ ...req.body }).save()
		
		success(res, 201, { message: 'Dentist created successfully' })
	})
}
