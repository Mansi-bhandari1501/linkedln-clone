import express from 'express';
import colors from "colors";
import dotenv from 'dotenv';
import morgon from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/index.js'
import cors from 'cors';
// import UserModel from './models/userModel.js';
//configure env
dotenv.config()

//database config
connectDB();

// rest object 
const app = express();

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgon('dev'))

// routes
app.use('/',authRoutes);

//Port
const PORT = process.env.PORT || 8080 ;

// run listen
app.listen(PORT,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
})