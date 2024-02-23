import express from 'express'
import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    },
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Posts"
    },
    body:{
        type:String,
        required:true
    }
},{timestamps:true})
export const commentModel = mongoose.model('comments',commentSchema) ;