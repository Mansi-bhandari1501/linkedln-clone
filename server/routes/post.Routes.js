import express  from "express";
import {requireSignIn,} from "../middlewares/authMiddleware.js";
import { deletePost, fetchAllPosts, fetchPost, postController, updatePost } from "../controllers/post.controller.js";

const router = express.Router();

router.post('/create',requireSignIn,postController)
router.get('/fetchAllposts',requireSignIn,fetchAllPosts)
router.get('/fetchpost/:_id',requireSignIn,fetchPost)
router.delete('/:_id',requireSignIn,deletePost)
router.patch('/:_id',requireSignIn,updatePost)

export default router;
