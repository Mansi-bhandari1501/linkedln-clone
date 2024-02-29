import React, { useState } from "react";
import Card from "@mui/material/Card";
import "./card.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {
  Avatar,
  Box,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import RepeatIcon from "@mui/icons-material/Repeat";
// import { ReactComponent as LikeIcon } from "../../utils/Like-logo.svg"
import { ReactComponent as SendIcon } from "../../utils/send-icon.svg";
import LikeIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/CommentOutlined";
import InputEmoji from "react-input-emoji";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  createComment,
  fetchComment,
} from "../../features/comment/commentAction";
import Profile from "../../assets/profile.png"
// import EmojiPicker from "emoji-picker-react";
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
    marginLeft: "auto",
    height: "500px",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  let createdAt = props.createdAt;
  console.log(createdAt)
  
  var date = new Date(createdAt)
  console.log(date.getDate() +  " " + date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear())
  
  // Or even more concise (Thanks @RobG)
  console.log(date.toLocaleString('en-GB', {day:'numeric', month: 'long', year:'numeric'}))
  const dispatch = useDispatch();
  const user = useSelector(state=>state.user.userInfo);
  // console.log(user.firstName);
  const userId = useSelector((state) => state.user.userInfo._id);
  // console.log('USER',userId)
  const [expanded, setExpanded] = React.useState(false);
  const [body, setBody] = useState("");
  function handleOnEnter(body) {
    console.log("enter", body);
  }

  // console.log("length", props.images);
  // console.log("props", props.postId);
  // console.log(body);
  const handleExpandClick = () => {
    setExpanded(!expanded);
    dispatch(fetchComment(props.postId));
  };
  const handleComment = () => {
    const postId = props.postId;
    //  console.log(post_Id)
    const commentData = {
      postId,
      userId,
      body: body,
    };
    // console.log(commentData)
    dispatch(createComment(commentData));
  };

  // const Loading = useSelector((state) => state.comments.isLoading);
  // const iserror = useSelector((state) => state.comments.error);
  const comments = useSelector((state) => state.comments.comments.comment);
  // console.log('COMMENTS', comments, iserror, Loading)
  console.log('coMMents',comments)
  return (
    <div>
      <Card sx={{ width: "550px", marginBottom: "2px", borderRadius: "8px" }}>
       <Box sx={{display:"flex",justifyContent:"space-between"}}>
        
        <CardHeader
          avatar={
            <Avatar  aria-label="recipe" src={Profile} sx={{height:"50px",width:"50px"}}>
              
            </Avatar>
          }
          action={<IconButton aria-label="settings"></IconButton>}
          title={props.user}
          subheader={date.getDate() +  " " + date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear()}
        />
        <MoreHorizIcon sx={{margin:"10px"}}/>
        </Box> 
        <CardContent sx={{marginTop:"0px",paddingTop:"0px"}}>
          <Typography variant="body2" color="text.secondary">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.body}
            {props.content.user}
          </Typography>
        </CardContent>

        <div className="images">
          {props.images.map((image, index) => (
            <div
            key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
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
        <CardActions className="post-action" disableSpacing>
          <Stack direction="row"></Stack>
          <IconButton aria-label="add to favorites" sx={{ color: "#00000080" }}>
            <LikeIcon />
            <h6>Like</h6>
          </IconButton>
          <IconButton
            aria-label="add to favorites"
            sx={{
              "&:MuiButtonBase-root-MuiIconButton-root": {
                height: "10px !important",
              },
            }}
          >
            <CommentIcon
              sx={{ color: "#00000080" }}
              onClick={handleExpandClick}
            />
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
          <IconButton aria-label="add to favorites" className="comment-btn">
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
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Avatar aria-label="recipe" src={Profile} sx={{height:"50px",width:"50px"}}></Avatar>
            <InputEmoji
              multiline
              value={body}
              placeholder="Add a comment..."
              // onChange={(e) => setBody(e.target.value)}
              onChange={setBody}
              cleanOnEnter
              onEnter={handleOnEnter}
            />
            {/* <InputBase
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
            /> */}
            <Button variant="contained" onClick={handleComment}>
              Post
            </Button>
          </CardContent>
          <Divider/>
          <CardContent>
            <Stack flexDirection={"row"}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  width: "100%",
                }}
              >
                {comments?.map((items) => (
                  <>
                    <Box key={items._id} sx={{ display: "flex" }}>
                      <Avatar aria-label="recipe" src={Profile} sx={{height:"50px",width:"50px"}}/>
                      <Box sx={{width: "100%",marginLeft:"15px"}}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          // marginLeft: "15px",
                          backgroundColor: "#F2F2F2",
                          width: "100%",
                          gap:"5px"
                          
                        }}
                      >
                        <Box   sx={{
                          display: "flex",
                          justifyContent:"space-between"}}>
                        <Typography sx={{padding:"5px"}} color={"black"}>
                          {items?.userId?.firstName} {items?.userId?.lasName}
                          </Typography>
                        <MoreHorizIcon sx={{marginLeft:"200px"}}/>
                        </Box>

                        <Typography sx={{padding:"5px"}} color={"black"}>{items.body}</Typography>
                      </Box>
                        <Box sx={{fontSize:"10px"}}>
                          <IconButton  sx={{fontSize:"12px"}}>Like</IconButton>
                          <IconButton  sx={{fontSize:"12px"}}>Reply</IconButton>
                          {/* <IconButton  sx={{fontSize:"12px"}}>Delete</IconButton> */}
                        </Box>
                      </Box>
                    </Box>
                  </>
                ))}
              </Box>
            </Stack>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default Cards;
