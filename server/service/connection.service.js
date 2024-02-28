import connectionModel from "../models/connection.model.js";

export const createConnection = async (payload) => {
  try {
    //   const {receiverId} = payload.params
    const { receiverId, senderId } = payload.body;

    console.log("connection object", payload.body);

    // console.log("receiver", receiver)

    if (!receiverId || !senderId) {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "Please provide all fields",
      });
    }

    // console.log(receiver, sender)
    const newConnection = await new connectionModel({
      receiver: receiverId,
      sender: senderId,
    }).save();

    console.log(newConnection);
    return newConnection;
  } catch (error) {
    throw error;
  }
};
// export const rejectConnection = async (payload) => {
//     try {
//         const { id } = payload.params;
//         console.log("connection id", payload.params);
//         const data = await connectionModel.findByIdAndDelete(id);
//         return data;
//     } catch (error) {
//         throw error;
//     }
// }
export const rejectConnection = async (payload) => {
  try {
    const { senderId } = payload.params;
    console.log("connection id", payload.params);
    const data = await connectionModel.findOneAndUpdate(
      { sender: senderId },
      {
        $set: { status: "rejected" }
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
};
export const showReceivedConnection = async (payload) => {
  try {
    const receiverId = payload.params;
    const data = await connectionModel
      .find({ receiver: receiverId, status: "pending" })
      .populate("sender", "firstName company city")
      console.log("DATAAAA",data)
    return data;
  } catch (error) {
    throw error;
  }
};
export const showPendingConnection = async (payload) => {
  try {
    const senderId = payload.params;
    const data = await connectionModel.find({
      sender: senderId,
      status: "pending",
    });
    return data;
  } catch (error) {
    throw error;
  }
};
export const showActiveConnection = async (payload) => {
  try {
    const userId = payload.params;
    console.log(userId);
    const data = await connectionModel.find({
      $or: [
        {
          sender: userId,
        },
        {
          receiver: userId,
        },
      ],
      status: "active",
    });
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
export const updateConnection = async (payload) => {
  try {
    const { senderId, receiverId, status } = payload.body;
    console.log("body", status);
    const data = await connectionModel.findOneAndUpdate(
      {
        $and: [
          {
            sender: senderId,
          },
          {
            receiver: receiverId,
          },
        ],
      },
      {
        $set: { status: status },
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

const connectionService = {
  createConnection,
  rejectConnection,
  showReceivedConnection,
  showPendingConnection,
  showActiveConnection,
  updateConnection,
};

export default connectionService;
