import express  from "express";
import {commentController} from '../controllers/index.js';

const { createComment, deleteComment, fetchComment, getAllcomments, updateComment } = commentController;
import { requireSignIn } from "../middlewares/auth.middleware.js";
// import { fetchAllComments } from "../service/comment.service.js";

const router = express.Router()


router.post('/',createComment);
router.delete('/:_id',requireSignIn,deleteComment);
router.put('/:_id',requireSignIn,updateComment);
router.get('/',getAllcomments);
router.get('/:id',fetchComment);

// router.get('/',requireSignIn,fetchAllComments)

export default router;
