import express  from "express";
import {requireSignIn,} from "../middlewares/auth.middleware.js";
import {reactionController} from "../controllers/index.js";
const {saveReactions,getReactions,updateReaction,removeReaction} = reactionController;
const router = express.Router()

router.post('/', requireSignIn,saveReactions)
router.get('/:postId', requireSignIn,getReactions)
router.get('/userReaction/:postId', requireSignIn,getReactions)
router.put('/:reactId',requireSignIn, updateReaction )
router.delete('/:reactId',requireSignIn, removeReaction)

export default router;
