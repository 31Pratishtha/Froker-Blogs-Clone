import React, { useState, useEffect } from 'react'
import BlogCard from './BlogCard'
import axios from 'axios'

export default function BlogsList() {
	const [blogs, setBlogs] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const response = await axios.get('http://localhost:3500/blogs')
				setBlogs(response.data)
				setLoading(false)
			} catch (error) {
				setError('An error occurred while fetching blogs')
				console.error(error)
				setLoading(false)
			}
		}

		fetchBlogs()
	}, [])

	useEffect(() => {
		console.log('Blogs:', blogs)
	}, [blogs])

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error}</div>

	return (
		<>
			<div className="pt-16">
				<h2 className="flex justify-center items-center text-3xl gap-4">
					<span className="text-frk-orange">FROKER</span>{' '}
					<span className="text-frk-gray">BLOG</span>
				</h2>
				<h1 className="flex text-frk-gray justify-center items-center text-4xl leading-relaxed tracking-normal font-semibold text-center px-8 pt-6">
					Articles covering the most recent updates and advancements
				</h1>
				<h1 className='text-frk-gray text-3xl py-12'>Recent Posts</h1>
				<div className="relative grid grid-cols-3 grid-rows-2 mb-10">
					{blogs.length > 0 &&
						blogs.map((blog) => (
							<div key={blog._id}>
								<BlogCard blog={blog} />
							</div>
						))}
				</div>
			</div>
		</>
	)
}
