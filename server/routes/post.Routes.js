import express  from "express";
import {deletePost, fetchAllPosts, postController, updatePost} from '../controllers/post.Controllers.js'
import {requireSignIn,} from "../middlewares/authMiddleware.js";
import { fetchPost } from "../controllers/post.Controllers.js";

const router = express.Router()

router.post('/create',requireSignIn,postController)
router.get('/fetchAllposts',requireSignIn,fetchAllPosts)
router.get('/fetchpost/:_id',requireSignIn,fetchPost)
router.delete('/:_id',requireSignIn,deletePost)
router.patch('/:_id',requireSignIn,updatePost)

export default router;
