import React, { useEffect, useState } from 'react'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import Logo from '../Logo'
import PickDentist from './PickDentist'
import PickDate from './PickDate'

import useAppointmentPage from '../../hooks/useAppointmentPage'

import { getDentists } from '../../api/api'

export default function Appointment() {
	const { page } = useAppointmentPage()
	const isLoggedIn = JSON.parse(localStorage.getItem('token'))?.token
	const qc = new QueryClient()
	const navigate = useNavigate()
	
	useEffect(() => {
		(async () => {
			await qc.prefetchQuery({
				queryKey: ['Dentists'],
				queryFn: getDentists
			})
		})()
	}, [])

	useEffect(() => {
		if(!isLoggedIn) navigate("/auth/sign-in/")
	}, [isLoggedIn])

	const CurrentPage = () => {
		switch(page) {
			case 0:
				return <PickDentist />
			case 1:
				return <PickDate />
		}
	}
	
	return (
		<div>
			<div className="bg-dark p-6 text-white">
				<Logo />
			</div>
			<HydrationBoundary state={dehydrate(qc)}>
				<CurrentPage />
			</HydrationBoundary>
		</div>
	)
}
