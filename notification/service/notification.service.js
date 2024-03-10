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


export const getNotifications = async (payload) => {
    const  {receiverId}  = payload.body;
    console.log("ggggggJJJhh",payload.body)
    console.log("----RECEIVERiD-----",receiverId)
    const getNotifications = await  notificationsModel.find({
        receiver: receiverId
    })
    console.log("GETNOTTTT",getNotifications)
    return getNotifications;
}

const notificationService = {
    getNotifications,
    sendNotifications
  };
  export default notificationService;