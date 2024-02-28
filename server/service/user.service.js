
import { hash_password } from '../helpers/auth.helper.js'
import UserModel from '../models/user.model.js';
import JWT from "jsonwebtoken";
import { comparePassword } from '../helpers/auth.helper.js'

const registerUser = async (payload) => {
  try {
    const { email, password } = payload.body

    if (!email) {
      throw Object.assign(new Error(), { name: "BAD_REQUEST", message: 'email is required' });
    }

    if (!password) {
      throw Object.assign(new Error(), { name: "BAD_REQUEST", message: 'password is required' });
    }

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      throw Object.assign(new Error(), { name: "CONFLICT", message: 'User Already exists' });
    }

    //register user
    const hashed_password = await hash_password(password);
    //save password
    const user = await new UserModel({ email, password: hashed_password }).save();

    return { user };
  } catch (error) {
    throw error;
  }
}

export const loginUser = async (payload) => {
  try {
    const { email, password } = payload.body;

    //validation
    if (!email || !password) {
      throw Object.assign(new Error(), { name: "BAD_REQUEST", message: 'Invalid email or password' });
    }

    //check user
    const user = await UserModel.findOne({ email });

    if (!user) {
      throw Object.assign(new Error(), { name: "BAD_REQUEST", message: 'Email is not registerd' });
    }

    const match = await comparePassword(password, user.password);

    if (!match) {
      throw Object.assign(new Error(), { name: "UNAUTHORIZED", message: 'Invalid Password' });
    }

    //TOKEN
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return { user, token };
  } catch (error) {
    throw error;
  }
}
export const userDetail = async (payload) => {

    try{
        const userId = payload.params
        console.log(userId);
        const {name, address, phone, website, company, summary, headline} = payload.body
        const currentUserId = await Users.findById(userId)
        if(currentUserId == null){ 
            return 404
        }
        else {
            const userDetails = await Users.findByIdAndUpdate( {_id:userId}, {$set: {name, address, phone, website, company, summary, headline}} )
            return userDetails
        }

    }catch(err){
        console.log(err)
        return err
    }
}

export const getUsers = async (payload) => {
  try {
    const {existingUser} = payload.params;
    console.log("USERID=------>", existingUser);
    const users = UserModel.find({ _id: { $ne:existingUser} })
    console.log(users)
    return users;
  } catch (error) {
    throw error;
  }
}

export const getUsersPaginated = async (payload) => {
  let page = Number(payload.param) || 0; "";
  let resultsPerPage = 10;

  if (!page || page.trim() === '') {
    page = 0;
  }

  return await UserModel.find({})
    .sort({ createdAt: 'descending' })
    .lean()
    .limit(resultsPerPage)
    .skip(page * resultsPerPage)
}

const userService = {
  registerUser,
  loginUser,
  getUsersPaginated,
  userDetail,
  getUsers
}

export default userService;