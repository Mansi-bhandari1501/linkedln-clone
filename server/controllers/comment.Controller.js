import { commentModel } from "../models/commentModel.js";

export const commentController = async(req,res)=>{
    try{

        const newCommentData ={
          userid:req.body.userid,
          postid: req.body.postid,
          body: req.body.body,
        };
  
        let newComment = await new commentModel(newCommentData).save();
        console.log(req.body);      
        res.send("commented");
        res.status(201).json({
          success:true,
          post:newComment,
        });
      }
      catch(error){
        res.status(500).json({
          success:false,
          message:error.message,
        })
      }
}
export const deleteComment = async(req,res)=>{
    let data = await commentModel.findByIdAndDelete(req.params)
    res.send(data);
}

export const updateComment = async(req,res)=>{
    try{
        let data = await commentModel.findByIdAndUpdate
    (
        req.params,{
            $set:req.body
        }
    );
    console.log(req.body)
    res.send(data);
}
catch(error){
    res.status(500).json({
      success:false,
      message:error.message,
    })
  }

}
export const fetchAllComments= async(req,res)=>{
    console.log(req.body)
    const getposts= await commentModel.find();
    res.send(getposts);
  }
  export const fetchComment= async(req,res)=>{
    console.log(req.params)
    const getpost= await commentModel.findById(req.params);
    res.send(getpost);
  }
