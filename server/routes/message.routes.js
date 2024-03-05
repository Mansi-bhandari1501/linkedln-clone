import express  from "express";
import { allMessages,sendMessage} from "../controllers/message.controller.js";
import { requireSignIn } from "../middlewares/auth.middleware.js";

// import upload from "../middlewares/upload.middleware.js"
const router = express.Router();

router.post("/",requireSignIn, sendMessage);
router.get("/:chatId",requireSignIn, allMessages);
export default router;