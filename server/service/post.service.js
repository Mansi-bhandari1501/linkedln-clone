import postModel from "../models/post.model.js";



export const postController = async (payload) => {
    try {
        const newImages = payload.files.images.map((i) => { return i.path })
        console.log(newImages);

        const newPostData = {
            userid: payload.body.userid,
            title: payload.body.title,
            body: payload.body.body,
            images: newImages,
        };
        let newPost = await new postModel(newPostData).save();
        //   res.status(201).json({
        //     success:true,
        //     post:newPost,
        //   });
        return { newPost, newImages }
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
    postController,
    updatePost,
    deletePost,
    fetchAllPosts,
    fetchPost,
}

export default post_service;