import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function BlogPage() {
	const { id } = useParams()
	const [blogInfo, setBlogInfo] = useState(null)
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const getOneBlog = async () => {
			try {
				const response = await axios.get(`http://localhost:3500/blog/${id}`)
				setBlogInfo(response.data)
				setLoading(false)
                console.log(response.data)
			} catch (error) {
				setError('An error occurred while fetching blogs')
				console.error(error)
				setLoading(false)
			}
		}

		getOneBlog()
	}, [])

	if(error) return <div>Error: {error}</div>
	if(loading) return <div>Loading...</div>

	return (
		<div>
			<div className='w-4/6'>
				<img src={`http://localhost:3500/${blogInfo.cover}`} alt="" />
				<h1>{blogInfo.title}</h1>
			</div>
				<div dangerouslySetInnerHTML={{__html: blogInfo.content}}/>
		</div>
	)
}
