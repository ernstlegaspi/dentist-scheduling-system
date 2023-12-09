import React from 'react'

import { Link } from 'react-router-dom'

const Button = ({ extraClass, href, text }) => {
	return (
		<Link to={href}>
			<div className={`${extraClass} w-max h-max bg-main text-[19px] pointer font-bold tracking-widest px-4 py-2 rounded transition-all hover:bg-hover`}>{text}</div>
		</Link>
	)
}

export default Button