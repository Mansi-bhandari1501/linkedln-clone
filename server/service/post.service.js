import postModel from "../models/post.model.js";

export const createPost = async (payload) => {

    try {
        let { userId, title } = payload.body

        if (!userId || !title ) {
            throw Object.assign(new Error(), { name: "BAD_REQUEST", message: 'Invalid Payload' });
        }

        const files = payload.files;

        const image1 = files?.image1 && (files?.image1[0]?.path || null);
        const image2 = files?.image2 && (files?.image2[0]?.path || null);
        const image3 = files?.image3 && (files?.image3[0]?.path || null);
        const image4 = files?.image4 && (files?.image4[0]?.path || null);

        const newPostData = {
            userid: userId,
            title: title,
            images: [image1, image2, image3, image4].filter(Boolean),
        };

        let post = await new postModel(newPostData).save();
        return { post }
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

export const deletePost = async (payload) => {
    try {
        const { _id } = payload.params;

        // handle validation here

        let data = await postModel.findByIdAndDelete(_id)

        return { data };
    } catch (error) {
        throw error;
    }
}
export const updatePost = async (payload) => {
    try {
        let data = await postModel.findByIdAndUpdate( payload.params, { $set: payload.body });
        return { data };
    } catch (error) {
        throw error;
    }
}

export const fetchAllPosts = async (payload) => {
    try {

        // handle validation

        console.log(payload.body)
        const posts = await postModel.find().populate('userid',"email")
        // .populate('user');
        return { posts };
    }
    catch (error) {
        throw error;
    }
    // try {
    //     let page = Number(payload.param) || 0; "";
    //     let resultsPerPage = 10; 
      
    //     if(!page || page.trim() === '') {
    //       page = 0;
    //     }
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


const postService = {
    createPost,
    updatePost,
    deletePost,
    fetchAllPosts,
    fetchPost,
}

export default postService;