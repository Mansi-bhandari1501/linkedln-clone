import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        // required: true
        default: null
    },
    lasName: {
        type: String,
        default: null
        // required: true
    },
    city: {
        type: String,
        default: null
        // required:true
    },
    phone: {
        type: String,
        default: null
        // required:true,
    },
    website: {
        type: String,
        default: null
        // required:true,
    },
    company: [{

        companyname: {
            type: String,
            default: null

            // required:true
        },
        catchPhrase: {

            type: String,
            default: 0
            // required:true,
        },
        bs: {

            type: String,
            default: 0
            // required:true,
        }
    }],
   
 // followers: [{
    //     userid:
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "User"
    //     },
    //     status: {
    //         type: String,
    //         enum: ['pending', 'accepted', 'rejected'],
    //         default : 'pending',
    //     }
    // }],
    // following: [{
    //     userid:
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "User"
    //     },
    //     status: {
    //         type: String,
    //         enum: ['pending', 'accepted', 'rejected'],
    //         default : 'pending',
    //     }

    // }]
    connection:{
        type: String,
        
    }
}, { timestamps: true })
const UserModel = mongoose.model('Users', usersSchema);
export default UserModel;