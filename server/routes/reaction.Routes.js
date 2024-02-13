import express  from "express";
import {requireSignIn,} from "../middlewares/authMiddleware.js";

const router = express.Router()

router.post('/create',requireSignIn)
router.get('/fetchAllposts',requireSignIn)
router.get('/fetchpost/:_id',requireSignIn)
router.delete('/:_id',requireSignIn)
router.patch('/:_id',requireSignIn)

export default router;
