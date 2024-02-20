import handle_error from "../lib/utils.js";
import postModel from "../models/post.model.js";
import post_service from "../service/post.service.js";

export const createPost = async (req, res) => {
  try {
    const response = await post_service.createPost(req);
    res.status(201).json({
      success: true,
      post: response.newPost,
    });
  } catch (error) {
    handle_error(res, error);
  }
};

export const fetchAllPosts = async (req, res) => {
  try {
    const response = await post_service.fetchAllPosts(req);
    if(!response || response.getposts.length === 0) {
      res.status(204)
    }
    res.status(201).json({
      success: true,
      getposts: response.getposts,
    });
  } catch (error) {
    handle_error(res, error);
  }
};


export const fetchPost = async (req, res) => {
  try {
    const response = await post_service.fetchPost(req);
    res.status(201).json({
      success: true,
      getpost: response.getpost,
    });
  } catch (error) {
    handle_error(res, error);
  }
};

export const deletePost = async (req, res) => {
  try {
    const response = await post_service.deletePost(req);
    res.status(200).send({
      success: true,
      message: "post deleted",
      data: response.data,
      // deletedBy: response.deletedBy
    });
  } catch (error) {
    handle_error(res, error);
  }
};

// let data = await postModel.findByIdAndDelete(req.params)

export const updatePost = async (req, res) => {
  try {
    const response = await post_service.updatePost(req);
    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    handle_error(res, error);
  }
};
export default {
  updatePost,
  deletePost,
  fetchAllPosts,
  fetchPost,
  createPost,
};
