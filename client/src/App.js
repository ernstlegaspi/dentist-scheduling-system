import React, { lazy, Suspense } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Bottom from './components/Bottom'
import Navbar from './components/Navbar/Navbar'

const ErrorPage = lazy(() => import('./components/ErrorPage'))
const Appointment = lazy(() => import('./components/Appointment/Appointment'))
const Auth = lazy(() => import('./components/Auth/Auth'))
const Dashboard = lazy(() => import('./components/UserDashboard/Dashboard'))
const Home = lazy(() => import('./components/Home/Home'))

const App = () => {
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
						<Route path="/dashboard/" element={<Dashboard />} />
						<Route path="*" element={<ErrorPage />} />
					</Routes>
					<Bottom />
				</Suspense>
			</BrowserRouter>
		</div>
	)
}

export default App
