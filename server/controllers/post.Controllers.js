import { comparePassword, hashPassword } from '../helpers/authHelper.js'
import postModel from '../models/postModel.js';
import UserModel from '../models/userModel.js';
import JWT from "jsonwebtoken";

export const postController =async(req,res)=>{
    try{

      const newPostData ={
        userid:req.body.userid,
        title: req.body.title,
        body: req.body.body,
      };

      let newPost = await new postModel(newPostData).save();
      // console.log(req.body);
      const user =await UserModel.findById(req.body.userid);
      // let result =  data.save();
      // console.log(user)
      user.posts.unshift(newPost._id)
      user.save()
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

    export const fetchAllPosts= async(req,res)=>{
      console.log(req.body)
      const getposts= await postModel.find();
      res.send(getposts);
    }
    export const fetchPost= async(req,res)=>{
      console.log(req.params)
      const getpost= await postModel.findById(req.params);
      res.send(getpost);
    }

    export const deletePost = async(req,res)=>{
        let data = await postModel.findByIdAndDelete(req.params)
        res.send(data);
    }
    export const updatePost = async(req,res)=>{
        try{
            let data = await postModel.findByIdAndUpdate
        (
            req.params,{
                $set:req.body
            }
        );
        console.log(data)
        res.send(data);
    }
    catch(error){
        res.status(500).json({
          success:false,
          message:error.message,
        })
      }
    
    }