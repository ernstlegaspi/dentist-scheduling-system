import { useState } from 'react'

import Calendar from 'react-calendar'
import toast from 'react-hot-toast'
import { format } from 'date-fns'
import { IoArrowBack } from "react-icons/io5"
import { useNavigate } from 'react-router-dom'

import useAppointmentPage from '../../hooks/useAppointmentPage'
import useDentistData from '../../hooks/useDentistData'
import useRescheduleData from '../../hooks/useRescheduleData'
import { deleteAppointment, getAppointment, newAppointment } from '../../api/api'
import { appointmentTimes } from '../../constants'

import 'react-calendar/dist/Calendar.css'

export default function PickDate() {
	const { name: userName, id: userId } = JSON.parse(localStorage.getItem('token'))
	const [currentDate, setCurrentDate] = useState("")
	const [date, setDate] = useState(new Date())
	const [dateClicked, setDateClicked] = useState(false)
	const [loading, setIsLoading] = useState(false)
	const [selectedTime, setSelectedTime] = useState('')
	const { setPage } = useAppointmentPage()
	const { id, name } = useDentistData()
	const {
		appointmentId,
		existingAppointmentTime,
		isUserRescheduling,
		setAppointmentId,
		setExistingAppointmentTime,
		setIsUserRescheduling
	} = useRescheduleData()
	const navigate = useNavigate()

	const AppointmentTimeCard = ({ appointmentTime, isSelected, onClick }) => <div onClick={onClick} className={`
			${isSelected ? 'bg-hover border-2 border-dark' : 'bg-main'}
			border border-main rounded-sm py-2 text-center
			text-white mb-3 pointer hover:bg-hover transition-all
		`}>
		{appointmentTime}
	</div>

	const handleBookAppointment = async () => {
		setIsLoading(true)

		try {
			await newAppointment({
				appointmentDate: currentDate,
				appointmentTime: selectedTime,
				dentistId: id,
				dentistName: name,
				userId,
				userName
			})

			console.log({ dentistId: id, appointmentId })

			setIsLoading(false)
			toast.success(isUserRescheduling ? 'Appointment rescheduled successfully.' : 'Appointment booked successfully.')
			setExistingAppointmentTime([...existingAppointmentTime, selectedTime])

			if(isUserRescheduling) {
				await deleteAppointment({ id: appointmentId, userId })

				setIsUserRescheduling(false)
				setAppointmentId('')
			}

			setPage(0)
			navigate("/dashboard")
		}
		catch(e) {
			toast.error('Can not book appointment. Try again later.')
			setIsLoading(false)
		}
	}
	
	return (
		<>
			<div className="max-[350px]:block hidden absolute top-[50%] translate-y-[-50%] text-center font-bold text-m w-[90%] mx-auto">
				<p className="break-words">Device to small to book an appointment.</p>
			</div>
			<div className="max-[350px]:hidden">
				<div className="flex-center mt-[50px]">
					<div onClick={() => setPage(0)} className="rounded-full p-2 pointer hover:bg-gray-200/70 transition-all">
						<IoArrowBack size={20} />
					</div>
					<p className="text-center text-[22px] mt-[-6px] ml-1">Schedule an appointment for <span className="main-bold text-n">{name}</span></p>
				</div>
				<div className="f-h-center mt-[50px] max-[810px]:flex-col max-[810px]:items-center">
					<div className="ml-[-200px] h-max max-[810px]:ml-0 max-[810px]:mb-10">
						<Calendar
							onChange={async (value, event) => {
								try {
									const formattedDate = format(value, "MMMM dd, yyyy")
								
									const { data } = await getAppointment(formattedDate, id)

									setCurrentDate(formattedDate)
									setDateClicked(true)
									setDate(value)
									setSelectedTime('')

									if(!data.appointments) {
										setExistingAppointmentTime([])
		
										return
									}
		
									setExistingAppointmentTime([...existingAppointmentTime, ...data?.appointments.appointmentTime])
								}
								catch(e) {
									toast.error('Can not get appointment dates. Try again later.')
								}
							}}
							value={date}
							minDate={new Date()}
							maxDate={new Date(2023, new Date().getMonth() + 1, 31)}
							minDetail="month"
						/>
					</div>
					<div className="ml-5 w-[200px] max-[810px]:ml-0 max-[810px]:w-full max-[810px]:flex-center max-[810px]:flex-col">
						<p className="text-s font-bold text-dark2 mt-[-7px] mb-3">{currentDate}</p>
						<div className="w-[400px] max-[430px]:w-full">
							<div className="grid grid-cols-2 gap-3 max-[430px]:grid-cols-1">
								{!dateClicked ? null
									: (existingAppointmentTime.length < 1 && dateClicked) || existingAppointmentTime.length < 1
										? appointmentTimes.map((appointmentTime, idx) => (
											<AppointmentTimeCard
												appointmentTime={appointmentTime}
												isSelected={selectedTime === appointmentTime}
												key={idx}
												onClick={() => setSelectedTime(appointmentTime)}
											/>
										))
										: appointmentTimes.map((appointmentTime, idx) => existingAppointmentTime.includes(appointmentTime)
											? null
											: <AppointmentTimeCard
												appointmentTime={appointmentTime}
												isSelected={selectedTime === appointmentTime}
												key={idx}
												onClick={() => setSelectedTime(appointmentTime)}
											/>
								)}
							</div>
							{existingAppointmentTime.length > 7 ?
								<p className="w-[300px] text-s">
									No appointment available for
									<span className="main-bold"> {name}</span> at <span className="main-bold">{currentDate}</span>.
								</p>
								: selectedTime !== '' ? <div disabled={loading} onClick={handleBookAppointment} className={`
									${loading ? 'bg-dark/50 default' : 'bg-dark pointer hover:bg-dark2'}
									mt-[10px] text-center
									text-white py-2 rounded-sm w-full px-10
								`}>
									{loading ? 'Booking...' : 'Book Appointment'}
								</div>
								: null
							}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
