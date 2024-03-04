import express  from "express";
import { createChat,fetchChats,createGroupChat,renameGroup ,removeFromGroup,addToGroup} from "../controllers/chat.controller.js";
import { requireSignIn } from "../middlewares/auth.middleware.js";

// import upload from "../middlewares/upload.middleware.js"
const router = express.Router();


router.post('/',requireSignIn, createChat);
router.get("/", requireSignIn,fetchChats);
router.post("/group",requireSignIn, createGroupChat);
router.put("/rename",requireSignIn, renameGroup);
router.put("/groupremove",requireSignIn, removeFromGroup);
router.put("/groupadd",requireSignIn, addToGroup);

export default router;
