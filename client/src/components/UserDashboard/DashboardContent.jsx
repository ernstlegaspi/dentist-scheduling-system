import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { SyncLoader } from 'react-spinners'
import { IoSettingsOutline } from "react-icons/io5"

import AppointmentCard from "./AppointmentCard"
import { getAppointmentsPerUser } from '../../api/api'
import useEditUserInfo from '../../hooks/useEditUserInfo'

export default function DashboardContent({ isProfile }) {
	const { setIsEdit } = useEditUserInfo()
	const user = JSON.parse(localStorage.getItem('token'))
	
	const { data, isLoading } = useQuery({
		queryKey: ['Appointments'],
		queryFn: async () => {
			return getAppointmentsPerUser(user?.id)
		}
	})

	const AppointmentContent = () => <div className="grid grid-cols-3 gap-5 max-[1000px]:grid-cols-2 max-[800px]:grid-cols-1">
		{isLoading || !data ? <SyncLoader /> : !data?.data ? <SyncLoader /> : data.data.appointments.appointments.map(appointment => (
			<AppointmentCard
				key={appointment._id}
				dentistName={appointment.dentistName}
				date={appointment.appointmentDate}
				id={appointment._id}
				time={appointment.appointmentTime}
			/>
		))}
	</div>
	
	const ProfileContent = () => {
		const Info = ({ label, text }) => {
			return (
				<div className="f-v-center">
					<p className="break-words font-bold mr-2">{label}:</p>
					<p>{text}</p>
				</div>
			)
		}

		return <div className="text-s text-white bg-dark rounded w-max p-3">
			<div className="flex justify-between">
				<div>
					<Info label="Name" text={user.name} />
					<Info label="Birthday" text={user.birthday} />
				</div>
				<div className="pointer h-max w-max" onClick={() => setIsEdit(true)}>
					<IoSettingsOutline size={20} />
				</div>
			</div>
			<p className="text-[26px] font-bold mt-5">Contacts</p>
			<Info label="Email" text={user.email} />
			<Info label="Phone Number" text={user.phoneNumber} />
		</div>
	}

	return (
		<div className="mt-5 overflow-y-scroll h-[82.4vh] w-full pr-3">
		<p className="mb-5 text-dark2 text-s font-medium">{isProfile ? 'Personal Information' : 'Upcoming Appointments'}</p>
			{isProfile ? <ProfileContent /> : <AppointmentContent />}
		</div>
	)
}
