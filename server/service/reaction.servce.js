// const { Reactions } = require("../models/reactions")
import {reactionModel} from '../models/reaction.model.js'


export const saveReaction = async (req) => {
    try{ 
        const {postId} = req.params
        const {userId, emoji} = req.body
        const reaction = new reactionModel({
            postId: postId,
            userId,
            emoji
        })
        await reaction.save()
        return reaction
    }catch(err){
        console.log(err)
        return err 
    }
}

export const getReactions = async () => {
    try{
        const reactions = await reactionModel.find()
        return reactions
    }
    catch(err){
        
    }
}

export const updateReaction = async (req) => {
    const {reactionId} = req.params
    const {userId, emoji} = req.body
    const currentUserId = await reactionModel.findById(reactionId)

    try{
        if(userId == currentUserId.userId ){
            const edit = await reactionModel.findByIdAndUpdate(reactionId, {emoji}, {new: true})
            return edit
        }   
        else {
            return "Unauthorized User"
        }
    }
    catch(err){
        console.log(err)
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
            return "Unauthorized User"
        }
    }
    catch(err){
        console.log(err)
    }
}
const reaction_service = {
    saveReaction,
    getReactions,
    updateReaction,
    removeReaction,
}

export default reaction_service;