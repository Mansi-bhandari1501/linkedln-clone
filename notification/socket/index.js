// import { sendMessage } from "../service/message.service.js";

import { sendNotifications } from "../service/notification.service.js";


export const handleSocketEvents = (socket) => {

    socket.on("notify-room", (receiverId) => {
        console.log(receiverId)
        socket.join(receiverId);
        console.log(`User joined room ${socket.id}`);
    });
    socket.on("notify", ({ receiverId, content, senderId  }) => {
        const payload = { receiverId, content, senderId ,type}
        sendNotifications(socket,payload);
    });

    socket.on("disconnect", () => {
        console.log("User Dissconnected",);
    });
}