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
    type:{
        type:String,
        enum:['like','celebrate','support','love','insightful','funny'],
    }
},{timestamps:true})
export const reactionModel = mongoose.model('reaction',reactionSchema) ;