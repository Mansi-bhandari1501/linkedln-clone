import express from 'express';
import colors from "colors";
import dotenv from 'dotenv';
import morgon from 'morgan';
import connectDB from './config/db.js';
import routes from './routes/index.js'
import cors from 'cors';
import path from "path";
import {Server} from "socket.io";

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
const server = app.listen(PORT,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
})
 const io = new Server(server,{
    pingTimeout:60000,
    cors:{
        origin:"http://localhost:3000/",
        methods:["GET","POST"],
        credentials:true,
    }
 });

 app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET","POST"],
    credentials:true,
}));

io.on("connection",(socket)=>{
    console.log(' User connected',socket.id);

    console.log("----------------")
    socket.emit("welcome",`welcome to server`)
    socket.broadcast.emit("welcome",` ${socket.id} joined the server`);

    // socket.on("message",(data)=>{
    //     console.log("<-->",data,"<--->");
    //     io.to(data.room).emit("receive-message",data.message);
    //     socket.broadcast.emit("receive-message",data);
    // });
    socket.on("message", ({ room, message }) => {
        console.log({ room, message });
        socket.to(room).emit("receive-message", message);
        // socket.broadcast.emit("receive-message",message);
      });

      socket.on("join-room", (room) => {
        socket.join(room);
        console.log(`User joined room ${room}`);
      });
    socket.on("disconnect",()=>{
        console.log("User Dissconnected",);
    });
})
