import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function DashboardNav() {
	const navigate = useNavigate()
	const { name } = JSON.parse(localStorage.getItem('token'))

	const handleLogout = () => {
		localStorage.removeItem('token')
		navigate('/')
		toast.success('Logout successfully.')
	}
	
	return (
		<div className="bg-dark mt-5 rounded-md px-6 h-[100px] f-v-center text-white f-v-center justify-between">
			<p>Welcome back, {name}</p>
			<button className="bg-main text-s py-3 px-8 rounded hover:bg-hover transition-all" onClick={handleLogout}>Logout</button>
		</div>
	)
}
