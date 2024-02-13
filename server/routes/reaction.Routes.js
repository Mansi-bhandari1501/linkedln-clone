import express  from "express";
import {requireSignIn,} from "../middlewares/authMiddleware.js";
import { reactController } from "../controllers/reaction.controller.js";

const router = express.Router()

router.post('/',requireSignIn,reactController)
// router.get('/',requireSignIn)
router.get('/:_id',requireSignIn)
router.delete('/:_id',requireSignIn)
router.patch('/:_id',requireSignIn)

export default router;
