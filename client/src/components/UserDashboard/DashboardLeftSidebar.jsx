import { FaRegCalendarAlt, FaTooth } from "react-icons/fa"
import { IoPersonOutline } from "react-icons/io5"

import Logo from "../Logo"
import { Link } from "react-router-dom"

export default function DashboardLeftSidebar({ isProfile, setIsProfile }) {
	const SidebarButtons = ({ icon: Icon, isActive, onClick, text }) => {
		return <div onClick={onClick} className="w-full f-v-center pointer max-[800px]:flex-center mb-3">
			<div className={`
				${isActive ? 'bg-white' : 'bg-transparent text-white hover:bg-white hover:text-dark2'}
				f-v-center text-dark2 w-full ml-[45px] pl-3 rounded-l-md py-2 transition-all max-[800px]:w-max max-[800px]:rounded-full max-[800px]:p-2 max-[800px]:ml-0
			`}>
				<Icon size={18} />
				<p className={`${isActive ? 'font-bold' : ''} text-s ml-2 max-[800px]:hidden`}>{text}</p>
			</div>
		</div>
	}

	return (
		<div className="w-[240px] bg-dark h-[82.5vh] transition-all mt-5 rounded-md mr-5 max-[800px]:w-[70px]">
			<div className="f-h-center text-white mt-5 mb-3 max-[800px]:hidden">
				<Logo />
			</div>
			<Link to="/">
				<div className="text-white mt-5 mb-3 p-2 w-full hidden max-[800px]:f-h-center">
					<FaTooth size={30} />
				</div>
			</Link>
			<SidebarButtons onClick={() => setIsProfile(false)} icon={FaRegCalendarAlt} isActive={!isProfile} text="Appointments" />
			<SidebarButtons onClick={() => setIsProfile(true)} icon={IoPersonOutline} isActive={isProfile} text="Profile" />
		</div>
	)
}
