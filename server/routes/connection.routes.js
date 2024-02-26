import express  from "express";
import { requireSignIn } from "../middlewares/auth.middleware.js";
import { connectionController } from "../controllers/index.js";
const {sendConnection,removeConnection,receivedConnection,pendingConnection,activeConnection,updateStatusConnection} = connectionController;

const router = express.Router();

router.post('/',requireSignIn,sendConnection);
router.patch('/',updateStatusConnection);
router.get('/:_id',receivedConnection);
router.delete('/:_id',removeConnection);
router.get('/pending/:_id',pendingConnection);
router.get('/active/:_id',activeConnection);

export default router;