
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
        console.log("MESSAGE", newMessage)
        var message = await messageModel.create(newMessage)
       

        message = await message.populate("sender", "name ");
        message = await message.populate("chat");
        // message = await users.populate(message, {
        //     path: "chat.users",
        //     select: "name pic email",
        // });
        await chatModel.findByIdAndUpdate(payload.body.chatId, { latestMessage: message });
        console.log("----->>",message)
        return message;
        
    } catch (error) {
        throw new error;
    }
};


const messageService = {
    sendNewMessage,
    getAllMessages
}
export default messageService;