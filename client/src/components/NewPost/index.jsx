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
import { useDispatch, useSelector } from "react-redux";
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

  const [input, setInput] = useState({ title: '' })
  const [img, setImg] = useState('')
  const [isopen, setIsopen] = useState('');
  // const [opend, setOpened] = useState(false);
  const handleClickOpen = () => {
    setIsopen(true);
  };
  const handleClose = () => {
    setIsopen(true);
  };

  // const handleOpen = () => {
  //   setOpened(true);
  // };
  // const handleClickClose = () => {
  //   setOpened(false);
  // };

  // const handleFileUpload = (event) => {
  //   const image = event.target.files[0];
  //   const formData = new FormData();
  //   formData.append('images', image);
  //   dispatch(formData)
  // }

  const user = useSelector((state)=>(state.user));

  const handleSubmit = (event) => {

    event.preventDefault();

    let fileLength = Object.keys(img).length
    console.log(fileLength)

    if (fileLength > 4) {
      alert('A maximum of 4 files are allowed');
      return;
    }

    const token = user.userToken;
    const userId = user.userInfo._id;

    console.log("token",token);

    let formData = new FormData();
    formData.append('image1', img[0]);
    formData.append('image2', img[1]);
    formData.append('image3', img[2]);
    formData.append('image4', img[3]);
    formData.append('title', input.title);
    formData.append('userId', userId);

    dispatch(createPost({formData, token}));
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
            // "&:hover": {},
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent sx={{ width: "80%" }}>
          <FormControl sx={{ width: "100%" }} enctype="multipart/form-data" onSubmit={handleSubmit}  >
            <Input
              placeholder="Title of Your Post"
              value={input.title}
              onChange={(e) => {
                setInput({ ...input, title: e.target.value })
              }}
              sx={{ width: "100%" }}
            />
            {/* <Input
              style={{height:"100px"}}
              className="post-body"
              placeholder="What do you want to talk about?"
              onChange={(e) => setInput({ ...input,body:e.target.value })}
            /> */}
            <Button sx={{
              height: '50px',
              width: "0px",
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
              position: "relative",
              marginTop: "300px"
            }}>
              <EmojiIcon onClick={handleClickOpen} />

              {isopen && (
                <EmojiPicker className="emojipicker" hide={handleClose}
                  sx={{
                    width: "50px",
                    paddingTop: "10px",
                    "&:MuiButtonBase-root-MuiButton-root": {
                      width: "50px",
                    }
                  }}
                />
              )}
            </Button>
          </FormControl>

          <Button

            component="label"
            role={undefined}
            variant="standard"
            tabIndex={-1}
            sx={{ width: "10px" }}
            startIcon={<MediaIcon />
            }
          // onClick={handleFileUpload}
          />
          <input type="file" multiple="multiple" id='post_images' class="custom-file-input" name='post_images' onChange={(e) => {
            setImg(e.target.files)
          }} />
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

          <VisuallyHiddenInput type="file" />
        </DialogContent>
        <Divider />
        <DialogActions>
          {/* <Button autoFocus type="cancel">
            cancel
          </Button> */}
          <Button autoFocus type="submit" onClick={handleSubmit}>
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