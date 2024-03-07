
import chatModel from '../models/chat.model.js';
import messageModel from './../models/message.model.js';


export const getAllMessages = async (payload) => {
    try {
        const messages = await messageModel.find({ chat: payload.params.chatId })
            .populate("sender", "name pic email")
            .populate("chat");
        return messages
        // res.json(messages);
    } catch (error) {
        throw new error;
    }
};


export const sendNewMessage = async (payload) => {
    const { content, chatId, senderId } = payload.body;
    console.log(content, chatId, senderId)
    if (!content || !chatId) {
        throw Object.assign(new Error(), { name: "BAD_REQUEST", message: "Invalid data passed into request" });
    }
    try {
        var newMessage = {
            sender: senderId,
            content: content,
            chat: chatId,
        };
        // console.log("MESSAGE", newMessage)
        var message = await messageModel.create(newMessage)


        message = await message.populate("sender", "name ");
        message = await message.populate("chat");
        // message = await users.populate(message, {
        //     path: "chat.users",
        //     select: "name pic email",
        // });
        await chatModel.findByIdAndUpdate(payload.body.chatId, { latestMessage: message });
        console.log("----->>", message)
        return message;

    } catch (error) {
        throw new error;
    }
};

export const sendMessage = async (socket, payload) => {
    const { content, chatId, senderId } = payload;
    console.log('payload', payload);
    console.log(content, chatId, senderId)

    if (!content || !chatId) {
        const error = Object.assign(new Error(), { name: "BAD_REQUEST", message: "Invalid data passed into request" });
        socket.emit('error', error);
    }

    try {
        var newMessage = {
            sender: senderId,
            content: content,
            chat: chatId,
        };
        // console.log("MESSAGE", newMessage)
        var message = await messageModel.create(newMessage)
        message = await message.populate("sender", "name email ");
        message = await message.populate("chat");
        // message = await users.populate(message, {
            //     path: "chat.users",
            //     select: "name pic email",
            // });
            const messagePayload = {
                message, senderId
            }
            socket.in(chatId).emit("receive-message", messagePayload);
        //only upto that chaid mentioned
        // socket.to(chatId).emit(chatId, messagePayload);
        await chatModel.findByIdAndUpdate(chatId, { latestMessage: message });
        console.log("----->>", message);
        // socket.emit(chatId, message, senderId);

        // return message;

    } catch (error) {
        socket.emit('error', error);
    }
}


const messageService = {
    sendNewMessage,
    getAllMessages,
    sendMessage
}
export default messageService;