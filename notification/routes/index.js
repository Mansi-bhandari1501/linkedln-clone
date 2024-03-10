import express  from "express";
import {  sendNotifications } from "../service/notification.service.js";
import { createNotification } from "../controller/notification.controller.js";

const router = express.Router();

router.post('/',sendNotifications);
router.get('/',createNotification);


export default router;