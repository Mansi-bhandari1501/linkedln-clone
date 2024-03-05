import { Box, Button, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import GifOutlinedIcon from "@mui/icons-material/GifOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import Textarea from "@mui/joy/Textarea";
// import EditCalendarIcon from "@mui/icons-material/EditCalendar";
// import Icon from "../../assets/LinkedIn_icon.svg.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useSelector } from 'react-redux';
import io from "socket.io-client";

const ENDPOINT = "http://localhost:8080"; // "https://talk-a-tive.herokuapp.com"; -> After deployment
var socket, selectedChatCompare;
const MessageTab = () => {
    const [socketConnected,setSocketConnected]= useState(false)
    const user = useSelector((state)=>state.chats)
    console.log(user)

    // useEffect(()=>{
    //     socket = io(ENDPOINT);
    //     socket.emit("setup",user);
    //     socket.on("connected",()=>setSocketConnected(true));
    // },[])
  return (
    <Box sx={{ width: "80%" }}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "10px",
      }}
    >
      <Box>USERnAME</Box>
      <Box>
        <MoreHorizIcon />
        <StarBorderOutlinedIcon sx={{ marginLeft: "5px" }} />
      </Box>
    </Box>
    <Box sx={{ height: "65vh" }}>
      <Divider />
      <Box>


        
      </Box>
    </Box>
    <Box >
      <Divider />
      <Textarea
        minRows={4}
        variant="soft"
        placeholder="write a message"
        sx={{
          width: "90%", overflow: "none", backgroundColor: "#F4F2EE", border: "none",margin:"10px"
        }}

      />
      {/* <TextField id="filled-basic" label="write a message" variant="filled"  sx={{width:"100%"}}/> */}
      <Box></Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "8px",
        }}
      >
        <Box sx={{ display: "flex", gap: "20px" }}>
          <InsertPhotoOutlinedIcon />
          <LinkOutlinedIcon />
          <GifOutlinedIcon />
          <SentimentSatisfiedOutlinedIcon />
        </Box>
        <Box>
          <Button sx={{ marginBottom: "15px" }}>send</Button>
          <MoreHorizIcon />
        </Box>
      </Box>
    </Box>
  </Box>
  )
}

export default MessageTab
