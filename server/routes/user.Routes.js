import express  from "express";
import { userController } from '../controllers/index.js';
const { loginController,  registerController, getAllUsers, userDetail} = userController;
const router = express.Router()


 router.post('/register',registerController);
 router.post('/login', loginController);
 router.patch('/:userid', userDetail);
 router.get('/', getAllUsers);

 export default router;
