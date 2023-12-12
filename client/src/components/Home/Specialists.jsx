import React from 'react'

import dentist from '../../img/dentist1.webp'
import dentist2 from '../../img/dentist2.webp'
import dentist3 from '../../img/dentist3.webp'

import SpecialistCard from '../SpecialistCard'

export default function Specialists({ showTitle = true }) {
	return (
		<div className="mb-16">
			{showTitle ? <p className="blue-label text-center my-16 max-sm:text-m">Dental Specialists</p> : null}
			<div className="flex-center flex-wrap">
				<SpecialistCard id="" degree="pH. D" image={dentist} jobTitle="Cosmetic Surgery" name="Dr. Doe" />
				<SpecialistCard id="" degree="pH. D" image={dentist2} jobTitle="Maxillofacial Surgery" name="Dr. Dough" />
				<SpecialistCard id="" degree="pH. D" image={dentist3} jobTitle="Orthodontist" name="Dr. Though" />
			</div>
		</div>
	)
}
