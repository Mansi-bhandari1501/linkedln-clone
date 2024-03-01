import express from 'express'
import mongoose from 'mongoose'

const reactionSchema = new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    },
    postid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Posts"
    },
    commentid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comments"
    },
    type:{
        type:String,
        enum:['Like','Celebrate','Support','Love','Insightful','Funny'],
    }
},{timestamps:true})
export const reactionModel = mongoose.model('Reactions',reactionSchema) ;