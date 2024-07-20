import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const blogSchema = new Schema(
	{
		title: String,
		content: String,
		cover: String,
		author: String,
		likes: {type: Number, default: 0},
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{
		timestamps: true,
	}
)

export default mongoose.model('Blog', blogSchema);
