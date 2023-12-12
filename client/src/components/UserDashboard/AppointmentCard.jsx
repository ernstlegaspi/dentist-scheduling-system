import toast from 'react-hot-toast'
import { GrLocation } from "react-icons/gr"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import useDentistData from '../../hooks/useDentistData'
import useRescheduleData from '../../hooks/useRescheduleData'
import { deleteAppointment } from '../../api/api'

export default function AppointmentCard({ dentistName, date, id, time }) {
	const navigate = useNavigate()
	const { existingAppointmentTime, setAppointmentId, setExistingAppointmentTime, setIsUserRescheduling } = useRescheduleData()
	const { id: userId } = JSON.parse(localStorage.getItem('token'))
	const [isDeleted, setIsDeleted] = useState(false)

	const convertToComparable = timeRange => {
		// Extract the start time from the range
		const startTime = timeRange.split(" ")[0];
			
		// Convert the time to a 24-hour format for easy comparison
		const timeIn24HourFormat = new Date("2000-01-01 " + startTime).toLocaleTimeString('en-US', { hour12: false });

		// Convert the time to a numerical value for comparison
		return Date.parse("2000-01-01 " + timeIn24HourFormat);
	}

	const handleReschedule = () => {
		setAppointmentId(id)
		setIsUserRescheduling(true)
		navigate("/schedule-appointment/")
		setExistingAppointmentTime([ ...existingAppointmentTime, time ])
	}

	const handleDelete = async () => {
		setIsDeleted(true)

		try {
			await deleteAppointment({ id, userId })
		}
		catch(e) {
			toast.error('Can not delete appointment. Try again later.')
			setIsDeleted(false)
		}
	}
	
	time.sort((a, b) => convertToComparable(a) - convertToComparable(b));

	return (
		<div className={`${isDeleted ? 'hidden' : 'block'} bg-dark text-white rounded-md h-[250px] p-3 max-[1390px]:h-auto max-[800px]:w-[400px] max-[505px]:w-full`}>
			<div className="h-full flex flex-col justify-between">
				<div>
					<p><span className="text-s font-bold">Dentist:</span> {dentistName}</p>
					<p><span className="text-s font-bold mr-3">Date:</span> {date}</p>
					<div className="flex text-white">
						<p className="text-s font-bold">Time: </p>
						<div className="ml-3 mt-[5px]">
							{time?.map((t, idx) => <p key={idx}>{t}</p>)}
						</div>
					</div>
					<div className="flex mt-2">
						<GrLocation size={22} className="mt-[3px] mr-2" />
						<p>456 Oak Avenue, Suite 789, Cityville, State 12345, Countryland.</p>
					</div>
				</div>
				<div className="w-full flex justify-end max-[1390px]:justify-start">
					<div className="f-v-center max-[1390px]:grid max-[1390px]:w-full">
						<div onClick={handleReschedule} className="bg-white text-dark2 py-2 px-3 rounded pointer ml-3 hover:bg-gray-300 max-[1390px]:ml-0 max-[1390px]:my-3 max-[1390px]:w-full">
							<p className="font-medium">Reschedule</p>
						</div>
						<div onClick={handleDelete} className="bg-red-500 py-2 px-3 rounded pointer ml-3 hover:bg-red-800 max-[1390px]:w-full max-[1390px]:ml-0">
							<p className="font-medium">Cancel Appointment</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}