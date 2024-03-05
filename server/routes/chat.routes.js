import express  from "express";
import { createChat,fetchChats,createGroupChat,renameGroup ,removeFromGroup,addToGroup} from "../controllers/chat.controller.js";
import { requireSignIn } from "../middlewares/auth.middleware.js";

// import upload from "../middlewares/upload.middleware.js"
const router = express.Router();


router.post('/',requireSignIn, createChat);
router.get("/:logId",fetchChats);
router.post("/group",requireSignIn, createGroupChat);
router.put("/renameChat",requireSignIn, renameGroup);
router.put("/groupRemove",requireSignIn, removeFromGroup);
router.put("/groupAdd",requireSignIn, addToGroup);

export default router;
