import { create } from "zustand"

const useRescheduleData = create(set => ({
	appointmentId: '',
	existingAppointmentTime: [],
	isUserRescheduling: false,
	page: 0,
	setAppointmentId: newAppointmentId => set({ appointmentId: newAppointmentId }),
	setExistingAppointmentTime: newTime => set({ existingAppointmentTime: newTime }),
	setIsUserRescheduling: newIsUserRescheduling => set({ isUserRescheduling: newIsUserRescheduling }),
	setPage: newPage => set({ page: newPage })
}))

export default useRescheduleData
