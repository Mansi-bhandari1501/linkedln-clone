import express from 'express';
import colors from "colors";
import dotenv from 'dotenv';
import morgon from 'morgan';
import connectDB from './config/db.js';
import routes from './routes/index.js'
import cors from 'cors';
import path from "path";

dotenv.config()
connectDB();

const app = express();

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgon('dev'));

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname + '/uploads')));

// routes
app.use('/',routes);

//Port
const PORT = process.env.PORT || 8080 ;

// run listen
app.listen(PORT,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
})