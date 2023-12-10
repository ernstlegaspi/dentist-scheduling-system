import toast from 'react-hot-toast'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from "../Button"
import Input from "../Input"
import useUserLoggedIn from "../../hooks/useUserLoggedIn"

import { login } from '../../api/api'
import { loginSchema } from '../../utils/schema'

export default function SignIn({ setIsSignIn }) {
	const [formData, setFormData] = useState({ email: '', password: '' })
	const [disabled, setDisabled] = useState()
	const navigate = useNavigate()
	const { setHasToken } = useUserLoggedIn()

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}
	
	const handleSubmit = async e => {
		e.preventDefault()

		const { success } = loginSchema.safeParse(formData)

		if(!success) {
			toast.error('All fields are required')
			
			return
		}

		setDisabled(true)
		
		try {
			const { data } = await login(formData)

			localStorage.setItem('token', data.result)
			
			setFormData({ email: '', password: '' })
			setDisabled(false)
			setHasToken(true)

			toast.success('Logged in successfully')
			navigate('/')
		}
		catch(e) {
			setDisabled(false)

			console.log(e)

			// if(response.status === 401 || response.status === 404) {
			// 	toast.error('Invalid email or password')

			// 	return
			// }

			toast.error('Can not sign in. Try again later.')
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<Input disabled={disabled} extraClass={`${disabled ? 'bg-gray-300 w-full' : ''}`} name="email" onChange={e => handleChange(e)} placeholder="Email" type="Email" value={formData.email} />
			<Input disabled={disabled} extraClass={`${disabled ? 'bg-gray-300 w-full' : ''}`} name="password" onChange={e => handleChange(e)} placeholder="Password" type="Password" value={formData.password} />
			<Button disabled={disabled} extraClass={`${disabled ? 'bg-gray-300' : 'bg-dark2'} w-full mt-7 text-white hover:bg-dark`} type="Submit" text="Sign In" />
			<p disabled={disabled} className="mt-2 text-dark2">Don't have an account? <span onClick={() => setIsSignIn(false)} className="underline pointer">Sign Up here</span></p>
		</form>
	)
}
