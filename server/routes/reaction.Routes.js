import express  from "express";
import {requireSignIn,} from "../middlewares/auth.middleware.js";
import {reactionController} from "../controllers/index.js";
const {saveReactions,getReactions,updateReaction,removeReaction} = reactionController;
const router = express.Router()

router.post('/:postId', requireSignIn,saveReactions)
router.get('/', requireSignIn,getReactions)
router.put('/:reactId',requireSignIn, updateReaction )
router.delete('/:reactId',requireSignIn, removeReaction)

export default router;
