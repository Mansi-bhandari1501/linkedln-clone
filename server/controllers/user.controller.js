import { userService } from '../service/index.js';
import errorHandler from '../lib/utils.js';

export const  getAllUsers =async(req, res)=> {
  let users= await userService.getUsers(req)

  if (users && users.length > 0) {
    return res.status(200).send({
      success: true,
      user: users,
    });
  } else {
    return res.status(204);
  }
}

export const registerController = async (req, res) => {
    try {
      const response = await userService.registerUser(req);
    
      return res.status(201).send({
        success:true,
        message:'User Register Successfully',
        user : response.user
      });
    } catch (error) {
      errorHandler(res,error);
    }
}

// POST LOGIN
export const loginController = async (req, res) => {
  try {
    const response = await userService.loginUser(req);
  
     return res.status(200).send({
        success: true,
        message: "login successfully",
        user: response.user,
        token: response.token,
      });
  } catch (error) {
    errorHandler(res,error);
  }}
export const userDetail = async (req, res) => {
  try {
    const response = await userService.userDetail(req);
  
     return res.status(200).send({
        success: true,
        message: "updated",
        
      });
  } catch (error) {
    errorHandler(res,error);
  }}
export const followController = async (req, res) => {
  try {
    const response = await userService.followUser(req);
  
     return res.status(200).send({
        success: true,
        message: "followed",
        
      });
  } catch (error) {
    errorHandler(res,error);
  }}


export default {
  loginController,
  registerController,
  followController,
  getAllUsers,
  userDetail
}
