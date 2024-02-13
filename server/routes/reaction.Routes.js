import express  from "express";
import {requireSignIn,} from "../middlewares/authMiddleware.js";
import {saveReactions,getReactions, updateReaction, removeReaction} from "../controllers/reaction.controller.js";

const router = express.Router()

router.post('/reactions/:postId', requireSignIn,saveReactions)
router.get('/reaction', requireSignIn,getReactions)
router.put('/reaction/:reactId',requireSignIn, updateReaction )
router.delete('/reaction/:reactId',requireSignIn, removeReaction)

export default router;
