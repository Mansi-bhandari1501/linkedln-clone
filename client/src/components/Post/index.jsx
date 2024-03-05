import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchPost } from "../../features/slices/postSlice";
// import { fetchComments } from './slices/commentSlice';
// import Post from './post';

import "./post.css";
import Cards from "../Card";
// import Loading from "./Loading";
// import { Card } from '@mui/material';


function Post() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  // const [card, setCard] = useState([]);
  const [page, setPage] = useState(0);
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = user.userToken;
    console.log("PaGe",page)
    dispatch(fetchPost({token,page}));
  }, [dispatch,page]);
  const posts = useSelector((state) => state.post.contents);
  const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        // setLoading(true);
        setPage((prev) => prev + 1);
      }
      if(posts.length === 0){
        setPage((prev)=>prev)

      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);
  console.log(posts);

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
      {posts && posts.length && posts?.map((content) => (
        <div key={content._id}>
          <Cards
            // title={content.title}
            // body={content.body}
            // likes={content.likes}
            // createdAt={content.createdAt}
            // postId={content._id}
            // images={content.images}
            // email= {content.email}
            // user={content.userid.email}
            content={content}
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
      // {isloading && <Loading>}
  );
}

export default Post;
