import { Avatar, Box, TextField } from '@mui/material';
import React, { useEffect } from 'react'
import InputEmoji from 'react-input-emoji'
import { ReactComponent as MediaIcon } from "../../utils/media-icon.svg";
import { useDispatch, useSelector } from 'react-redux';
import { fetchComment } from '../../features/comment/commentAction';

const Comment = () => {

    const dispatch= useDispatch();
  
    useEffect(()=>{
      let token = JSON.parse(window.localStorage.getItem("auth"));
      //  let {}
      console.log(token)
      dispatch(fetchComment(token));
    },[dispatch])
  
    const Loading = useSelector((state) => state.comments.isLoading);
    const iserror = useSelector((state) => state.comments.error);
    const comments = useSelector((state) => state.comments.comments);
    // const comments = useSelector((state) => state.comment.getComments)
//   const loading = useSelector((state) => state.comment.isLoading)
//   const error = useSelector((state) => state.comment.error)
  console.log("comments",comments)
    // const comments = useSelector((state)=>state.comments);
    // // console.log(posts)
    // const isLoading = useSelector((state)=>state.comments.isLoading);
    // const error = useSelector((state)=>state.comments.error);
    if(Loading){
      return 'Loading...';
    }
    if(iserror){
      return error;
    }
  return (
    <Box>
        <Box>
            <Box>
                <Avatar></Avatar>
            </Box>
            <Box>
            <InputEmoji
            
        />
<MediaIcon/>
            </Box>
        </Box>
        <Box></Box>
        <Box></Box>

    </Box>
  )
}

export default Comment;
