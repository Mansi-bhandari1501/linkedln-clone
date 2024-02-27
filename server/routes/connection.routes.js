import express  from "express";
import { requireSignIn } from "../middlewares/auth.middleware.js";
import { connectionController } from "../controllers/index.js";
const {sendConnection,removeConnection,receivedConnection,pendingConnection,activeConnection,updateStatusConnection} = connectionController;

const router = express.Router();

router.post('/',requireSignIn,sendConnection);
router.patch('/',requireSignIn,updateStatusConnection);
router.get('/:_id',requireSignIn,receivedConnection);
router.delete('/:_id',requireSignIn,removeConnection);
router.get('/pending/:_id',requireSignIn,pendingConnection);
router.get('/active/:_id',requireSignIn,activeConnection);

export default router;