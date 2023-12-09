import React from 'react'

import Logo from './Logo'
import { Link } from 'react-router-dom'
import { bottomLinks } from '../constants'

export default function Bottom() {
	return (
		<div className="py-16 shadow shadow-black">
			<div className="w-[80%] mx-auto text-dark2 tracking-wide flex text-s max-[975px]:flex-col max-[975px]:w-[90%]">
				<div className="max-[975px]:mb-10">
					<Logo />
					<p className="mt-5 mb-5 w-[400px] text-base max-[480px]:text-[14px] max-[480px]:w-[90%]">Regular dental checkups help in detection of early warning signs of certain health related issues. Visit your dentists regularly and stay healthy.</p>
					<p>Trusted by <span className="font-bold">15,000</span> People</p>
				</div>
				<div className="ml-16 max-[975px]:ml-0">
					<p className="mb-3">Useful <span className='font-bold'>Links</span></p>
					{bottomLinks.map(link => (
						<div className="w-max text-base">
							<Link to={link.link}>
								<p className="pointer hover:underline py-2">• {link.text}</p>
							</Link>
						</div>
					))}
				</div>
				<div className="ml-16 max-[975px]:ml-0 max-[975px]:mt-10">
					<p className="mb-3">Contact <span className='font-bold'>Address</span></p>
					<p className="text-base">Robert Robertson, 1234 NW Bobcat Lane, St. Robert</p>
					<p className="mt-6 mb-3">Call <span className='font-bold'>Us</span></p>
					<p className="text-base">123-456-7899</p>
				</div>
			</div>
		</div>
	)
}