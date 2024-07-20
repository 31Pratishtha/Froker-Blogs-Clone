import express from 'express'
import {
	getBlogById,
	getAllBlogs,
	createNewBlog,
	updateBlog,
	deleteBlog,
} from '../controllers/blogController.js'

import multer from 'multer'

const uploadMiddleware = multer({ dest: 'uploads/' })

const router = express.Router()

router
	.route('/')
	.get(getAllBlogs)
	.post(uploadMiddleware.single('cover'), createNewBlog)
	.patch(updateBlog)
	.delete(deleteBlog)

export default router
