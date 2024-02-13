import express  from "express";
import {loginController,  registerController} from '../controllers/user.controller.js'
import {getAllUsers} from "../controllers/user.controller.js";
//router object
const router = express.Router()

//routing 
//REGISTER || METHOD POST
 router.post('/register',registerController);

 //LOGIN || 
 router.post('/login', loginController)
 router.get('/getuser', getAllUsers)

 export default router;
