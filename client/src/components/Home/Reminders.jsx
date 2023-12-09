import React from 'react'

import { reminders } from '../../constants'

export default function Reminders() {
	const ReminderCard = ({ icon: Icon, description, marginBottom, title }) => (
		<div className={`${marginBottom} flex max-[450px]:flex-col max-[450px]:flex-center`}>
			<div className="rounded-full border-2 border-dark2 p-4 w-max h-max mr-5 max-[450px]:mr-0 max-[450px]:mb-3">
				<Icon size={25} />
			</div>
			<div>
				<p className="text-s text-dark2 font-medium mb-3 max-[450px]:text-center">{title}</p>
				<p className="text-gray-500 w-[300px] leading-7 max-[450px]:text-center max-[450px]:mx-auto max-sm:w-[90%]">{description}</p>
			</div>
		</div>
	)

	return (
		<div className="home-bg2 h-[700px] mt-[100px] relative max-[450px]:h-[870px]">
			<div className="bg-white/60 inset-0 absolute z-10 hidden max-[1100px]:block"></div>
			<div className="z-10 w-[70%] mx-auto relative top-[50%] translate-y-[-50%] max-[1280px]:w-[85%]">
				<p className="text-n mb-12">Relax…your Dentist Knows Best</p>
				{reminders.map((reminder, idx) => <ReminderCard
					key={idx}
					icon={reminder.icon}
					description={reminder.description}
					marginBottom={idx < reminders.length - 1 ? 'mb-10' : ''}
					title={reminder.title}
				/>)}
			</div>
		</div>
	)
}
