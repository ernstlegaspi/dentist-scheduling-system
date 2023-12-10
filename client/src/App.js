import React, { lazy, Suspense, useEffect } from 'react'

import toast from 'react-hot-toast'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Bottom from './components/Bottom'
import Navbar from './components/Navbar/Navbar'

import useUserLoggedIn from './hooks/useUserLoggedIn'

import { verifyEmail } from './api/api'

const ErrorPage = lazy(() => import('./components/ErrorPage'))
const Appointment = lazy(() => import('./components/Appointment/Appointment'))
const Auth = lazy(() => import('./components/Auth/Auth'))
const Home = lazy(() => import('./components/Home/Home'))

const App = () => {
	const { setHasToken } = useUserLoggedIn()
	const user = localStorage.getItem('token')

	useEffect(() => {
		if(!user) {
			setHasToken(false)

			return
		}

		(async () => {
			try {
				const { status } = await verifyEmail(user)
				setHasToken(status === 200)
			}
			catch(e) {
				toast.error('Not a valid user')
				localStorage.setItem('token', '')
				setHasToken(false)
			}
		})()
	}, [setHasToken, user])

	return (
		<div>
			<Toaster />
			<BrowserRouter>
				<Suspense fallback={<p>Loading...</p>}>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/schedule-appointment/" element={<Appointment />} />
						<Route path="/auth/sign-in/" element={<Auth />} />
						<Route path="*" element={<ErrorPage />} />
					</Routes>
					<Bottom />
				</Suspense>
			</BrowserRouter>
		</div>
	)
}

export default App
