import React from 'react'

import { Link } from 'react-router-dom'

const Button = ({ disabled, extraClass, href, text, type }) => {
	const buttonClass = "h-max text-[19px] pointer font-bold tracking-widest px-4 py-2 rounded transition-all"

	if(type === "Submit") return <button type="submit" disabled={disabled} className={`${extraClass} ${buttonClass}`}>{text}</button>

	return (
		<Link to={href}>
			<div className={`${extraClass} ${buttonClass} w-max bg-main hover:bg-hover`}>{text}</div>
		</Link>
	)
}

export default Button
