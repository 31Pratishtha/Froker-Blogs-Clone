import "dotenv/config"
import express from 'express';
import cors from 'cors';
import connectDB from "./config/dbConn.js";
import corsOptions from './config/corsOption.js'

const PORT = process.env.PORT || 3000;
const app = express();

//connection to mongoDB function
connectDB()

app.use(express.json())
app.use(cors(corsOptions))

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

