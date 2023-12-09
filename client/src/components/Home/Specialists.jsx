import React, { useState } from 'react'

import dentist from '../../img/dentist1.webp'
import dentist2 from '../../img/dentist2.webp'
import dentist3 from '../../img/dentist3.webp'

import { AiFillInstagram } from "react-icons/ai"
import { FaFacebookF, FaTwitter } from "react-icons/fa"

export default function Specialists() {
	const SpecialistCard = ({ image, jobTitle }) => {
		const [hovered, setHovered] = useState(false)

		return <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
			className={`${hovered ? 'border-main' : 'border-transparent'} c-transition-all ml-5 py-5 pointer w-[330px] text-center flex-center flex-col border max-[699px]:ml-0`}>
			<div className="w-[300px] h-[300px] max-sm:w-[200px] max-sm:h-[200px]">
				<img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
			</div>
			<p className="text-dark2 text-[25px] font-medium mt-6 mb-2">
				Dr. John Doe
				<span className={`${hovered ? 'text-main' : 'text-gray-500'} c-transition-all font-normal text-s`}> M.D, pH.D</span>
			</p>
			<p className="text-gray-500 mb-3">{jobTitle}</p>
			<div className={`${hovered ? 'text-main' : 'text-gray-500'} c-transition-all flex-center`}>
				<FaFacebookF size={20} />
				<AiFillInstagram className="ml-2 mr-3" size={25} />
				<FaTwitter size={22} />
			</div>
		</div>
	}

	return (
		<div className="mb-16">
			<p className="blue-label text-center my-16 max-sm:text-m">Dental Specialists</p>
			<div className="flex-center flex-wrap">
				<SpecialistCard image={dentist} jobTitle="Cosmetic Surgery" />
				<SpecialistCard image={dentist2} jobTitle="Maxillofacial Surgery" />
				<SpecialistCard image={dentist3} jobTitle="Orthodontist" />
			</div>
		</div>
	)
}
