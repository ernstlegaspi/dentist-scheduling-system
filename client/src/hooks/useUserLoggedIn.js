import { create } from "zustand"

const useUserLoggedIn = create(set => ({
	hasToken: false,
	setHasToken: currentToken => set({ hasToken: currentToken })
}))

export default useUserLoggedIn
