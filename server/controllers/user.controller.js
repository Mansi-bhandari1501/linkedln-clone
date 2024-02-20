import { comparePassword, hash_password } from '../helpers/auth.helper.js'
// import {user_service} from '../service'
import postModel from '../models/post.model.js';
import UserModel from '../models/user.model.js';
import JWT from "jsonwebtoken";
import { user_service } from '../service/index.js';
import handle_error from '../lib/utils.js';

// const handle_error = (res,error) => {
//   if(error.name === 'CONFLICT') {
//     return res.status(409).send({
//       success: false,
//       message: error.message,
//     })
//   }
// }

export const  getAllUsers =async(req, res)=> {
  let users= await user_service.getUsersPaginated(req)

  if (users && users.length > 0) {
    // res.json(users)
    res.status(200).send({
      success: true,
      user: users,
      
    });
  } else {
    res.status(204).send({
      message: "no user found",
    });
  }
}

export const registerController = async (req, res) => {
    try {
      const response = await user_service.registerUser(req);
    
      res.status(201).send({
        success:true,
        message:'user Register Successfully',
        user : response.user
      })
    } catch (error) {

      handle_error(res,error);
       
    }
}

// POST LOGIN
export const loginController = async (req, res) => {
  try {
    const response = await user_service.loginUser(req);
  
     res.status(200).send({
        success: true,
        message: "login successfully",
        user: response.user,
        token:response.token,
      });
  } catch (error) {
    handle_error(res,error);
  }}


export default {
  loginController,
  registerController,
  getAllUsers
}
