import toast from 'react-hot-toast'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Input from "../Input"
import Button from '../Button'

import useUserLoggedIn from '../../hooks/useUserLoggedIn'

import { register } from '../../api/api'
import { days, months, sex, years } from '../../constants'
import { birthdaySchema, registerSchema } from '../../utils/schema'

export default function SignUp({ setIsSignIn }) {
	const navigate = useNavigate()
	const { setHasToken } = useUserLoggedIn()
	const initialState = { name: '', email: '', password: '', phoneNumber: '', sex: '' }
	const [birthday, setBirthday] = useState({ months:'', days: '', years: '' })
	const [formData, setFormData] = useState(initialState)
	const [disabled, setDisabled] = useState(false)

	const handleDateChange = e => {
		setBirthday({ ...birthday, [e.target.name]: e.target.value })
	}
	
	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async e => {
		e.preventDefault()

		const _formData = { ...formData, birthday: `${birthday.months} ${birthday.days}, ${birthday.years}` }

		const bdaySchema = birthdaySchema.safeParse(birthday)
		const { success } = registerSchema.safeParse(_formData)

		if(!bdaySchema.success || !success) {
			toast.error('All fields are required')

			return false
		}

		setDisabled(true)

		try {
			const { data } = await register(_formData)

			toast.success('Registered successfully.')

			localStorage.setItem('token', data.result)
			
			setDisabled(false)
			setBirthday({ days: '', months: '', years: '' })
			setFormData(initialState)
			setHasToken(true)

			navigate('/')
		}
		catch({ response }) {
			setDisabled(false)

			if(response.status === 409) {
				toast.error('Email is already used.')

				return
			}

			toast.error('Can not sign up. Try again later.')
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<Input extraClass={`${disabled ? 'bg-gray-300 w-full' : ''}`} disabled={disabled} name="name" onChange={e => handleChange(e)} placeholder="Name" value={formData.name} />
			<Input extraClass={`${disabled ? 'bg-gray-300 w-full' : ''}`} disabled={disabled} name="email" onChange={e => handleChange(e)} placeholder="Email" type="Email" value={formData.email} />
			<Input extraClass={`${disabled ? 'bg-gray-300 w-full' : ''}`} disabled={disabled} name="password" onChange={e => handleChange(e)} placeholder="Password" type="Password" value={formData.password} />

			<div className="flex items-center justify-between">
				<Input disabled={disabled} extraClass={`${ disabled ? 'bg-gray-300' : '' } w-[55%]`} name="phoneNumber" onChange={e => handleChange(e)} placeholder="Phone Number" value={formData.phoneNumber} />

				<select disabled={disabled} onChange={e => handleChange(e)} value={formData.sex} name="sex" className={`${disabled ? 'bg-gray-300' : ''} w-[40%] mt-[-12px] border rounded p-2 py-2 outline-blue-400`}>
					<option value=""></option>
					{sex.map((_sex, index) => <option key={index} value={_sex}>{_sex}</option>)}
				</select>
			</div>

			<div className="w-full">
				<select disabled={disabled} onChange={e => handleDateChange(e)} value={birthday.months} name="months" className={`${disabled ? 'bg-gray-300' : ''} w-[42.3%] border rounded p-2 py-2 outline-blue-400`}>
					<option value=""></option>
					{months.map((month, index) => <option key={index} value={month}>{month}</option>)}
				</select>

				<select disabled={disabled} onChange={e => handleDateChange(e)} value={birthday.days} name="days" className={`${disabled ? 'bg-gray-300' : ''} mx-3 w-[20%] border rounded p-2 py-2 outline-blue-400`}>
					<option value=""></option>
					{days.map((day, index) => <option key={index} value={day}>{day}</option>)}
				</select>

				<select disabled={disabled} onChange={e => handleDateChange(e)} value={birthday.years} name="years" className={`${disabled ? 'bg-gray-300' : ''} w-[30%] border rounded p-2 py-2 outline-blue-400`}>
					<option value=""></option>
					{years.map((year, index) => <option key={index} value={year}>{year}</option>)}
				</select>
			</div>

			<Button extraClass={`${disabled ? 'bg-gray-300 default' : ''} bg-dark2 w-full mt-7 text-white hover:bg-dark`} type="Submit" text={disabled ? 'Loading...' : "Sign Up"} />

			<p className="mt-2 text-dark2">Already have an account? <span onClick={() => setIsSignIn(true)} className="underline pointer">Sign In here</span></p>
		</form>
	)
}
