import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import  { fetchPost } from '../../features/slices/postSlice';
// import { fetchComments } from './slices/commentSlice';
// import Post from './post';

import "./post.css";
import { Card } from '@mui/material';
function Post(){
  const dispatch= useDispatch();

  useEffect(()=>{
    let token = JSON.parse(window.localStorage.getItem("auth"));
    //  let {}
    console.log(token)
    dispatch(fetchPost(token));
  },[dispatch])



  const posts = useSelector((state)=>state.post.contents.getposts);
  console.log(posts)
  const isLoading = useSelector((state)=>state.post.isLoading);
  const error = useSelector((state)=>state.post.error);
  if(isLoading){
    return 'Loading...';
  }
  if(error){
    return error;
  }

  return(
    <div className='post-container'>
     
      <div></div>
      {posts?.map ((content)=> 
       (
        <div className='post-content' key ={content._id}>
        
        {/* <h3>name : {content.name} </h3> */}
        <h3 >title : {content.title} </h3>
        <h3 >body : {content.body} </h3>
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
  )
}

  export default Post;