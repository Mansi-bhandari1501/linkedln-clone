import notificationsModel from "../models/notification.model.js";

export const sendNotifications = async (req, res) => {
    const { senderId, receiverId, type, content } = req.body;
    console.log(senderId, receiverId, type, content)
    const newNotifications = await new notificationsModel({
        receiver: receiverId,
        sender: senderId,
        content: content,
        notificationType: type
    }).save();
    return res.json(newNotifications)
}
export const getNotifications = async (req, res) => {
    const { receiverId } = req.body;
    console.log(receiverId)
    const getNotifications = await  notificationsModel.find({
        receiver: receiverId,
        
    })
    return res.json(getNotifications)
}