import { useState } from 'react'
import Input from '../Input'
import toast from 'react-hot-toast'

import useEditUserInfo from '../../hooks/useEditUserInfo'
import { updateUserInfo } from '../../api/api'

export default function ChangeUserModal() {
	const user = JSON.parse(localStorage.getItem('token'))
	const [userInfo, setUserInfo] = useState({ birthday: user.birthday, email: user.email, name: user.name, phoneNumber: user.phoneNumber })
	const [disabled, setDisabled] = useState(false)
	const { setIsEdit } = useEditUserInfo()

	const labelClassName = "font-bold text-dark2"
	
	const handleChange = e => {
		setUserInfo({ ...userInfo, [e.target.name ]: e.target.value })
	}

	const handleSubmit = async () => {
		const dateRegex = /^(January|February|March|April|May|June|July|August|September|October|November|December)\s\d{1,2},\s\d{4}$/
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/

		if(!/^[A-Za-z ]+$/.test(userInfo.name)) {
			toast.error('Enter a valid Name.')
			return
		}
		
		if(!emailRegex.test(userInfo.email)) {
			toast.error('Enter a valid Email.')
			return
		}

		if(!dateRegex.test(userInfo.birthday)) {
			toast.error('Enter a valid Birthday')
			return
		}

		if(!/^09\d{9}$/.test(userInfo.phoneNumber)) {
			toast.error('Enter a valid Phone number')
			return
		}

		setDisabled(true)
		
		try {
			const { data } = await updateUserInfo({ ...userInfo, _id: user?.id })
			setDisabled(false)
			toast.success('User info updated successfully')
			console.log(data)
			setIsEdit(false)
			localStorage.setItem('token', JSON.stringify({
				token: user.token,
				id: user.id,
				birthday: data.results.birthday,
				name: data.results.name,
				email: data.results.email,
				phoneNumber: data.results.phoneNumber
			}))
		}
		catch(e) {
			toast.error('Can not change personal information. Try again later.')
			setDisabled(false)
		}
	}
	
	return (
		<div className="bg-black/50 inset-0 absolute z-50 flex-center">
			<div className="bg-white w-[400px] px-3 py-6">
				<p className={labelClassName}>Name:</p>
				<Input disabled={disabled} name="name" value={userInfo.name} onChange={e => handleChange(e)} />
				<p className={labelClassName}>Email:</p>
				<Input disabled={disabled} name="email" value={userInfo.email} onChange={e => handleChange(e)} />
				<p className={labelClassName}>Birthday:</p>
				<Input disabled={disabled} name="birthday" value={userInfo.birthday} onChange={e => handleChange(e)} />
				<p className={labelClassName}>Phone Number:</p>
				<Input disabled={disabled} name="phoneNumber" value={userInfo.phoneNumber} onChange={e => handleChange(e)} />
				<div className="flex w-full justify-between">
					<button disabled={disabled} onClick={handleSubmit}
						className={`${disabled ? 'bg-dark/80 default' : 'bg-dark hover:text-dark2 hover:bg-transparent'}
							w-[49%] rounded text-white py-2
							border border-dark2   transition-all
						`}
					>
						Submit
					</button>
					<button disabled={disabled} onClick={() => setIsEdit(false)}
						className={`${disabled ? 'default' : 'pointer'}
							w-[49%] rounded text-dark2 py-2 border border-dark2 hover:bg-dark hover:text-white transition-all
						`}>
							Cancel
					</button>
				</div>
			</div>
		</div>
	)
}
