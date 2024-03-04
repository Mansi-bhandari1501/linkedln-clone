import chatModel from "../models/chat.model.js";
import UserModel from "../models/user.model.js";

export const accessChat = async (req, res) => {
    const { userId,logId } = req.body;
    // console.log(req.user._id )
    console.log(userId,logId)
    if (!userId) {
      console.log("UserId param not sent with request");
      return res.sendStatus(400);
    }
  
    var isChat = await chatModel.find({
      isGroupChat: false,
      $and: [
        { users: { $elemMatch: { $eq: logId } } },
        { users: { $elemMatch: { $eq: userId } } },
      ],
    })
      .populate("users", "-password")
      .populate("latestMessage");
  
    isChat = await UserModel.populate(isChat, {
      path: "latestMessage.sender",
      select: "name pic email",
    });
  
    if (isChat.length > 0) {
      res.send(isChat[0]);
    } else {
      var chatData = {
        chatName: "sender",
        isGroupChat: false,
        users: [logId, userId],
      };
  
      try {
        const createdChat = await chatModel.create(chatData);
        const FullChat = await chatModel.findOne({ _id: createdChat._id }).populate(
          "users",
          " "
        );
        res.status(200).json(FullChat);
      } catch (error) {
        res.status(400);
        console.log(error)
        throw new Error(error.message);
      }
    }
  };

  const chatService= {
    accessChat,
    // fetchChats,
    // createGroupChat,
    // renameGroup,
    // addToGroup,
    // removeFromGroup
  };
  export default chatService;