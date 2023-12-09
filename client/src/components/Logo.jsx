import React from 'react'

import { FaTooth } from "react-icons/fa"
import { Link } from 'react-router-dom'

export default function Logo() {
	return <div className='w-max'>
			<Link to="/">
			<div className="f-v-center text-n">
				<FaTooth />
				<h1 className="text-m ml-2 tracking-widest">Smiles</h1>
			</div>
		</Link>
	</div>
}