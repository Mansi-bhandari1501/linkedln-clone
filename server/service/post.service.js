import postModel from "../models/post.model.js";

export const createPost = async (payload) => {
  try {
    let { userId, title } = payload.body;
   

    if (!userId || !title) {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "Invalid Payload",
      });
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
    return { post };
  } catch (error) {
    // console.log(error);
    throw error;
  }
};

export const deletePost = async (payload) => {
  try {
    const { _id } = payload.params;

    // handle validation here

    let data = await postModel.findByIdAndDelete(_id);

    return { data };
  } catch (error) {
    throw error;
  }
};
export const updatePost = async (payload) => {
  try {
    let data = await postModel.findByIdAndUpdate(payload.params, {
      $set: payload.body,
    }).countDocuments();
    return { data };
  } catch (error) {
    throw error;
  }
};

export const fetchAllPosts = async (payload) => {
  // try {

  // //     // handle validation

  // //     // console.log(payload.body)
  //     const page = payload.query
  //     console.log(payload.query)
  //     console.log("hdugduw---------->>>>>",page)
  //     const query = skip(5).limit(5);
  //     const posts = await postModel.find({query}).populate('userid',"email")

  //     console.log("posts------>>>>",posts)
  //     return { posts };
  // }
  // catch (error) {
  //     throw error;
  // }
  // try {
  //   const page = payload.query.page || 1;
  //   // const limit = payload.query.limit || 5;
  //   const skips = (page - 1) * 2;
  //   const query = skip(5).limit(5);
  //   // const postCount = postModel.countDocuments();
  //   // if (req.query.page) {
  //   //   console.log(postCount);
  //   //   if (skip >= postCount) {
  //   //     throw new Error("this page is not found");
  //   //   }
  //   // }
  //   const posts = await postModel
  //     .find(query)
  //     .populate("userid", "email")
  //     // .limit(2)
  //     .sort({ createdAt: -1 });
  //   return posts;
  // } catch (error) {
  //   console.log(error)
  //   throw error;
  // }

  try {
    // console.log("HELLO",payload.user._id )
    console.log("payload------>>>>",payload.query)
      let page = Number(payload.query.page) ;
      let resultsPerPage = 2;
      console.log("PAGESS",page)
      // if(!page || page.trim() === '') {
      //   page = 0;
      // }
     const postsCount = await postModel.find().count()
    //  const postsCount = post.count();
     const posts = await postModel.find({})
          .sort({ createdAt: 'descending' })
          .populate('userid',"email firstName lasName")
          .lean()
          .limit(resultsPerPage)
          .skip(page * resultsPerPage)
          // console.log(posts)
     return {posts,postsCount}
  }
  catch (error) {
      throw error;
  }
};

export const fetchPost = async (payload) => {
  try {
    // console.log(payload.params)
    const getpost = await postModel.findById(payload.params)
    .populate("user","Name");
    // console.log(getpost)
    return { getpost };
  } catch (error) {
    throw error;
  }
};

const postService = {
  createPost,
  updatePost,
  deletePost,
  fetchAllPosts,
  fetchPost,
};

export default postService;
