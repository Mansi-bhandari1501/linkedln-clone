import React from 'react'
import Card from '@mui/material/Card';
import "./card.css";
import { Avatar, CardActions, CardContent, CardHeader, CardMedia, Divider, IconButton, Typography } from '@mui/material';
import RepeatIcon from '@mui/icons-material/Repeat';
// import { ReactComponent as LikeIcon } from "../../utils/Like-logo.svg"
import { ReactComponent as SendIcon } from "../../utils/send-icon.svg"
import LikeIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/CommentOutlined';
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

const Cards = (props) => {
  // const ExpandMore = styled ((props) => {
  //   const { expand, ...other } = props;
  //   return <IconButton {...other} />;
  // })
  const [expanded, setExpanded] = React.useState(false);

  console.log("length", props.images);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
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
            <CommentIcon sx={{ color: "#00000080" }} />
            <h6>Comment</h6>
          </IconButton>
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
      </Card>

    </div>
  )
}

export default Cards;
