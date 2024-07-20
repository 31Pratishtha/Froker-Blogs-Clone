import React, { useState, useRef, useEffect } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import axios from 'axios'

const modules = {
	toolbar: [
		[{ header: [1, 2, 3, 4, 5, 6, false] }],
		['bold', 'italic', 'underline', 'strike', 'blockquote'],
		[{ list: 'ordered' }, { list: 'bullet' }],
		['link', 'image'],
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
	'image',
	'blockquote',
]

export default function CreateBlog() {
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const [image, setImage] = useState('')
	const [author, setAuthor] = useState('')
	const quillRef = useRef(null)

	const onTitleChanged = (e) => {
		setTitle(e.target.value)
	}
	const onImageUpload = (e) => {
		setImage(e.target.files)
	}
	const onContentChanged = (val) => {
		setContent(val)
	}
	const onAuthorChanged = (e) => {
		setAuthor(e.target.value)
	}

	useEffect(() => {
		console.log()
	}, [])

	//Send create-blog request to server
	const createNewBlog = async (e) => {
		e.preventDefault()
		console.log(image)

		//create form data
		const formData = new FormData()
		formData.set('title', title)
		formData.set('content', content)
		formData.set('image', image[0])

		console.log(formData)

		await axios.post('http://localhost:3000/create', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	}

	return (
		<>
			<form action="" onSubmit={createNewBlog}>
				<label htmlFor="title">Title: </label>
				<input
					type="text"
					placeholder="Title"
					value={title}
					onChange={onTitleChanged}
				/>

				<label htmlFor="cover">Upload an image: </label>
				<input id="cover" type="file" onChange={onImageUpload} />

				<label htmlFor="author">Author: </label>
				<input
					type="text"
					placeholder="Author"
					value={author}
					onChange={onAuthorChanged}
				/>

				<div className="p-3">
					<ReactQuill
						modules={modules}
						formats={formats}
						onChange={onContentChanged}
						ref={quillRef}
					/>
				</div>

				<button>Create Blog</button>
			</form>
		</>
	)
}
