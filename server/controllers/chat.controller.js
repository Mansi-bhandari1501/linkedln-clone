import errorHandler from "../lib/utils.js";
import chatModel from "../models/chat.model.js";
import UserModel from "../models/user.model.js";
import chatService from "../service/chat.service.js";

export const createChat = async (req, res) => {
  try {
    const response = await chatService.accessChat(req);
    console.log(response);
    // res.send("commented");
    return res.status(201).json({
      success: true,
      chat: response,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};
// export const accessChat = async (req, res) => {
//     const { userId,logId } = req.body;
//     console.log(req.user._id )
//     console.log(userId,logId)
//     if (!userId) {
//       console.log("UserId param not sent with request");
//       return res.sendStatus(400);
//     }
  
//     var isChat = await chatModel.find({
//       isGroupChat: false,
//       $and: [
//         { users: { $elemMatch: { $eq: logId } } },
//         { users: { $elemMatch: { $eq: userId } } },
//       ],
//     })
//       .populate("users", "-password")
//       .populate("latestMessage");
  
//     isChat = await UserModel.populate(isChat, {
//       path: "latestMessage.sender",
//       select: "name pic email",
//     });
  
//     if (isChat.length > 0) {
//       res.send(isChat[0]);
//     } else {
//       var chatData = {
//         chatName: "sender",
//         isGroupChat: false,
//         users: [logId, userId],
//       };
  
//       try {
//         const createdChat = await chatModel.create(chatData);
//         const FullChat = await chatModel.findOne({ _id: createdChat._id }).populate(
//           "users",
//           " "
//         );
//         res.status(200).json(FullChat);
//       } catch (error) {
//         res.status(400);
//         console.log(error)
//         throw new Error(error.message);
//       }
//     }
//   };
   
  export const fetchChats = async (req, res) => {
    try {
        // console.log("USER_Id",req.user)

        const { logId } = req.body;
        console.log(logId)
      chatModel.find({ users: { $elemMatch: { $eq: logId } } })
        .populate("users", "-password")
        .populate("groupAdmin", "-password")
        .populate("latestMessage")
        .sort({ updatedAt: -1 })
        .then(async (results) => {
          results = await UserModel.populate(results, {
            path: "latestMessage.sender",
            select: "name pic email",
          });
          res.status(200).send(results);
        });
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  };

 export const createGroupChat = async (req, res) => {
    if (!req.body.users || !req.body.name) {
      return res.status(400).send({ message: "Please Fill all the feilds" });
    }
  
    var users = JSON.parse(req.body.users);
  
    if (users.length < 2) {
      return res
        .status(400)
        .send("More than 2 users are required to form a group chat");
    }
  console.log(req.user)
    users.push(req.user);
  
    try {
      const groupChat = await chatModel.create({
        chatName: req.body.name,
        users: users,
        isGroupChat: true,
        groupAdmin: req.user,
      });
  
      const fullGroupChat = await chatModel.findOne({ _id: groupChat._id })
        .populate("users", "-password")
        .populate("groupAdmin", "-password");
  
      res.status(200).json(fullGroupChat);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  };

  export const renameGroup = async (req, res) => {
    const { chatId, chatName } = req.body;
  
    const updatedChat = await chatModel.findByIdAndUpdate(
      chatId,
      {
        chatName: chatName,
      },
      {
        new: true,
      }
    )
      .populate("users", "-password")
      .populate("groupAdmin", "-password");
  
    if (!updatedChat) {
      res.status(404);
      throw new Error("Chat Not Found");
    } else {
      res.json(updatedChat);
    }
  };
  
  export const removeFromGroup = async (req, res) => {
    const { chatId, userId } = req.body;
  
    // check if the requester is admin
  
   const removed = await chatModel.findByIdAndUpdate(
    chatId,
    {
      $pull: { users: userId },
    },
    {
      new: true,
    }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  if (!removed) {
    res.status(404);
    throw new Error("Chat Not Found");
  } else {
    res.json(removed);
  }
};


export const addToGroup = async (req, res) => {
  const { chatId, userId } = req.body;

  // check if the requester is admin

  const added = await chatModel.findByIdAndUpdate(
    chatId,
    {
      $push: { users: userId },
    },
    {
      new: true,
    }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  if (!added) {
    res.status(404);
    throw new Error("Chat Not Found");
  } else {
    res.json(added);
  }
};

  export default {
    createChat,
    fetchChats,
    createGroupChat,
    renameGroup,
    addToGroup,
    removeFromGroup
  };