import asyncHandler from 'express-async-handler'
import Blog from '../models/blogs.js'
import * as fs from 'fs'

//get all blogs
const getAllBlogs = asyncHandler(async (req, res) => {
	const blogs = await Blog.find()
	res.json(blogs)
})

//get one blog by id
const getBlogById = asyncHandler(async (req, res) => {
	const {id} = req.params;
	const blogDoc = await Blog.findById(id)
	res.json(blogDoc)
})

//Create new blog post
const createNewBlog = asyncHandler(async (req, res) => {
	const { originalname, path } = req.file
	const parts = originalname.split('.')
	const ext = parts[parts.length - 1]
	const newPath = path + '.' + ext
	fs.renameSync(path, newPath)

	const { title, content, author } = req.body
	const blogDoc = await Blog.create({
		title,
		content,
		author,
		cover: newPath,
	})

	res.json(blogDoc)
})

//edit a blog post
const updateBlog = asyncHandler(async (req, res) => {
	res.send('Update blog')
})

//delete a blog post
const deleteBlog = asyncHandler(async (req, res) => {
	res.send('Delete blog')
})

export { getBlogById, getAllBlogs, createNewBlog, updateBlog, deleteBlog }
