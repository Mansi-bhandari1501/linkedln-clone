import express  from "express";
import {commentController} from '../controllers/index.js';

const { createComment, deleteComment, fetchComment, getAllcomments, updateComment } = commentController;
import { requireSignIn } from "../middlewares/auth.middleware.js";

const router = express.Router()


router.post('/',createComment);
router.delete('/:_id',requireSignIn,deleteComment);
router.put('/:_id',requireSignIn,updateComment);
router.get('/',getAllcomments);
router.get('/:_id',fetchComment);

// router.get('/fetchAllcomments',requireSignIn,fetchAllComments)

export default router;
