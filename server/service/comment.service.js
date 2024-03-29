import { commentModel } from "../models/comment.model.js"


export const createComment = async (payload) => {
  try {
    // const {postId} = payload.params
    const {postId,userId, body} = payload.body;

    console.log("body object",payload.body);

    console.log(userId)

    if(!userId || !body || !postId)  {
      throw Object.assign(new Error(), {name: "BAD_REQUEST", message: "Please provide all fields"});
    }

     console.log(postId,userId,body)
    const newCommentData =  await new commentModel({postId,userId,body}).save();

    console.log(newCommentData);
    return newCommentData ;
  }
  catch (error) {
    throw error;
  }
}

export const deleteComment = async (payload) => {
  try{

    let data = await commentModel.findByIdAndDelete(payload.params)
    return { data };
  }catch (error) {
    throw error;
  }
}

export const updateComment = async (payload) => {
  try {
    let data = await commentModel.findByIdAndUpdate
      (
        payload.params, {
        $set: payload.body
      }
      )
      .populate("userId", "firstName lasName company city")      ;
    console.log(payload.body)
    return { data };
  }
  catch (error) {
    throw error;
  }

}
export const fetchAllComments = async (payload) => {
  console.log(payload.body)
  const comments = await commentModel.find()
  .populate("userId", "firstName lasName companyname ")
      ;
  return { comments };
}
export const fetchComment = async (payload) => {
  console.log(payload.params)
  const {postId} =payload.params
  const getComment = await commentModel.findById({postId:postId}) 
   .populate("userId", "firstName lasName companyname city");
  return { getComment };
}



export const getCommentPaginated = async (payload) => {
  const page= payload.params
  let resultsPerPage = 5

  return await commentModel.find({}) 
  .populate("userId", "firstName lasName company city")    .sort({ createdAt: 'descending' })
    .lean()
    .limit(resultsPerPage)
    .skip(page * resultsPerPage)
}

const commentService = {
  getCommentPaginated,
  fetchComment,
  fetchAllComments,
  updateComment,
  deleteComment,
  createComment,
}

export default commentService;