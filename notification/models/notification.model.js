import mongoose from "mongoose";

const notificationsSchema = new mongoose.Schema(
  {
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
    },
    notificationType: {
        type:String,
        enum:['PostType','ReactionType','ConnectionType'],
    },
    content: {
        type:String,
    },

   
  },
  { timestamps: true }
);
const notificationsModel = mongoose.model("notifications", notificationsSchema);
export default notificationsModel;
