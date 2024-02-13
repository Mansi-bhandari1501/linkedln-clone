import { reactionModel } from "../models/reaction.model.js";

export const reactController =async(req,res)=>{
   try{ let data={
        userid:req.body.userid,
        postid:req.body.postid,
        type:req.body.type,
    } 
    let newReact = await new reactionModel(data).save();

    res.status(201).json({
        success:true,
        react:newReact,
      });
    }
    catch(error){
      res.status(500).json({
        success:false,
        message:error.message,
      })
    }
    }