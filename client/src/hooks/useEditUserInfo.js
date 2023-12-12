import { create } from "zustand"

const userEditUserInfo = create(set => ({
	isEdit: false,
	setIsEdit: newIsEdit => set({ isEdit: newIsEdit })
}))

export default userEditUserInfo
