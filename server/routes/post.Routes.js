import express  from "express";
import {requireSignIn,} from "../middlewares/auth.middleware.js";
import {postController} from "../controllers/index.js";
const { deletePost, fetchAllPosts, fetchPost, createPost, updatePost } =postController;
import upload from "../middlewares/upload.middleware.js"
const router = express.Router();

router.post('/',requireSignIn,upload,createPost);
router.get('/',requireSignIn,fetchAllPosts);
router.get('/:_id',requireSignIn,fetchPost);
router.delete('/:_id',requireSignIn,deletePost);
router.patch('/:_id',requireSignIn,updatePost);

export default router;
