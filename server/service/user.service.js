
import { hash_password } from '../helpers/auth.helper.js'
import UserModel from '../models/user.model.js';
import JWT from "jsonwebtoken";

const registerController = async (payload) => {
    try {
        const { username, email, password } = payload.body      
        if (!username) {
            return res.send({ error: 'Name is required' })
        }
        if (!email) {
            return res.send({ error: 'email is required' })
        }
        if (!password) {
            return res.send({ error: 'password is required' })
        }
       
        const existingUser = await UserModel.findOne({ email });
        
        if (existingUser) {
            throw Object.assign(new Error(), {name:"CONFLICT", message: 'User Already exists'});
        }
        //register user
        const hashed_password = await hash_password(password);
        //save password
        const user =  await new UserModel({username,email,password:hashed_password}).save();

        return {user};
    } catch(error) {
        throw error;
    }
}

export const loginController = async (payload) => {
    try {
      const { email, password } = payload.body;
      //validation
      if (!email || !password) {
       
        throw Object.assign(new Error(), {name:"CONFLICT", message: 'Invalid email or password'});
        // return res.status(404).send({
        //   success: false,
        //   message: "Invalid email or password",
        // });
      }
      //check user
      const user = await UserModel.findOne({ email });
      if (!user) {
        throw Object.assign(new Error(), {name:"CONFLICT", message: 'Email is not registered'});
        // return res.status(404).send({
        //   success: false,
        //   message: "Email is not registerd",
        // });
      }
      const match = await comparePassword(password, user.password);
      if (!match) {
        throw Object.assign(new Error(), {name:"CONFLICT", message: 'Invalid Password'});

        // return res.status(401).send({
        //   success: false,
        //   message: "Invalid Password",
        // });
      }
      //TOKEN
      const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      return {user,token};
    } catch(error) {
        throw error;
    }
}
export const getUsersPaginated = async (page) => {
    let resultsPerPage = 10
  
    return await UserModel.find({})
      .sort({ createdAt: 'descending' })
      .lean()
      .limit(resultsPerPage)
      .skip(page * resultsPerPage)
  }

const user_service = {
    registerController,
    loginController,
    getUsersPaginated
}

export default user_service;