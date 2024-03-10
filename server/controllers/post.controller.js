import errorHandler from "../lib/utils.js";
import postService from "../service/post.service.js";

export const createPost = async (req, res) => {
  const { userId, title, body } = req.body;

  console.log("body", req.body);
  try {
    const { userId, title, body } = req.body;
    const response = await postService.createPost(req);
    console.log(response);
    return res.status(201).json({
      success: true,
      post: response.post,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

export const fetchAllPosts = async (req, res) => {
  // return res.json("hello")
  try {
    console.log("fetch posts----->>>>>");
    // console.log(req)
    const post = await postService.fetchAllPosts(req);
    console.log("RESPONSE", post);
    if (!post || post.length === 0) {
      return res.status(204);
    }
    return res.status(200).json({
      posts: post.posts,
      count: post.postsCount, // handle in frontend also
      // success: true,
    });
  } catch (error) {
    console.log(error);
    errorHandler(res, error);
  }
};

export const fetchPost = async (req, res) => {
  try {
    const response = await postService.fetchPost(req);

    if (!response) {
      return res.status(204);
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
