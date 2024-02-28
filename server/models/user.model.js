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
    Name: {
        type: String,
        // required: true
        default: null
    },
    address: {
        type: String,
        city: {
            type: String,
            default: null
          } ,
          state: {
            type: String,
            default: null
          },
          country: {
            type: String,
            default: null
          },
    },
    phone: {
        type: String,
        default: null
    },
    profileImage: {
        type: String,
        default: null
    },
    bgImage: {
        type: String,
        default: null
    },
    website:{
        type: String,
        default: null
    },
    company: {
        type: Object,
      name: {
        type: String,
        default: null
      } ,
      catchPhrase: {
        type: String,
        default: null
      },
      designation: {
        type: String,
        default: null
      },
      duration:{
        type: Object,
        start: {
          type: String,
          default: null
        } ,
        end: {
          type: String,
          default:"present"
        },
      }
    
    },
    headline: {
        type: String,
        default: null
    },
    summary: {
        type: String,
        default: null
    },
    Education:{
      type: Object,
        name: {
          type: String,
          default: null
        } ,
        catchPhrase: {
          type: String,
          default: null
        },
        designation: {
          type: String,
          default: null
        },
        duration:{
            type: Object,
            start: {
              type: String,
              default: null

            } ,
            end: {
              type: String,
              default:"present"
            },
        }
    },
    skills:{

        type: Object,
      name: {
        type: String,
        default: null
      } ,
    }
    

   
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
    ,connection:{
        type: String,
        default: null
        
    }
}, { timestamps: true })
const UserModel = mongoose.model('Users', usersSchema);
export default UserModel;