import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'

export default function BlogCard({ blog }) {
	return (
		<>
			<div>
				<Link to={`/blog/${blog._id}`}>
					<div className="aspect-auto w-80">
						<img src={'http://localhost:3500/' + blog.cover} alt="" />
					</div>
					<div key={blog._id}>
						<h4>
							by {blog.author} -{' '}
							<span>
								<time>{format(new Date(blog.createdAt), 'd MMM yyyy')}</time>
							</span>
						</h4>
						{/* <p>{blog.content}</p> */}
					</div>
				</Link>
			</div>
		</>
	)
}
