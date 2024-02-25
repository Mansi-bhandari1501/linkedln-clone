import errorHandler from "../lib/utils.js";
import { commentModel } from "../models/comment.model.js";
import { commentService } from "../service/index.js";

export const createComment = async (req, res) => {
  try {
    const response = await commentService.createComment(req);
    // console.log(req.body);
    // res.send("commented");
    return res.status(201).json({
      success: true,
      comment: response.newCommentData,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

export const deleteComment = async (req, res) => {
  try {
    const response = await commentService.deleteComment(req);
    console.log(req.body);
    res.status(201).json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

export const updateComment = async (req, res) => {
  try {
    const response = await commentService.updateComment(req);
    console.log(req.body);
    res.status(201).json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

export const fetchAllComments = async (req, res) => {
  try {
    const response = await commentService.fetchAllComments(req);
    console.log(req.body);
    res.status(201).json({
      success: true,
      comment: response.comments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
 
};
export const fetchComment = async (req, res) => {
  try {
    const response = await commentService.fetchComment(req);
    console.log(req.body);
    return res.status(201).json({
      success: true,
      comment: response.comment,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
  // console.log(req.params)
  // const getpost= await commentModel.findById(req.params);
  // res.send(getpost);
};

export const getAllcomments = async (req, res) => {
  // let page = req.query.page; //starts from 0
  let comments = await commentService.getCommentPaginated(req);
  if (comments && comments.length > 0) {
    return res.status(200).send({
      success: true,
      comment: comments,
      
    });
  } else {
    return res.status(204).send({
      message: "no comment found",
    });
};
}
export default {
  getAllcomments,
  updateComment,
  fetchAllComments,
  fetchComment,
  createComment,
  deleteComment,
};
