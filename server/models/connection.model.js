import mongoose from "mongoose";
const connectionSchema = new mongoose.Schema({
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
    },
    status: {
        type: String,
        enum: ['pending', 'active', 'rejected'],
        default: 'pending',
    },


}, { timestamps: true })
const connectionModel = mongoose.model('Connection', connectionSchema);
export default connectionModel;