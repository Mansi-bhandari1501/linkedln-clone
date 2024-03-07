import express  from "express";
import { getNotifications, sendNotifications } from "../service/notification.service.js";

const router = express.Router();

router.post('/',sendNotifications);
router.get('/',getNotifications);


export default router;