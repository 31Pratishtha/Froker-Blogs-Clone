import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function BlogPage() {
	const { id } = useParams()
	const [blogInfo, setBlogInfo] = useState(null)
	const [likes, setLikes] = useState(0)
	const [isLiked, setIsLiked] = useState(false)
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

	const handleLike = async () => {
		const increment = !isLiked
		setLikes((prevLikes) => prevLikes + (increment ? 1 : -1))
		setIsLiked(increment)

		try {
			const response = await axios.patch(
				`http://localhost:3000/blog/${id}/like`,
				{ increment }
			)
			setLikes(response.data.likes)
		} catch (error) {
			console.error('Error updating likes:', error)
			setLikes((prevLikes) => prevLikes + (increment ? -1 : 1))
			setIsLiked(!increment)
		}
	}

	if (error) return <div>Error: {error}</div>
	if (loading) return <div>Loading...</div>

	return (
		<div>
			<div className="relative z-10">
					<img
						src={`http://localhost:3500/${blogInfo.cover}`}
						alt=""
						className="w-full h-full object-cover rounded-3xl"
					/>
				<div className='absolute text-3xl z-30 text-white bottom-8 left-4 font-bold'>{blogInfo.title}</div>
				<div className='bg-gradient-to-tr from-[#00000080] to-transparent absolute top-0 left-0 w-full h-full'></div>
			</div>
			<div className="flex justify-between">
				<h1 className='text-frk-orange'>by {blogInfo.author}</h1>
				<div>
					<img
						src="like.webp"
						alt="Like"
						onClick={handleLike}
						className="cursor-pointer"
					/>
					({likes}) likes
				</div>
			</div>
			<div dangerouslySetInnerHTML={{ __html: blogInfo.content }} />
		</div>
	)
}
