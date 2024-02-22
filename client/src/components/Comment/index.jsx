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
  
  
  
    const comments = useSelector((state)=>state.comment.getCommentPaginated);
    // console.log(posts)
    const isLoading = useSelector((state)=>state.comment.isLoading);
    const error = useSelector((state)=>state.comment.error);
    if(isLoading){
      return 'Loading...';
    }
    if(error){
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
