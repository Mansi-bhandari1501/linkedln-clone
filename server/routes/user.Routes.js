import express  from "express";
import { userController } from '../controllers/index.js';
import { requireSignIn } from "../middlewares/auth.middleware.js";
const { loginController,  registerController, getAllUsers, userDetail,followController} = userController;
const router = express.Router()


 router.get('/:_id', requireSignIn,getAllUsers);
 router.post('/register',registerController);
 router.post('/login', loginController);
 router.put('/userDetails/:_id',requireSignIn, userDetail);
 export default router;
