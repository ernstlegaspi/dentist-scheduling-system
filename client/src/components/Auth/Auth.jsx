import { lazy, Suspense, useState } from 'react'

import ErrorPage from "../ErrorPage"
import Logo from "../Logo"

const SignIn = lazy(() => import("./SignIn"))
const SignUp = lazy(() => import("./SignUp"))

export default function Auth() {
	const isLoggedIn = JSON.parse(localStorage.getItem('token'))?.token
	const [isSignIn, setIsSignIn] = useState(true)

	if(isLoggedIn) return <ErrorPage />
	
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
					</div>
				</div>
			</div>
		</div>
	)
}
