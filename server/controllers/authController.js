import { comparePassword, hashPassword } from '../helpers/authHelper.js'
import postModel from '../models/postModel.js';
import UserModel from '../models/userModel.js';
import JWT from "jsonwebtoken";


export const registerController = async (req, res) => {
    try {
      console.log("submit response")
        const { name,username, email, password,address, phone  } = req.body
        // let data = await new UserModel(req.body);
      

        //validations
        if (!name) {
            return res.send({ error: 'UserName is required' })
        }
        if (!username) {
            return res.send({ error: 'Name is required' })
        }
        if (!email) {
            return res.send({ error: 'email is required' })
        }
        if (!password) {
            return res.send({ error: 'password is required' })
        }
        if (!phone) {
            return res.send({ error: 'phone no.is required' })
        }
        if (!address) {
            return res.send({ error: 'address is required' })
        }
        //check user
        const existinguser = await UserModel.findOne({ email });
        //existing user
        if (existinguser) {
            return res.status(200).send({
                success: true,
                message: 'Already Register please login'
            })
        }
        //register user
        const hashedPassword = await hashPassword(password);
        //save password
        const user =  await new UserModel({name,username,email,address,password:hashedPassword, phone}).save();
        
         res.status(201).send({
            success:true,
            message:'user Register Successfully',
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in Registeration ',
            error
        })
    }

}


// export const loginController = async(req, resp)=>{
//     const {email,password}=req.body;
//     try {
//         const isuserValid = await userModel.findOne({email})

//         if(!isuserValid){
//             throw new Error("user does not exist");
//         }
//         const isPasswordCorrect = comparePassword(password,isuserValid.password);
//         if(!isPasswordCorrect){
//             throw new Error("password not correct");
//         }
//         resp.status(200).json({
//             message:"user logged in successfully"
//         })
//     } catch (error) {
//         console.log(error);
//         resp.status(500).json({
//             error: "user logged in failed"
//         })
//     }
// }


// POST LOGIN
export const loginController = async (req, res) => {
    try {
      const { email, password } = req.body;
      //validation
      if (!email || !password) {
        return res.status(404).send({
          success: false,
          message: "Invalid email or password",
        });
      }
      //check user
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Email is not registerd",
        });
      }
      const match = await comparePassword(password, user.password);
      if (!match) {
        return res.status(401).send({
          success: false,
          message: "Invalid Password",
        });
      }
      //TOKEN
      const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      res.status(200).send({
        success: true,
        message: "login successfully",
        user: user,
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in login",
        error,
      });
    }
  };
  // //test controller
  // export const testController = (req,res)=>{
  //   console.log('protected Router');
  // }

  export const postController =async(req,res)=>{
    try{

      const newPostData ={
        userid:req.body.userid,
        title: req.body.title,
        body: req.body.body,
      };

      let newPost = await new postModel(newPostData);
      // console.log(req.body);
      const user =await UserModel.findById(req.user.id);
      // let result =  data.save();
      // console.log(user)
      user.posts.push(postData._id)
      // res.send("POSTED");
      res.status(201).json({
        success:true,
        post:newPost,
      });
    }
    catch(error){
      res.status(500).json({
        success:false,
        message:error.message,
      })
    }
    }
//   app.post ("/",async (req,res)=>{
//     let data = await new UserModel(req.body);
//     console.log(req.body);
//     let result =  data.save();
//     res.send(result);
// });
