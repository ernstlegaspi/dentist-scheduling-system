import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import useUserLoggedIn from '../../hooks/useUserLoggedIn'

export default function Appointment() {
	const { hasToken } = useUserLoggedIn()
	const navigate = useNavigate()

	useEffect(() => {
		if(!hasToken) navigate("/sign-in/")
	}, [hasToken])

	return (
		<></>
	)
}
