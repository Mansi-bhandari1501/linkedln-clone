import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchPost } from "../../features/slices/postSlice";
// import { fetchComments } from './slices/commentSlice';
// import Post from './post';

import "./post.css";
import Cards from "../Card";
// import { Card } from '@mui/material';
function Post() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const token = user.userToken;
    dispatch(fetchPost(token));
  }, [dispatch]);

  const posts = useSelector((state) => state.post.contents);
  // console.log(posts);

  const isLoading = useSelector((state) => state.post.isLoading);

  if (isLoading) {
    return "Loading...";
  }

  // if(error){
  //   return error;
  // }

  return (
    <div className="post-container">
      {posts.length === 0 && <>No new posts's</>}
      {posts?.map((content) => (
        <div key={content._id}>
          <Cards
            title={content.title}
            body={content.body}
            likes={content.likes}
            createdAt={content.createdAt}
            postId={content._id}
            images={content.images}
            // user={content.userid}
          />
          {/* <h3>name : {content.name} </h3> */}
          {/* <h3 >title : {content.title} </h3>
        <h3 >body : {content.body} </h3> */}
          {/* <h3 >image : {content.image.map ((img,i)=>{
            return(
                <div key={i}>
                    <h2>imagess:{img}</h2>
                </div>
            )
        })} </h3> */}

          {/* <h3>likes : {content.likes} </h3> */}
          {/* <h3 >comments : {content.comments} </h3>      */}
        </div>
      ))}
    </div>
  );
}

export default Post;
