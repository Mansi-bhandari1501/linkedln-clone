import postModel from "../models/post.model.js";



export const createPost = async (payload) => {
    try {
        console.log(payload)
        const files = payload.files;
        const image1 = files.image1[0]?.path;
        const image2 = files.image2[0]?.path;
        const image3 = files.image3[0]?.path;
        const image4 = files.image4[0]?.path;


        console.log(image1)
        // console.log("images ->",images);
        // console.log(images[0]);
        // let newImages
        // if(images !== null){
        //      newImages = payload.files.images.map((i) => { return i.path })
        // }
        // console.log(newImages);

        const newPostData = {
            // userid: payload.body.userid,
            title: payload.body.title,
            body: payload.body.body,
            images: [image1,image2,image3,image4],
        };
        let newPost = await new postModel(newPostData).save();
        //   res.status(201).json({
        //     success:true,
        //     post:newPost,
        //   });
        return { newPost, 
            mewImages:[image1,image2,image3,image4]
        }
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

export const deletePost = async (payload) => {
    try {
        const postData = payload;
        console.log(payload)
        let data = await postModel.findByIdAndDelete(payload.params)
        // const deletedBy = data.userid
        console.log('hello', data)
        return { data };
    } catch (error) {
        throw error;
    }
}
export const updatePost = async (payload) => {
    try {
        let data = await postModel.findByIdAndUpdate
            (
                payload.params, {
                $set: payload.body
            }
            );
        return { data };
    } catch (error) {
        throw error;
    }
}

export const fetchAllPosts = async (payload) => {
    try {
        console.log(payload.body)
        const getposts = await postModel.find()
        // .populate("user");
        return { getposts };
    }
    catch (error) {
        throw error;
    }
    // try {
    //     const page = payload.param
    //     let resultsPerPage = 10

    //     return await postModel.find({})
    //         .sort({ createdAt: 'descending' })
    //         .lean()
    //         .limit(resultsPerPage)
    //         .skip(page * resultsPerPage)
    // }
    // catch (error) {
    //     throw error;
    // }

}


export const fetchPost = async (payload) => {
    try {
        console.log(payload.params)
        const getpost = await postModel.findById(payload.params);
        return { getpost };
    } catch (error) {
        throw error;
    }
}


const post_service = {
    createPost,
    updatePost,
    deletePost,
    fetchAllPosts,
    fetchPost,
}

export default post_service;