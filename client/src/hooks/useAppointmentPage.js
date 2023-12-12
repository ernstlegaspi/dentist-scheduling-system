import { create } from "zustand"

const useAppointmentPage = create(set => ({
	page: 0,
	setPage: newPage => set({ page: newPage })
}))

export default useAppointmentPage
