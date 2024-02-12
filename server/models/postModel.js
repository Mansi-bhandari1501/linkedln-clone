import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
    userid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users' 
    },
    title:{
        type:String,
        required:true,
        unique:true
    },
    body:{
        type:String,
        required:true,
    },
    image:{
        public_id :String,
        URL: String
    },
    createdAt:{
        type:Date,
        default:Date.now,
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
    
})
const postModel =  mongoose.model('Posts', postSchema);
export default postModel;