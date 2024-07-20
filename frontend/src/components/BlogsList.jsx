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
			<div>
				<h2>
					<span>FROKER</span> <span>BLOG</span>
				</h2>
				<h1>Articles covering the most recent updates and advancements</h1>
				<h1>Recent Posts</h1>
				{blogs.length > 0 &&
					blogs.map((blog) => (
						<div key={blog._id}>
							<BlogCard blog={blog} />
						</div>
					))}
			</div>
		</>
	)
}
