import React, { useEffect, useState } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../Button'
import Logo from '../Logo'

import placeholder from '../../img/placeholder.jpg'

const Navbar = () => {
	const isLoggedIn = JSON.parse(localStorage.getItem('token'))?.token
	const { pathname } = useLocation()
	const [isScrolled, setIsScrolled] = useState(false)
	const navigate = useNavigate()

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY >= 2)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	if(pathname === '/auth/sign-in' || pathname === '/schedule-appointment' || pathname === '/schedule-appointment/' || pathname === "/dashboard") return null

	return (
		<div className={`${isScrolled ? 'bg-black/60' : 'bg-transparent'} c-transition-all fixed z-50 w-full f-h-between items-center text-white p-6`}>
			<Logo />
			<div className="f-v-center mt-[15px]">
				<div className="mt-[-10px] f-v-center">
					{isLoggedIn ? <div onClick={() => navigate('/dashboard')} className="w-[40px] h-[40px] mr-3 pointer">
						<img style={{ borderRadius: '100%', width: '100%', height: '100%', objectFit: 'contain' }} src={placeholder} alt="Person Placeholder" />
					</div> : null}

					<div className="f-v-center max-[700px]:hidden">
						<Button href="/schedule-appointment/" text="Schedule Appointment" />
						{isLoggedIn ? null : <Button extraClass="ml-3" href="/auth/sign-in" text="Sign In" />}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
