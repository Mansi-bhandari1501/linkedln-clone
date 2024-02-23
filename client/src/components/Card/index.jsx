import React, { useState } from 'react'
import Card from '@mui/material/Card';
import "./card.css";
import { Avatar, Box, Button, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, InputBase, Stack, Typography } from '@mui/material';
import RepeatIcon from '@mui/icons-material/Repeat';
// import { ReactComponent as LikeIcon } from "../../utils/Like-logo.svg"
import { ReactComponent as SendIcon } from "../../utils/send-icon.svg"
import LikeIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/CommentOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { createComment, fetchComment } from '../../features/comment/commentAction';
import EmojiPicker from 'emoji-picker-react';
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

const Cards = (props) => {
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    
    marginLeft: 'auto',
    height:'500px',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);
  const [data, setData] = useState({body: '', postId: props.postId})
  console.log("length", props.images);
 
  const handleExpandClick = () => {
    setExpanded(!expanded);
    dispatch(fetchComment(props.postId));
  };
const handleComment = (e) => {
    // e.preventDault()
    dispatch(createComment(data))
    setData({...data, body: ''})
}


  const comments = useSelector((state) => state.comment.content[props.postId])
  // const loading = useSelector((state) => state.getComment)
  // const error = useSelector((state) => state.getComment)
  console.log(comments)
  return (
    <div>
      <Card sx={{ width: '550px', marginBottom: "2px", borderRadius: "8px" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ backgroundColor: 'blue' }} aria-label="recipe">
              r
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">

            </IconButton>
          }
          title="username"
          subheader={props.createdAt}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.body}
          </Typography>
        </CardContent>
         
         <div className='images'>

        {props.images.map((image, index) => (
          <div style={{
            display: "flex",
            flexDirection:"row",
            width:"100%"
          }}>
            <CardMedia
              
              key={index}
              component="img"
              height={props.images.length > 1 ? "100%" : "100%"}
              width={props.images.length > 1 ? "50%" : "100%"}
              image={`${image}`}
              alt="post image"
              sx={{ marginBottom: "5px", display:"inline-flex" }}
            />
          </div>
        ))}
         </div>


        {/* {props.likes} */}
        <Divider sx={{ marginBottom: "5px" }} />
        <CardActions className='post-action' disableSpacing>
          <IconButton aria-label="add to favorites" sx={{ color: "#00000080" }}>
            <LikeIcon />
            <h6>Like</h6>
          </IconButton>
          <IconButton aria-label="add to favorites">
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <CommentIcon sx={{ color: "#00000080" }} />
              <Typography variant="h6">Comment</Typography>
            </ExpandMore>
            </IconButton>
          {/* <IconButton aria-label="add to favorites">
            <CommentIcon sx={{ color: "#00000080" }} />
            <h6>Comment</h6>
          </IconButton> */}
          <IconButton aria-label="add to favorites">
            <RepeatIcon />
            <h6>Repost</h6>

          </IconButton>
          <IconButton aria-label="add to favorites">
            <SendIcon />
            <h6>Share</h6>
          </IconButton>

            {/* <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore> */}
          </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>

          <CardContent sx={{display: 'flex', alignItems: 'center', justifyContent:'space-around'}}>
            <Avatar aria-label="recipe"></Avatar>
            {/* border: '1px solid #d7d8d6',
                  borderRadius: '50px',
                  width: '84%',
                  height: '45px',
                  display: 'flex',
                  textAlign: 'left',
                  alignItems:'center',
                  paddingLeft: "10px",
                  fontSize: '',
                  cursor: 'pointer',
                  fontFamily: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
                  fontWeight: "500",
                  background: 'none',
                  color: 'rgb(0,0,0,0.6)',
                  textTransform: 'none',
                  '&:hover': { background: 'rgb(0,0,0,0.1)' } */}
              <InputBase
                sx={{
                  border: '1px solid #d7d8d6',
                  width: '84%',
                  height: '45px',
                 
                }}
                multiline
                endAdornment={
                  <>
                  <EmojiPicker open={false} />
                  </>
                }
                value={data.body}
                placeholder="Add a comment..."
                onChange={(e) => setData({...data, body: e.target.value})}
               
              />
                

            
            <Button variant="contained" onClick={(e) => {handleComment(e)}}>Post</Button>
          </CardContent>
          <CardContent>
            <Stack flexDirection={'row'}>
              
              <Box>
                {
                  comments?.map((items) =>  (
                      <>
                      <Avatar aria-label="recipe"></Avatar>
                      <Typography paragraph color={"grey"}>{items?.userId?.name}</Typography>
                      <Typography paragraph color={"black"}>{items?.body}</Typography>
                      </>
                     
                    )
                  )
                }
              </Box>
            </Stack>
          </CardContent>
        </Collapse>
      </Card>

    </div>
  )
}

export default Cards;
