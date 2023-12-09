import React from 'react'

import Button from '../Button'

export default function Hero() {
	return <div className='h-[100vh] relative home-bg'>
		<div className="bg-black/50 inset-0 absolute z-0"></div>
		<div className="relative z-10 top-[50%] translate-y-[-50%] text-white text-m font-medium w-[85%] mx-auto">
			<p className="max-sm:text-s">Welcome to</p>
			<p className="font-bold text-b max-sm:text-n max-[480px]:text-[23px]">Your Trusted Liberty Dentist</p>
			<p className="max-sm:text-s">Modern Dentistry with a Personal Touch</p>
			<div className="w-[50px] h-[2px] mt-5 mb-8 bg-white"></div>
			<Button extraClass="max-[350px]:w-[250px] max-[350px]:text-base" href="/schedule-appointment" text="Schedule Appointment" />
		</div>
	</div>
}
