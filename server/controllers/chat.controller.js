import errorHandler from "../lib/utils.js";
import chatModel from "../models/chat.model.js";
import UserModel from "../models/user.model.js";
import chatService from "../service/chat.service.js";

export const createChat = async (req, res) => {
  try {
    const response = await chatService.accessChat(req);
    // console.log(response);
    // res.send("commented");
    return res.status(201).json({
      success: true,
      chat: response,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};
export const fetchChats = async (req, res) => {
  try {
    const results = await chatService.getChats(req);
    // console.log("<<<<------>>>>>>",results);
    return res.status(200).json({
      success: true,
      chat: results,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};
   
export const createGroupChat = async (req, res) => {
  try {
    const results = await chatService.newGroupChat(req);
    // console.log(results);
    return res.status(200).json({
      success: true,
      chat: results,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};
   
export const renameGroup = async (req, res) => {
  try {
    const results = await chatService.updateGroupName(req);
    // console.log(results);
    return res.status(200).json({
      success: true,
      chat: results,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};
   
export const removeFromGroup = async (req, res) => {
  try {
    const results = await chatService.removeUserGroup(req);
    // console.log(results);
    return res.status(200).json({
      success: true,
      chat: results,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};
   
export const addToGroup = async (req, res) => {
  try {
    const results = await chatService.addUserGroup(req);
    // console.log(results);
    return res.status(200).json({
      success: true,
      chat: results,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};
   

  // export const renameGroup = async (req, res) => {
  //   const { chatId, chatName } = req.body;
  
  //   const updatedChat = await chatModel.findByIdAndUpdate(
  //     chatId,
  //     {
  //       chatName: chatName,
  //     },
  //     {
  //       new: true,
  //     }
  //   )
  //     .populate("users", "-password")
  //     .populate("groupAdmin", "-password");
  
  //   if (!updatedChat) {
  //     res.status(404);
  //     throw new Error("Chat Not Found");
  //   } else {
  //     res.json(updatedChat);
  //   }
  // };
  
//   export const removeFromGroup = async (req, res) => {
//     const { chatId, userId } = req.body;
  
//     // check if the requester is admin
  
//    const removed = await chatModel.findByIdAndUpdate(
//     chatId,
//     {
//       $pull: { users: userId },
//     },
//     {
//       new: true,
//     }
//   )
//     .populate("users", "-password")
//     .populate("groupAdmin", "-password");

//   if (!removed) {
//     res.status(404);
//     throw new Error("Chat Not Found");
//   } else {
//     res.json(removed);
//   }
// };


// export const addToGroup = async (req, res) => {
//   const { chatId, userId } = req.body;

//   // check if the requester is admin

//   const added = await chatModel.findByIdAndUpdate(
//     chatId,
//     {
//       $push: { users: userId },
//     },
//     {
//       new: true,
//     }
//   )
//     .populate("users", "-password")
//     .populate("groupAdmin", "-password");

//   if (!added) {
//     res.status(404);
//     throw new Error("Chat Not Found");
//   } else {
//     res.json(added);
//   }
// };

  export default {
    createChat,
    fetchChats,
    createGroupChat,
    renameGroup,
    addToGroup,
    removeFromGroup
  };