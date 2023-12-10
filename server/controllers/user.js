import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import User from '../models/user.js'

import { clientError, serverError500, success } from '../utils/index.js'

export const login = async (req, res) => {
	serverError500(res, async () => {
		const { email, password } = req.body

		const user = await User.findOne({ email })

		if(!user) return clientError(res, 404, "Unauthorized: User does not exist")
		
		const comparePassword = await bcrypt.compare(password, user.password)

		if(!comparePassword) return clientError(res, 401, "Unauthorized: User does not exist")

		const token = jwt.sign({ id: user._id }, process.env.KEY, { expiresIn: '15m' })
		
		res.cookie("token", token, {
			httpOnly: true,
			sameSite: 'Strict'
		})

		success(res, 200, { result: user.email, message: 'User logged in successfully' })
	})
}

export const register = async (req, res) => {
	serverError500(res, async () => {
		const { email, password } = req.body

		const user = await User.findOne({ email })

		if(user) return clientError(res, 409, "Email is already used.")

		const salt = await bcrypt.genSalt(12)
		const hashedPassword = await bcrypt.hash(password, salt)

		const newUser = await new User({ ...req.body, password: hashedPassword }).save()

		delete newUser.password

		const token = jwt.sign({ id: newUser._id }, process.env.KEY, { expiresIn: '15m' })
		
		res.cookie("token", token, {
			httpOnly: true,
			sameSite: 'Strict'
		})

		success(res, 201, { result: newUser.email, message: "User Created" })
	})
}

export const verifyEmail = async (req, res) => {
	serverError500(res, async () => {
		const { email } = req.params

		const user = await User.findOne({ email })

		if(!user) return clientError(res, 404, 'User not found')

		success(res, 200, {})
	})
}
