import mongoose from "mongoose";
const messageSchema = new mongoose.Schema({
   
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
    },
    content: {
        type: String,
        trim: true,
    },
    chat: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: "Chat" 
        },
    readBy: [{ 
        type: mongoose.Schema.Types.ObjectId,
         ref: "User" 
        }],
}, { timestamps: true })
const messageModel = mongoose.model('Messages', messageSchema);
export default messageModel;
