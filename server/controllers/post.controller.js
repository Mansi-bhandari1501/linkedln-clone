import errorHandler from "../lib/utils.js";
import postService from "../service/post.service.js";

export const createPost = async (req, res) => {
  const {userId,title,body}= req.body;
  
  console.log("body",req.body)
  try {
    const {userId,title,body}= req.body;
    const response = await postService.createPost(req);
    console.log(response)
    return res.status(201).json({
      success: true,
      post: response.post,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

export const fetchAllPosts = async (req, res) => {
  try {
    const response = await postService.fetchAllPosts(req);

    if(!response || response.posts.length === 0) {
      return res.status(204)
    }

    return res.status(200).json({
      success: true,
      posts: response.posts, // handle in frontend also 
    });

  } catch (error) {
    errorHandler(res, error);
  }
};


export const fetchPost = async (req, res) => {
  try {
    const response = await postService.fetchPost(req);

    if(!response) {
      return res.status(204)
    }

    return res.status(200).json({
      success: true,
      post: response.post,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

export const deletePost = async (req, res) => {
  try {
    const response = await postService.deletePost(req);

    return res.status(200).send({
      success: true,
      message: "post deleted",
      data: response.data,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

// let data = await postModel.findByIdAndDelete(req.params)

export const updatePost = async (req, res) => {
  try {
    const response = await postService.updatePost(req);
    console.log(response.data);
    return res.status(200).send({
      success: true,
      message: "post updated successfully",
      data: response.data,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

export default {
  updatePost,
  deletePost,
  fetchAllPosts,
  fetchPost,
  createPost,
};
