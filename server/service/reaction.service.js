// const { Reactions } = require("../models/reactions")
import {reactionModel} from '../models/reaction.model.js'


export const saveReaction = async (req) => {
    try{ 
        const {postId} = req.params
        const {userId, type} = req.body

        const existinReaction = await reactionModel.findOne({userid:userId, postid:postId});
        
        let reaction;
        if(existinReaction) {
            reaction = await reactionModel.findOneAndUpdate({postid:postId,userid:userId,type},{new: true})
        } else {
            reaction = new reactionModel({
                postId: postId,
                userId,
                type
            })
            await reaction.save()
        }
        return reaction
    }catch(error) {
        throw error;
    }
}

export const getReactions = async () => {
    try{
        const reactions = await reactionModel.find()
        return reactions
    }
    catch(error) {
        throw error;
    }
}

export const updateReaction = async (req) => {
    const {reactionId} = req.params
    const {userId, type} = req.body
    const currentUserId = await reactionModel.findById(reactionId)

    try{
        if(userId == currentUserId.userId ){
            const edit = await reactionModel.findByIdAndUpdate(reactionId, {type}, {new: true})
            return edit
        }   
        else {
            throw Object.assign(new Error(), {name:"Unauthorized", message: 'Unauthorized User'});
        }
    }catch(error) {
        throw error;
    }
}

export const removeReaction = async (req) => {
    const {reactionId} = req.params
    const {userId} = req.body
    const currentUserId = await reactionModel.findById(reactionId)

    try{
        if(userId == currentUserId.userId ){
            const edit = await reactionModel.findByIdAndDelete(reactionId)
            return edit
        }   
        else {
            // return "Unauthorized User"
        throw Object.assign(new Error(), {name:"Unauthorized", message: 'Unauthorized User'});
        }
    }catch(error) {
        throw error;
    }
}
const reactionService = {
    saveReaction,
    getReactions,
    updateReaction,
    removeReaction,
}

export default reactionService;