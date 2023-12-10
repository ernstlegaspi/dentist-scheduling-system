import { lazy, Suspense, useState } from 'react'

import useUserLoggedIn from "../../hooks/useUserLoggedIn"
import ErrorPage from "../ErrorPage"
import Logo from "../Logo"
import SignIn from "./SignIn"
import SignUp from "./SignUp"

export default function Auth() {
	const [isSignIn, setIsSignIn] = useState(true)
	const { hasToken } = useUserLoggedIn()

	if(hasToken) return <ErrorPage />
	
	return (
		<div className="relative h-[100vh] w-full">
			<div className="auth-bg absolute z-0 blur-md brightness-50 inset-0"></div>
			<div className="relative z-10 flex-center h-full">
				<div className="bg-white rounded-md h-[600px] w-[350px] white-shadow">
					<div className="my-5 f-h-center text-dark2">
						<Logo />
					</div>
					<div className="w-[90%] mx-auto">
						<Suspense fallback={<p>Changing form..</p>}>
							{isSignIn ? <SignIn setIsSignIn={setIsSignIn} /> : <SignUp setIsSignIn={setIsSignIn} />}
						</Suspense>
						<div className="relative my-8">
							<div className="w-full h-[1px] bg-dark2"></div>
							<p className="absolute mt-[-24px] left-[50%] translate-x-[-50%] bg-white p-2 rounded-full">or</p>
						</div>
						<p>Facebook and google login placeholder</p>
					</div>
				</div>
			</div>
		</div>
	)
}
