import { commentModel } from "../models/comment.model.js";
import { comment_service } from '../service/index.js';

export const createComment = async(req,res)=>{
    try{
      const response = await post_service.deletePost(req);
        console.log(req.body);      
        res.send("commented");
        res.status(201).json({
          success:true,
          comment:response.newComment,
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
  try{
    const response = await post_service.deleteComment(req);
      console.log(req.body);      
      res.status(201).json({
        success:true,
        data:response.data,
      });
    }
    catch(error){
      res.status(500).json({
        success:false,
        message:error.message,
      })
    }
    // let data = await commentModel.findByIdAndDelete(req.params)
    // res.send(data);
}

export const updateComment = async(req,res)=>{
  try{
    const response = await post_service.updateComment(req);
      console.log(req.body);      
      res.status(201).json({
        success:true,
        data:response.data,
      });
    }
    catch(error){
      res.status(500).json({
        success:false,
        message:error.message,
      })
    } 
//   try{
//         let data = await commentModel.findByIdAndUpdate
//     (
//         req.params,{
//             $set:req.body
//         }
//     );
//     console.log(req.body)
//     res.send(data);
// }
// catch(error){
//     res.status(500).json({
//       success:false,
//       message:error.message,
//     })
//   }

}
export const fetchAllComments= async(req,res)=>{
  try{
    const response = await post_service.fetchAllComments(req);
      console.log(req.body);      
      res.status(201).json({
        success:true,
        getposts:response.getposts,
      });
    }
    catch(error){
      res.status(500).json({
        success:false,
        message:error.message,
      })
    } 
    // console.log(req.body)
    // const getposts= await commentModel.find();
    // res.send(getposts);
  }
  export const fetchComment= async(req,res)=>{
    try{
      const response = await post_service.fetchAllComments(req);
        console.log(req.body);      
        res.status(201).json({
          success:true,
          getpost:response.getpost,
        });
      }
      catch(error){
        res.status(500).json({
          success:false,
          message:error.message,
        })
      } 
    // console.log(req.params)
    // const getpost= await commentModel.findById(req.params);
    // res.send(getpost);
  }

  export const  getAllcomments=async(req, res)=> {
    
    let page = req.query.page //starts from 0
    let comments= await comment_service.getCommentPaginated(page)
    if (comments && comments.length > 0) {
      res.json(comments)
    } else {
      res.json("comments not found")
    }
  }
  export default {
   getAllcomments,
   updateComment,
   fetchAllComments,
   fetchComment,
   createComment,
   deleteComment,
  }
