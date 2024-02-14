import express  from "express";
import {userController} from '../controllers/index.js';
const {loginController,  registerController, getAllUsers} = userController;
const router = express.Router()


 router.post('/register',registerController);
 router.post('/login', loginController);
 router.get('/', getAllUsers);

 export default router;
