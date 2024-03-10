import React, { useEffect, useState } from "react";
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
import { ReactionBarSelector } from '@charkour/react-reactions';
import { addReaction, getReactions, removeReaction } from "../../features/Reaction/reactionAction";


const Cards = (props) => {
// console.log(props.content.images)
const images = props.content.images;
// const name= props.content.userid.firstName 
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

  const defaultReaction = <LikeIcon sx={{ height: "24px", width: "24px", marginRight: "4px", color: "#5E5E5E" }} />;
  const emojis = {
    Like: '👍',
    Celebrate: '👏',
    Support: '🫰',
    love: '❤️',
    Insightful: '💡',
    Funny: '😂',
    defaultReaction
  }
  // const [open, setOpen] = useState(false);
  const [emoji, setEmoji] = useState(defaultReaction);
  const [emojiType, setEmojiType] = useState('Like');

  const postId = props.postId;
  let createdAt = props.content.createdAt;
  var date = new Date(createdAt)

  const dispatch = useDispatch();
  const user = useSelector(state => state.user.userInfo);
  const reaction = useSelector(state => state.reaction);
  console.log("🫨🫨🫨",reaction.reactions.coutReaction
  )
  const userId = useSelector((state) => state.user.userInfo._id);
  const [expanded, setExpanded] = React.useState(false);
  const [body, setBody] = useState("");

  useEffect(()=>{
    console.log("🤦‍♀️🤦‍♀️",postId)
    dispatch(getReactions(postId))
  },[dispatch])

  function handleOnEnter(body) {
    console.log("enter", body);
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
    dispatch(fetchComment(props.postId));
  };
  // console.log("postttt",postId)
  const handleComment = () => {
    const commentData = {
      postId,
      userId,
      body: body,
    };
    dispatch(createComment(commentData));
  };
//  const reactId = useSelector(state => state)
//  console.log(reactId)
  // const handleEmoji = () =>{
  //   dispatch(removeReaction({reactId}))
  // }
  const comments = useSelector((state) => state.comments.comments.comment);



  return (
    <div>
      <Card sx={{ width: "550px", marginBottom: "2px", borderRadius: "8px", position: "relative" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>

          <CardHeader
            avatar={
              <Avatar aria-label="recipe" src={Profile} sx={{ height: "50px", width: "50px" }}>
              </Avatar>
            }
            action={<IconButton aria-label="settings"></IconButton>}
            title={props.content.userid.firstName +  props.content.userid.lasName }
            subheader={date.getDate() + " " + date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear()}
          />
          <MoreHorizIcon sx={{ margin: "10px" }} />
        </Box>
        <CardContent sx={{ marginTop: "0px", paddingTop: "0px" }}>
          <Typography variant="body2" color="text.secondary">
            {props.content.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.body}
            {/* {props.content.userid.firstName}  {props.content.userid.firsName} */}
          </Typography>
        </CardContent>

        <div className="images">
          {images?.map((image, index) => (
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
                height={images.length > 1 ? "100%" : "100%"}
                width={images.length > 1 ? "50%" : "100%"}
                image={`${image}`}
                alt="post image"
                sx={{ marginBottom: "5px", display: "inline-flex" }}
              />
            </div>
          ))}
        </div>
<Stack flexDirection={"row"} sx={{marginLeft:"10px",gap:"5px"}}>
  <Typography sx={{fontFamily:"sysyem-ui",fontStyle:"normal",fontWeight:"400",fontSize:"14px"}}>

{reaction.reactions.coutReaction} 
  </Typography>   
  <LikeIcon sx={{ height: "20px", width: "16px", marginRight: "4px", color: "#5E5E5E" }}/>
</Stack>
        {/* {props.likes} */}
        <Divider sx={{ marginBottom: "5px" }} />
        <CardActions className="post-action" disableSpacing>
          <Stack direction="row"></Stack>
          <Button className="reaction-btn" aria-label="add to favorites" sx={{ color: "#00000080", textTransform: "none" }}>
            <Box
              sx={{
                fontSize: "25px"
              }}
              >
              {emoji}
            </Box>
            <h6 >{emojiType} </h6>
              
            <Box className='reaction-type'><ReactionBarSelector
             style={{width:"310px"}}
              reactions={[{ label: "Like", node: <node>👍</node>, key: "Like" },
              { label: "Celebrate", node: <node>👏</node>, key: "Celebrate" },
              { label: "Support", node: <node>🫰</node>, key: "Support" },
              { label: "love", node: <node>❤️</node>, key: "love" },
              { label: "Insightful", node: <node>💡</node>, key: "Insightful" },
              { label: "Funny", node: <node>😂</node>, key: "Funny" }]}
              onSelect={(key) => {
                if (key === emojiType && emoji === emojis[emojiType]) {
                  setEmoji(emojis.defaultReaction);
                  setEmojiType("Like");
                }
                else {
                  setEmoji(emojis[key]);
                  setEmojiType(key);
                }
                const obj = {
                  postId: postId,
                  userId: userId,
                  type: key,
                }
                dispatch(addReaction(obj));
              }} />
            </Box>



          </Button>
{/* 
<Box><ReactionCounter/></Box> */}
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
            <Avatar aria-label="recipe" src={Profile} sx={{ height: "50px", width: "50px" }}></Avatar>
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
          <Divider />
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
                      <Avatar aria-label="recipe" src={Profile} sx={{ height: "50px", width: "50px" }} />
                      <Box sx={{ width: "100%", marginLeft: "15px" }}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            // marginLeft: "15px",
                            backgroundColor: "#F2F2F2",
                            width: "100%",
                            gap: "5px"

                          }}
                        >
                          <Box sx={{
                            display: "flex",
                            justifyContent: "space-between"
                          }}>
                            <Typography sx={{ padding: "5px" }} color={"black"}>
                              {items?.userId?.firstName} {items?.userId?.lasName}
                            </Typography>
                            <MoreHorizIcon sx={{ marginLeft: "200px" }} />
                          </Box>

                          <Typography sx={{ padding: "5px" }} color={"black"}>{items.body}</Typography>
                        </Box>
                        <Box sx={{ fontSize: "10px" }}>
                          <IconButton sx={{ fontSize: "12px" }}>Like</IconButton>
                          <IconButton sx={{ fontSize: "12px" }}>Reply</IconButton>
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
