import handle_error from "../lib/utils.js";
import { reactionModel } from "../models/reaction.model.js";

// export const reactController =async(req,res)=>{
//    try{ let data={
//         userid:req.body.userid,
//         postid:req.body.postid,
//         type:req.body.type,
//     } 
//     let newReact = await new reactionModel(data).save();

//     res.status(201).json({
//         success:true,
//         react:newReact,
//       });
//     }
//     catch(error){
//       res.status(500).json({
//         success:false,
//         message:error.message,
//       })
//     }
//     }
import {reaction_service} from '../service/index.js'
export const saveReactions = async (req, res) => {
    try{
        const response = await reaction_service.saveReaction(req)
        
        return res.status(201).json({response})
    }catch(error){
        console.log(error)
        handle_error(res,error);
    }
}

export const getReactions = async (req, res) => {
    try{
        const response = await reaction_service.getReactions()
        return res.status(200).json(response)
    }catch(error){
        console.log(error)
        handle_error(res,error);
    }
}

export const updateReaction = async (req, res) => {
    try{
        const response = await reaction_service.updateReaction(req)
        return res.status(202).json(response)
    }
    catch(error){
        console.log(error)
        handle_error(res,error);
    }
}

export const removeReaction = async (req, res) => {
    try{
        const response = await reaction_service.removeReaction(req)
        return res.status(202).json(response)
    }catch(error){
        console.log(error)
        handle_error(res,error);
    }
}
export default{
    removeReaction,
    updateReaction,
    getReactions,
    saveReactions,
}