import chatModel from "../models/chat.model.js";
import UserModel from "../models/user.model.js";

export const accessChat = async (payload) => {
  const { userId, logId } = payload.body;
  // console.log(req.user._id )
  console.log(userId, logId)
  if (!userId) {
    console.log("UserId param not sent with request");
    throw Object.assign(new Error(), { name: "BAD_REQUEST", message: 'Invalid userId' });
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
  console.log(isChat)
  if (isChat.length > 0) {
    return (isChat[0]);
  }
  else {
    var chatData = {
      chatName: "senderName",
      isGroupChat: false,
      users: [logId, userId],
    };

    try {
      const createdChat = await chatModel.create(chatData);
      console.log("ChatCreated", createdChat)
      const FullChat = await chatModel.findOne({ _id: createdChat._id }).populate(
        "users",
        "firstName lasName "
      );
      return FullChat;
      // res.status(200).json(FullChat);
    } catch (error) {
      // res.status(400);
      console.log(error)
      throw error
    }
  }
};

export const getChats = async (payload) => {
  try {
    const { logId } = payload.params;
    // console.log("logId",logId)
    const results = chatModel.find({ users: { $elemMatch: { $eq: logId } } })
      .populate("users", "-password")
      .populate("groupAdmin", "-password")
      .sort({ updatedAt: 'descending' })
      // .populate("latestMessage")
      // .sort({ updatedAt: -1 })
    // .then(async (results) => {
    //   results = await UserModel.populate(results, {
    //     path: "latestMessage.sender",
    //     select: "name pic email",
    //   });
    //   // res.status(200).send(results);
    // console.log("RESULTS",results)
    // return results;
    // });
    // console.log("RESULTS----->>>>", results)
    return results;
  } catch (error) {
    // res.status(400);
    throw error;
  }
};

export const newGroupChat = async (payload) => {

  if (!payload.body.users || !payload.body.name) {
    throw Object.assign(new Error(), { name: "BAD_REQUEST", message: "Please Fill all the feilds" });
  }
  var users = payload.body.users;
// console.log("length",users.length)
  if (users.length < 3) {
    throw Object.assign(new Error(), { name: "BAD_REQUEST", message: "More than 2 users are required to form a group chat" });
  }
  console.log(payload.user)
  users.push(payload.user);

  try {
    const groupChat = await chatModel.create({
      chatName: payload.body.name,
      users: users,
      isGroupChat: true,
      groupAdmin: payload.user,
    });

    const fullGroupChat = await chatModel.findOne({ _id: groupChat._id })
      .populate("users", "-password")
      .populate("groupAdmin", "-password");
    return fullGroupChat;
  } catch (error) {
    throw error;
  }
};

export const updateGroupName = async (payload) => {
  const { chatId, chatName } = payload.body;

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
    throw Object.assign(new Error(), { name: "BAD_REQUEST", message: "Chat Not Found"});
    // throw new Error("Chat Not Found");
  } else {
    return updatedChat;
    // res.json(updatedChat);
  }
};

export const removeUserGroup = async (payload) => {
  const { chatId, userId } = payload.body;

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
  throw Object.assign(new Error(), { name: "BAD_REQUEST", message: "User not removed"});

  // throw new Error("Chat Not Found");
} else {
  return removed;
}
};


export const addUserGroup = async (payload) => {
const { chatId, userId } = payload.body;

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
    throw Object.assign(new Error(), { name: "BAD_REQUEST", message: "User not removed"});
} else {
 return added;
}
};

const chatService = {
  accessChat,
  getChats,
  newGroupChat,
  updateGroupName,
  removeUserGroup,
  addUserGroup
};
export default chatService;