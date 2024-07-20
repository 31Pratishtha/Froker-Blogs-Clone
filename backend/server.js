import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './config/dbConn.js'
import corsOptions from './config/corsOption.js'
import blogsRoute from './routes/blogsRoute.js'
import Blog from './models/blogs.js'
import { fileURLToPath } from 'url'
import mongoose from 'mongoose'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PORT = process.env.PORT || 3500
const app = express()

//connection to mongoDB function
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors(corsOptions))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use('/blogs', blogsRoute)

app.get('/blog/:id', async (req, res) => {
	const {id} = req.params;
	const blogDoc = await Blog.findById(id)
	res.json(blogDoc)
})

//establish connnection to mongoDB
mongoose.connection.once('open', () => {
	console.log('Connected to MongoDB')
	app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
})

mongoose.connection.on('error', (err) => {
	console.log(err)
})
