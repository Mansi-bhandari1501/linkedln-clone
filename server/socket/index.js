import { sendMessage } from "../service/message.service.js";


export const handleSocketEvents = (socket) => {
    socket.on("message", ({ chatId, content, senderId }) => {
        const payload = { chatId, content, senderId }
        sendMessage(socket,payload);
    });

    socket.on("join-room", (chatId) => {
        socket.join(chatId);
        console.log(`User joined room ${chatId}`);
    });
    socket.on("disconnect", () => {
        console.log("User Dissconnected",);
    });
}