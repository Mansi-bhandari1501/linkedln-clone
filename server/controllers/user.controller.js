import { comparePassword, hash_password } from '../helpers/auth.helper.js'
// import {user_service} from '../service'
import postModel from '../models/post.model.js';
import UserModel from '../models/user.model.js';
import JWT from "jsonwebtoken";
import { user_service } from '../service/index.js';

const handle_error = (res,error) => {
  if(error.name === 'CONFLICT') {
    return res.status(409).send({
      success: false,
      message: error.message,
    })
  }
}
export const  getAllUsers =async(req, res)=> {
  let page = req.query.page //starts from 0
  let users= await user_service.getUsersPaginated(page)
  if (users && users.length > 0) {
    res.json(users)
  } else {
    res.json("users not found")
  }
}

export const registerController = async (req, res) => {
    try {
      const response = await user_service.registerController(req);
    
      res.status(201).send({
        success:true,
        message:'user Register Successfully',
        user : response.user
      })
    } catch (error) {

      handle_error(res,error);
        
        // if(error.name === 'CONFLICT') {
        //   return res.status(409).send({
        //     success: false,
        //     message: error.message,
        //   })
        // }

        // res.status(500).send({
        //     success: false,
        //     message: 'Error in Registeration ',
        //     error
        // })
    }
}

// POST LOGIN
export const loginController = async (req, res) => {
  try {
    const response = await user_service.loginController(req);
  
     res.status(200).send({
        success: true,
        message: "login successfully",
        user: response.user,
        token:response.token,
      });
  } catch (error) {
    handle_error(res,error);
  }}
// export const loginController = async (req, res) => {
//     try {
//       const { email, password } = req.body;
//       //validation
//       if (!email || !password) {
//         return res.status(404).send({
//           success: false,
//           message: "Invalid email or password",
//         });
//       }
//       //check user
//       const user = await UserModel.findOne({ email });
//       if (!user) {
//         return res.status(404).send({
//           success: false,
//           message: "Email is not registerd",
//         });
//       }
//       const match = await comparePassword(password, user.password);
//       if (!match) {
//         return res.status(401).send({
//           success: false,
//           message: "Invalid Password",
//         });
//       }
//       //TOKEN
//       const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
//         expiresIn: "7d",
//       });
//       res.status(200).send({
//         success: true,
//         message: "login successfully",
//         user: user,
//         token,
//       });
//     } catch (error) {
//       console.log(error);
//       res.status(500).send({
//         success: false,
//         message: "Error in login",
//         error,
//       });
//     }
//   };
  // //test controller
  // export const testController = (req,res)=>{
  //   console.log('protected Router');
  // }

  // export const postController =async(req,res)=>{
  //   try{

  //     const newPostData ={
  //       userid:req.body.userid,
  //       title: req.body.title,
  //       body: req.body.body,
  //     };

  //     let newPost = await new postModel(newPostData).save();
  //     // console.log(req.body);
  //     const user =await UserModel.findById(req.body.userid);
  //     // let result =  data.save();
  //     // console.log(user)
  //     user.posts.unshift(newPost._id)
  //     user.save()
  //     // res.send("POSTED");
  //     res.status(201).json({
  //       success:true,
  //       post:newPost,
  //     });
  //   }
  //   catch(error){
  //     res.status(500).json({
  //       success:false,
  //       message:error.message,
  //     })
  //   }
  //   }

  //   export const fetchPosts= async(req,res)=>{
  //     console.log(req.body)
  //     const getpost= await postModel.findById(req.body.userid)
  //   }
//   app.post ("/",async (req,res)=>{
//     let data = await new UserModel(req.body);
//     console.log(req.body);
//     let result =  data.save();
//     res.send(result);
// });
