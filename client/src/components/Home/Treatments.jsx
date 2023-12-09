import React from 'react'

import { dentalTreatments } from '../../constants'

export default function Treatments() {
	const TreatmentCard = ({ alt, className, description, image, title }) => (
		<div className={`${className} relative text-center border border-zinc-200 py-10 w-[400px] px-5 max-sm:mt-[80px] max-[440px]:w-full`}>
			<div className="bg-main rounded-full p-2 w-max absolute left-[50%] translate-x-[-50%] top-0 mt-[-45px]">
				<div className="w-[70px] h-[70px]">
					<img src={image} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
				</div>
			</div>
			<p className="text-dark2 font-medium text-s my-[20px]">{title}</p>
			<p className="text-dark2">{description}</p>
		</div>
	)

	return (
		<div className="mt-[50px]">
			<p className="blue-label text-center max-sm:text-m">Dental Treatments</p>
			<div className="f-h-center w-[90%] mx-auto mt-[100px] max-sm:flex-col max-sm:items-center max-sm:mt-0">
				{dentalTreatments.map((treatment, idx) => idx < 3 ? <TreatmentCard
					key={idx}
					alt={treatment.alt}
					className={idx !== 2 ? 'mr-6 max-sm:mr-0' : ''}
					description={treatment.description}
					image={treatment.image}
					title={treatment.title}
				/> : null)}
			</div>
			<div className="f-h-center w-[90%] mx-auto mt-[100px] max-sm:flex-col max-sm:items-center max-sm:mt-0">
				{dentalTreatments.map((treatment, idx) => idx > 2 ? <TreatmentCard
					key={idx}
					alt={treatment.alt}
					className={idx !== 5 ? 'mr-6 max-sm:mr-0' : ''}
					description={treatment.description}
					image={treatment.image}
					title={treatment.title}
				/> : null)}
			</div>
		</div>
	)
}
