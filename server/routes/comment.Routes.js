import express  from "express";
import { commentController, deleteComment, fetchAllComments, fetchComment, updateComment } from "../controllers/comment.Controller.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router()

router.get('/',requireSignIn,(req,res)=>{
    res.send("commentsss");
})
router.post('/',requireSignIn,commentController)
router.delete('/:_id',requireSignIn,deleteComment)
router.put('/:_id',requireSignIn,updateComment)
router.get('/fetchAllcomments',requireSignIn,fetchAllComments)
router.get('/fetchcomment/:_id',requireSignIn,fetchComment)

export default router;
