import express  from "express";
import { allMessages,sendMessage} from "../controllers/message.controller.js";
import { requireSignIn } from "../middlewares/auth.middleware.js";

// import upload from "../middlewares/upload.middleware.js"
const router = express.Router();

router.get("/:chatId",requireSignIn, allMessages);
router.post("/",requireSignIn, sendMessage);
export default router;