import { useState } from 'react'

import { AiFillInstagram } from "react-icons/ai"
import { FaFacebookF, FaTwitter } from "react-icons/fa"

export default function SpecialistCard({ degree, id, image, jobTitle, name, onClick }) {
	const [hovered, setHovered] = useState(false)

	return (
		<div onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
			className={`${hovered ? 'border-main' : 'border-transparent'} c-transition-all ml-5 py-5 pointer w-[330px] text-center flex-center flex-col border max-[699px]:ml-0`}>
			<div className="w-[300px] h-[300px] max-sm:w-[200px] max-sm:h-[200px]">
				<img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
			</div>
			<p className="text-dark2 text-[25px] font-medium mt-6 mb-2">
				{name}
				<span className={`${hovered ? 'text-main' : 'text-gray-500'} c-transition-all font-normal text-s`}> {degree}</span>
			</p>
			<p className="text-gray-500 mb-3">{jobTitle}</p>
			<div className={`${hovered ? 'text-main' : 'text-gray-500'} c-transition-all flex-center`}>
				<FaFacebookF size={20} />
				<AiFillInstagram className="ml-2 mr-3" size={25} />
				<FaTwitter size={22} />
			</div>
		</div>
	)
}
