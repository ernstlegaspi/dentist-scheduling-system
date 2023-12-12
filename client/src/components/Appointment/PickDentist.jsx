import { useQuery } from '@tanstack/react-query'

import dentist from '../../img/dentist1.webp'
import dentist2 from '../../img/dentist2.webp'
import dentist3 from '../../img/dentist3.webp'
import SpecialistCard from '../SpecialistCard'

import useAppointmentPage from '../../hooks/useAppointmentPage'
import useDentistData from '../../hooks/useDentistData'

import { getDentists } from '../../api/api'

export default function PickDentist() {
	const { setPage } = useAppointmentPage()
	const { setId, setName} = useDentistData()
	
	const { data, isLoading } = useQuery({
		queryKey: ['Dentists'],
		queryFn: getDentists
	})

	const handleClick = (id, name) => {
		setId(id)
		setName(name)
		setPage(1)
	}

	return (
		<>
			<p className="my-12 text-center text-m text-dark2">Pick your <span className="text-main font-bold">Dentist</span></p>
			<div className="flex-center flex-wrap">
				{isLoading ? <p>Dentist Loading...</p> : data?.data.map((specialist, idx) => <SpecialistCard
					degree={specialist.degree}
					image={idx === 0 ? dentist : idx === 1 ? dentist2 : dentist3}
					key={idx}
					jobTitle={specialist.profession}
					name={specialist.name}
					onClick={() => handleClick(specialist._id, specialist.name)}
				/>)}
			</div>
		</>
	)
}