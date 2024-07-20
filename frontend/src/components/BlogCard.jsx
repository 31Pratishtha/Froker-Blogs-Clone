import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'

export default function BlogCard({ blog }) {
	const [description, setDescription] = useState('')
	const truncateText = (text, maxLength) => {
		if (text.length > maxLength) {
			return text.substring(0, maxLength) + '...'
		} else {
			return text
		}
	}

	const removeHtmlTags = (text) => {
		const htmlTags = /<[^>]*>/g
		return text.replace(htmlTags, '')
	}

	useEffect(() => {
		setDescription(truncateText(removeHtmlTags(blog.content), 150))
	}, [])
	return (
		<>
			<div className="p-2">
				<Link to={`/blog/${blog._id}`}>
					<div className="aspect-square">
						<img
							src={'http://localhost:3500/' + blog.cover}
							alt=""
							className="w-full h-full object-cover rounded-2xl"
						/>
					</div>
					<div key={blog._id}>
						<h4 className="text-frk-orange pt-4">
							by {blog.author} -{' '}
							<span>
								<time>{format(new Date(blog.createdAt), 'd MMM yyyy')}</time>
							</span>
						</h4>
						<h2 className="pt-4">{blog.title}</h2>
						<p className="pt-4 text-frk-gray-light">{description}</p>
						<p className="text-frk-orange font-bold underline ">Read more...</p>
					</div>
				</Link>
			</div>
		</>
	)
}
