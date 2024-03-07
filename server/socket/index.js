import { sendMessage } from "../service/message.service.js";


export const handleSocketEvents = (socket) => {

    socket.on("join-room", (chatId) => {
        console.log(chatId)
        socket.join(chatId);
        console.log(`User joined room ${socket.id}`);
    });
    socket.on("message", ({ chatId, content, senderId }) => {
        const payload = { chatId, content, senderId }
        sendMessage(socket,payload);
    });

    socket.on("disconnect", () => {
        console.log("User Dissconnected",);
    });
}