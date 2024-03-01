// const { Reactions } = require("../models/reactions")
import {reactionModel} from '../models/reaction.model.js'


export const saveReaction = async (payload) => {
    try{ 
        console.log(payload.body)
        const {postId,userId, type} = payload.body

        const existinReaction = await reactionModel.findOne( {
            $and: [
              {
                postid: postId,
              },
              {
                userid: userId,
              },
            ],
          })
          .populate("userid","firstName lasName city Education");
        console.log("existinReaction",existinReaction)
        let reaction;
        if(existinReaction) {
            reaction = await reactionModel.findOneAndUpdate(
                {
                  $and: [
                    {
                        postid: postId,
                    },
                    {
                        userid: userId,
                    },
                  ],
                },
                {
                  $set: { type: type },
                }
              );
        } else {
            reaction = new reactionModel({
                postid: postId,
                userid:userId,
                type
            })
            await reaction.save()
        }
        return reaction
    }catch(error) {
        throw error;
    }
}

export const getReactions = async (payload) => {
    try{
        console.log("PAYLOAD",payload.params)
        const {postId} = payload.params
        const reactions = await reactionModel.find({postid:postId})
        return reactions
    }
    catch(error) {
        throw error;
    }
}
export const getUserReactions = async (payload) => {
    try{
        console.log("PAYLOAD",payload.params)
        const {postId} = payload.params
        const {userId} = payload.body
        const reactions = await reactionModel.find({postid:postId,userid:userId})
        return reactions
    }
    catch(error) {
        throw error;
    }
}

export const updateReaction = async (payload) => {
    const {reactionId} = payload.params
    const {userId, type} = payload.body
    const currentUserId = await reactionModel.findById(reactionId)

    try{
        if(userId == currentUserId.userid ){
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

export const removeReaction = async (payload) => {
    const {reactId} = payload.params
    const {userId} = payload.body
    console.log( payload.params)
    console.log( payload.body)
    const currentUserId = await reactionModel.findOne({userid:userId})
    console.log(currentUserId)
    try{
        if(userId == currentUserId.userid ){
            const edit = await reactionModel.findByIdAndDelete(reactId)
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