import React, { lazy, Suspense, useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import Button from '../Button'
import Logo from '../Logo'

const Menu = lazy(() => import('./Menu'))

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY >= 2)
			console.log(window.scrollY >= 2)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const NavbarButton = ({ href, text }) => {
		const [hovered, setHovered] = useState(false)
	
		return <Link to={href}>
			<div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="relative pointer pb-3 px-[10px]">
				<div className="relative">
					<p className="text-s tracking-widest">{text}</p>
					<div className={`${hovered ? 'w-full' : 'w-0'} transition-all absolute bg-black h-[2px] mt-3`}></div>
				</div>
			</div>
		</Link>
	}

	return (
		<div className={`${isScrolled ? 'bg-black/60' : 'bg-transparent'} c-transition-all fixed z-50 w-full f-h-between items-center text-white p-6`}>
			<Logo />
			<Suspense fallback={<p>Loading...</p>}>
				<Menu />
			</Suspense>
			<div className="f-v-center mt-[15px] menu">
				<NavbarButton href="/about/" text="About" />
				<NavbarButton href="/services/" text="Services" />
				<NavbarButton href="/problems-we-treat/" text="Problems We Treat" />
				<div className="mt-[-10px]">
					<Button href="/schedule-appointment" text="Schedule Appointment" />
				</div>
			</div>
		</div>
	)
}

export default Navbar
