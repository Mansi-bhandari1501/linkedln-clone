import errorHandler from "../../server/lib/utils.js";
import notificationService from "../service/notification.service.js";

export const createNotification = async (req, res) => {
    try {
        console.log("helllooo")
      const response = await notificationService.getNotifications(req);
      console.log(response);
      // res.send("commented");
      return res.status(201).json({
        success: true,
        notification: response,
      });
    } catch (error) {
      errorHandler(res, error);
    }
  };
  export default {
    createNotification,
  };