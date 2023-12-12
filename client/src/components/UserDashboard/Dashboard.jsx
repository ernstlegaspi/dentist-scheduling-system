import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'

import { useState } from 'react'
import DashboardContent from "./DashboardContent"
import DashboardLeftSidebar from "./DashboardLeftSidebar"
import DashboardNav from "./DashboardNav"

import { getAppointmentsPerUser } from '../../api/api'
import ChangeUserModal from './ChangeUserInfoModal'
import ErrorPage from '../ErrorPage'
import useEditUserInfo from '../../hooks/useEditUserInfo'

export default function Dashboard() {
	const [isProfile, setIsProfile] = useState(true)
	const isLoggedIn = JSON.parse(localStorage.getItem('token'))
	const { isEdit } = useEditUserInfo()
	const queryClient = new QueryClient()

	useEffect(() => {
		(async () => {
			await queryClient.prefetchQuery({
				queryKey: ['Appointments'],
				queryFn: async () => {
					return await getAppointmentsPerUser(isLoggedIn?.id)
				}
			})
		})()
	}, [isLoggedIn?.id])

	if(!isLoggedIn?.token) return <ErrorPage />

	return (
		<>
			<div className="w-[98%] mx-auto relative">
				<DashboardNav />
				<div className="w-full flex">
					<DashboardLeftSidebar isProfile={isProfile} setIsProfile={setIsProfile} />
					<HydrationBoundary state={dehydrate(queryClient)}>
						<DashboardContent isProfile={isProfile} />
					</HydrationBoundary>
				</div>
			</div>
			{isEdit ? <ChangeUserModal /> : null}
		</>
	)
}
