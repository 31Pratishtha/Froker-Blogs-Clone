import { useNavigate } from 'react-router-dom'
import React, { useState, useRef, useEffect } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import axios from 'axios'

const modules = {
	toolbar: [
		[{ header: [1, 2, 3, 4, 5, 6, false] }],
		['bold', 'italic', 'underline', 'strike', 'blockquote'],
		[{ list: 'ordered' }, { list: 'bullet' }],
		['link', 'cover'],
		['clean'],
	],
}

const formats = [
	'header',
	'bold',
	'italic',
	'underline',
	'strike',
	'list',
	'bullet',
	'indent',
	'link',
	'cover',
	'blockquote',
]

export default function CreateBlog() {
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const [cover, setCover] = useState('')
	const [author, setAuthor] = useState('')
	// const [redirect, setRedirect] = useState(false)
	const navigate = useNavigate()
	const quillRef = useRef(null)

	const onTitleChanged = (e) => {
		setTitle(e.target.value)
	}
	const onCoverUpload = (e) => {
		setCover(e.target.files)
	}
	const onContentChanged = (val) => {
		setContent(val)
	}
	const onAuthorChanged = (e) => {
		setAuthor(e.target.value)
	}

	//Send create-blog request to server
	const createNewBlog = async (e) => {
		e.preventDefault()
		console.log(cover)

		//create form data
		const formData = new FormData()
		formData.set('title', title)
		formData.set('content', content)
		formData.set('author', author)
		formData.set('cover', cover[0])

		console.log(formData)

		const response = await axios.post('http://localhost:3500/blogs', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})

		//redirect if blog created successfully
		if (response.status === 200 || response.status === 201) {
			navigate('/blogs')
		}
	}
	
	return (
		<>
			<form action="" onSubmit={createNewBlog} className='flex flex-col h-4/5 my-7 '>
				<label htmlFor="title">Title: </label>
				<input
					type="text"
					placeholder="Title"
					value={title}
					onChange={onTitleChanged}
				/>

				<label htmlFor="cover">Upload an image: </label>
				<input id="cover" type="file" name="cover" onChange={onCoverUpload} />

				<label htmlFor="author">Author: </label>
				<input
					type="text"
					placeholder="Author"
					value={author}
					onChange={onAuthorChanged}
				/>

				<div className="mb-14">
					<ReactQuill
						modules={modules}
						formats={formats}
						onChange={onContentChanged}
						ref={quillRef}
						className='h-52'
					/>
				</div>

				<button className='bg-frk-orange py-3 w-1/4 flex justify-center items-center'>Create Blog</button>
			</form>
		</>
	)
}
