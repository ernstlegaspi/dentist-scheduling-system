import React, { lazy, Suspense } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Bottom from './components/Bottom'
import Navbar from './components/Navbar/Navbar'

const Home = lazy(() => import('./components/Home/Home'))

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Suspense fallback={<p>Loading...</p>}>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
					<Bottom />
				</Suspense>
			</BrowserRouter>
		</div>
	)
}

export default App
