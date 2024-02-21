import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
    userid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users' 
    },
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        // required:true,
    },
    images:{
        type:[String],
        default:[]
    },
   
    likes:{
        user:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users' 
        }],        
    },
    comments:[{
        
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users' 
        },
        comment:{
            type:String,
            required:true,
        },  
    }],
    
},{timestamps:true})
const postModel =  mongoose.model('Posts', postSchema);
export default postModel;