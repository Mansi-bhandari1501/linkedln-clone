import { commentModel } from "../models/comment.model.js"


export const commentController = async (payload) => {
  try {

    const newCommentData = {
      userid: payload.body.userid,
      postid: payload.body.postid,
      body: payload.body.body,
    };

    let newComment = await new commentModel(newCommentData).save();
    console.log(payload.body);
    // res.send("commented");
    // res.status(201).json({
    //   success:true,
    //   post:newComment,
    // });
    return { newComment };
  }
  catch (error) {
    throw error;
  }
}
export const deleteComment = async (payload) => {
  let data = await commentModel.findByIdAndDelete(payload.params)
  return { data };
}

export const updateComment = async (payload) => {
  try {
    let data = await commentModel.findByIdAndUpdate
      (
        payload.params, {
        $set: payload.body
      }
      );
    console.log(payload.body)
    return { data };
  }
  catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }

}
export const fetchAllComments = async (payload) => {
  console.log(payload.body)
  const getposts = await commentModel.find();
  return { getposts };
}
export const fetchComment = async (payload) => {
  console.log(payload.params)
  const getpost = await commentModel.findById(payload.params);
  return { getpost };
}



export const getCommentPaginated = async (page) => {
  let resultsPerPage = 1

  return await commentModel.find({})
    .sort({ createdAt: 'descending' })
    .lean()
    .limit(resultsPerPage)
    .skip(page * resultsPerPage)
}

const comment_service = {
  getCommentPaginated,
  fetchComment,
  fetchAllComments,
  updateComment,
  deleteComment,
  commentController,
}

export default comment_service;