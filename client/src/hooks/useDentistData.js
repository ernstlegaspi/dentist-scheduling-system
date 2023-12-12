import { create } from "zustand"

const useDentistData = create(set => ({
	id: '',
	name: '',
	setId: newId => set({ id: newId }),
	setName: newName => set({ name: newName })
}))

export default useDentistData
