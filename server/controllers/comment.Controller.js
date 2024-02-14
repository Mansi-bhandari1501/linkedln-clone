import handle_error from "../lib/utils.js";
import { commentModel } from "../models/comment.model.js";
import { comment_service } from "../service/index.js";

export const createComment = async (req, res) => {
  try {
    const response = await comment_service.createComment(req);
    console.log(req.body);
    res.send("commented");
    res.status(201).json({
      success: true,
      comment: response.newComment,
    });
  } catch (error) {
    handle_error(res, error);
  }
};
export const deleteComment = async (req, res) => {
  try {
    const response = await comment_service.deleteComment(req);
    console.log(req.body);
    res.status(201).json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    handle_error(res, error);
  }
};

export const updateComment = async (req, res) => {
  try {
    const response = await comment_service.updateComment(req);
    console.log(req.body);
    res.status(201).json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    handle_error(res, error);
  }
};

export const fetchAllComments = async (req, res) => {
  try {
    const response = await comment_service.fetchAllComments(req);
    console.log(req.body);
    res.status(201).json({
      success: true,
      getComments: response.getComments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
  // console.log(req.body)
  // const getposts= await commentModel.find();
  // res.send(getposts);
};
export const fetchComment = async (req, res) => {
  try {
    const response = await comment_service.fetchComment(req);
    console.log(req.body);
    res.status(201).json({
      success: true,
      getComment: response.getComment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
  // console.log(req.params)
  // const getpost= await commentModel.findById(req.params);
  // res.send(getpost);
};

export const getAllcomments = async (req, res) => {
  let page = req.query.page; //starts from 0
  let comments = await comment_service.getCommentPaginated(page);
  if (comments && comments.length > 0) {
    res.json(comments);
  } else {
    res.json("comments not found");
  }
};
export default {
  getAllcomments,
  updateComment,
  fetchAllComments,
  fetchComment,
  createComment,
  deleteComment,
};
