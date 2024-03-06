import express from 'express';
import dotenv from 'dotenv';
import morgon from 'morgan';
import connectDB from './config/db.js';
import routes from './routes/index.js'
import cors from 'cors';
import path from "path";
import http from 'http';
import { Server } from "socket.io";
import { handleSocketEvents } from './socket/index.js';

dotenv.config()
connectDB();

const app = express();

//middlewares

const corsOptions = {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(morgon('dev'));

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname + '/uploads')));

// routes
app.use('/', routes);

//Port
const PORT = process.env.PORT || 8080;

// run listen

const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
})

const io = new Server(server, {cors: corsOptions});

io.on("connection", (socket) => {
    console.log(' User connected', socket.id);

    console.log("----------------")
    socket.emit("welcome", `welcome to server`)
    socket.emit("welcome", ` ${socket.id} joined the server`);

    handleSocketEvents(socket);

    // socket.on("message",(data)=>{
    //     console.log("<-->",data,"<--->");
    //     io.to(data.room).emit("receive-message",data.message);
    //     socket.broadcast.emit("receive-message",data);
    // });
   
})
