import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Main() {
	return (
		<>
			<div className='mx-24 flex-1'>
				<Outlet />
			</div>
		</>
	)
}
