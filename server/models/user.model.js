import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    username: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        street: {
            type: String,
            default:null

            // required:true
        },
        suite: {

            type: String,
            default:null

            // required:true
        },
        city: {

            type: String,
            default:null

            // required:true
        },
        Zipcode: {

            type: String,
            default:null
            // required:true
        },
        geo: {
            lat: {
                type: String,
                default:null

                // required:true
            },
            lng: {
                type: String,
                default:null

                // requried:true
            }
        }
    },
    phone: {
        type: String,
        default:null
        // required:true,
    },
    website: {

        type: String,
        default:null

        // required:true,
    },
    company: [{
        
        companyname: {
            type: String,
            default:null

            // required:true
        },
        catchPhrase: {
            
            type: String,
            default:0
            // required:true,
        },
        bs: {
            
            type: String,
            default:0
            // required:true,
        }
    }]
},{timestamps:true})
const UserModel = mongoose.model('Users', usersSchema);
export default UserModel;