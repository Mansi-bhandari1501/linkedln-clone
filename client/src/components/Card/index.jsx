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
import { styled } from '@mui/material/styles'; import { useDispatch, useSelector } from 'react-redux';
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
    height: '500px',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const dispatch = useDispatch();
  // const user = useSelector(state=>state);
  // console.log(user);
  const userId = useSelector((state) => state.user.userInfo._id);
  // console.log('USER',userId)
  const [expanded, setExpanded] = React.useState(false);
  const [body, setBody] = useState("")
  // console.log("length", props.images);
  // console.log("props",props.body);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    dispatch(fetchComment(props.postId));
  };
  const handleComment = () => {
   const  postId = props.postId;
  //  console.log(post_Id)
    const commentData = {
      postId,
      userId,
      body: body,
      
    }
    // console.log(commentData)
     dispatch(createComment(commentData))
  }


  const Loading = useSelector((state) => state.comments.isLoading);
  const iserror = useSelector((state) => state.comments.error);
  const comments = useSelector((state) => state.comments.comments.comment);
  // console.log('COMMENTS', comments, iserror, Loading)
  // console.log('coMMents',comments.comment.body)
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
              flexDirection: "row",
              width: "100%"
            }}>
              <CardMedia

                key={index}
                component="img"
                height={props.images.length > 1 ? "100%" : "100%"}
                width={props.images.length > 1 ? "50%" : "100%"}
                image={`${image}`}
                alt="post image"
                sx={{ marginBottom: "5px", display: "inline-flex" }}
              />
            </div>
          ))}
        </div>


        {/* {props.likes} */}
        <Divider sx={{ marginBottom: "5px" }} />
        <CardActions className='post-action' disableSpacing>
          <Stack direction="row"></Stack>
          <IconButton aria-label="add to favorites" sx={{ color: "#00000080" }}>
            <LikeIcon />
            <h6>Like</h6>
          </IconButton>
          <IconButton aria-label="add to favorites"
            sx={{
              
              "&:MuiButtonBase-root-MuiIconButton-root": {
                height: "10px !important",
              }
            }}>
            <CommentIcon sx={{ color: "#00000080" }} onClick={handleExpandClick} />
            <h6>Comment</h6>
            {/* <ExpandMore
              expand={expanded}
              
              aria-expanded={expanded}
              aria-label="show more"
            >
              <CommentIcon sx={{ color: "#00000080" }} />
              <Typography variant="h6">Comment</Typography>
            </ExpandMore> */}
          </IconButton>
          {/* <IconButton aria-label="add to favorites">
            <CommentIcon sx={{ color: "#00000080" }} />
            <h6>Comment</h6>
          </IconButton> */}
          <IconButton aria-label="add to favorites" className='comment-btn'>
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

          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
            <Avatar aria-label="recipe"></Avatar>
          
            <InputBase
              sx={{
                border: '1px solid #d7d8d6',
                width: '84%',
                height: '45px',
              }}
              multiline
              endAdornment={<EmojiPicker open={false} />}
              value={body}
              placeholder="Add a comment..."
              onChange={(e) => setBody(e.target.value)}
            />
            <Button variant="contained" onClick={handleComment}>Post</Button>
          </CardContent>
          <CardContent>
            <Stack flexDirection={'row'}>

              <Box>
                {
                  comments?.map((items) => (
                    <>
                      <Avatar aria-label="recipe"></Avatar>
                      <Typography  color={"grey"}>{items.userId?.name}</Typography>
                      <Typography  color={"black"}>{items.body}</Typography>
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
};

export default Cards;
