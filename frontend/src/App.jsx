import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {
	return (
		<>
			<div className='flex flex-col min-h-screen'>
				<Header />
				<Main />
				<Footer />
			</div>
		</>
	)
}

export default App
