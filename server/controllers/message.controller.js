import errorHandler from "../lib/utils.js";
import messageService from "../service/message.service.js";


export const sendMessage = async (req, res) => {
  try {
    // console.log("HELLO")
    const response = await messageService.sendNewMessage(req);
    console.log(response);
    // res.send("commented");
    return res.status(201).json({
      success: true,
      message: response,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};
export const allMessages = async (req, res) => {
  try {
    const response = await messageService.getAllMessages(req);
    // console.log(response);
    // res.send("commented");
    return res.status(201).json({
      success: true,
      message: response,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};


export default{ allMessages, sendMessage };