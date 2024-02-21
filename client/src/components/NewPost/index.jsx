import {
  Avatar,
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  IconButton,
  Input,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./newPost.css";
import EmojiIcon from "@mui/icons-material/SentimentSatisfiedAlt";
// import { useDispatch } from 'react-redux';
// import { createPost } from '../../redux/slice/createPost/createPostAction';
// import {ReactComponent as MediaIcon} from '../../utils/media-icon.svg';
import MediaIcon from "@mui/icons-material/ImageOutlined";
import EventNoteIcon from "@mui/icons-material/EventNote";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import EmojiPicker from "emoji-picker-react";
import { useDispatch } from "react-redux";
import { createPost, setPost } from "../../features/slices/postSlice";
// import InputEmoji from 'react-input-emoji'
const NewPost = ({ hide }, open) => {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  const dispatch = useDispatch()
  // const[title,setTitle] = useState("")
  // const[body,setBody] = useState("")
  const [input, setInput] = useState("")
  const [isopen, setIsopen] = useState(false);

  console.log(input)
  //  console.log(body)
  const handleClickOpen = () => {
    setIsopen(true);
  };
  const handleClose = () => {
    setIsopen(false);
  };

  const handleSubmit = () => {
    dispatch(createPost(input));
    console.log('submitttt')
  }
  return (
    <Box>
      <Box
        className="modal-wrapper"
        onClick={() => hide()}
        style={{
          position: " fixed",
          left: "0",
          right: "0",
          bottom: "0",
          top: "0",
          backgroundColor: "rgba(230, 226, 226, 0.5)",
        }}
      ></Box>
      <Box className="create-post-box">
        <DialogTitle sx={{ m: 0, p: 2, display: "flex" }}>
          <Avatar></Avatar>
          <Stack>
            <Typography>Name</Typography>
            <Typography>Condition</Typography>
          </Stack>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={hide}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            "&:hover": {},
          }}
        >
          <CloseIcon />
        </IconButton>

          <DialogContent sx={{ width: "80%" }}>
             <FormControl sx={{ width: "100%" }} onSubmit={handleSubmit}  >
              <Input
                placeholder="Title of Your Post"
                onChange={(e) => {
                  setInput({ ...input, title: e.target.value })
                }}
              sx={{ width: "100%" }}
              />
              <Input
              style={{height:"100px"}}
              className="post-body"
              placeholder="What do you want to talk about?"
              onChange={(e) => setInput({ ...input,body:e.target.value })}
            />
              <Button sx={{
                height: '50px',
                width: "300px",
                display: "flex",
                justifyContent: "start",
                alignItems: "start"
              }}>
                <EmojiIcon onClick={handleClickOpen} />

                {isopen && (
                  <EmojiPicker className="emojipicker" hide={handleClose} />
                )}
              </Button>
            </FormControl>
            <Button
              component="label"
              role={undefined}
              variant="standard"
              tabIndex={-1}
              sx={{ width: "10px" }}
              startIcon={<MediaIcon />}
            ></Button>
            <Button
              component="label"
              role={undefined}
              variant="standard"
              tabIndex={-1}
              sx={{ width: "10px" }}
              startIcon={<EventNoteIcon />}
            ></Button>
            <Button
              component="label"
              role={undefined}
              variant="standard"
              tabIndex={-1}
              sx={{ width: "10px" }}
              startIcon={<AddCircleOutlineIcon />}
            ></Button>
            <Button
              component="label"
              role={undefined}
              variant="standard"
              tabIndex={-1}
              sx={{ width: "10px" }}
              startIcon={<MoreHorizIcon />}
            ></Button>

            <VisuallyHiddenInput type="file" multiple />
          </DialogContent>
        <Divider />
        <DialogActions>
          {/* <Button autoFocus type="cancel">
            cancel
          </Button> */}
          <Button autoFocus type="submit" >
            <AccessTimeOutlinedIcon />
            Post
          </Button>
        </DialogActions>
         
      </Box>
    </Box>
  );
};

export default NewPost;


























// const handleSubmit = async (e) => {
//   // e.preventDefault();
//   try {
//     const formData = new FormData();
//     formData.append("title", inputs.title);
//     formData.append("body", inputs.body);
//     formData.append("images", images);
//     for (let i = 0; i < images.length; i++) {
//       formData.append("images", images[i]);
//     }
//     dispatch(createPost(formData));
//   } catch (err) {
//     console.log(err);
//   }
// };