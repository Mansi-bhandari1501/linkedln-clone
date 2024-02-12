import express  from "express";
import {loginController, postController, registerController} from '../controllers/authController.js'
import {requireSignIn,} from "../middlewares/authMiddleware.js";
//router object
const router = express.Router()

//routing 
//REGISTER || METHOD POST
 router.post('/register',registerController);

 //LOGIN || 
 router.post('/login', loginController)

 router.post('/posts',requireSignIn,postController)
 //test routes
//  router.get('/test',requireSignIn,isAdmin,testController);

 export default router;
