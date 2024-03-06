import { Box, Button, Divider, Stack } from '@mui/material'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import GifOutlinedIcon from "@mui/icons-material/GifOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import Textarea from "@mui/joy/Textarea";
// import EditCalendarIcon from "@mui/icons-material/EditCalendar";
// import Icon from "../../assets/LinkedIn_icon.svg.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useDispatch, useSelector } from 'react-redux';
import io from "socket.io-client";
import { addMessage, fetchMessage } from '../../features/messages/messageAction';
import { Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import Profile from "../../assets/profile.png"

const ENDPOINT = "http://localhost:8080"; // "https://talk-a-tive.herokuapp.com"; -> After deployment
var socket, selectedChatCompare;
const MessageTab = (props) => {
  const socket = useMemo(
    () =>
      io("http://localhost:8080", {
        withCredentials: true,
      }),
    []
  );

  const [socketConnected, setSocketConnected] = useState(false)
  const [message, setMessage] = useState([]);  
  const [content, setContent] = useState("");
  const user = useSelector((state) => state.user);
  const senderId = user.userId;
  const token = user.userToken;
  const dispatch = useDispatch();
//  const Toggle = useSelector((state)=>state.messages)
//  console.log(Toggle)
  const chatId = props.receivedData.chatId;
  const chatName = props.receivedData.chatName;
  // console.log(chatId, " ", chatName)
  useEffect(() => {
    dispatch(fetchMessage({ chatId, token }))
  }, [dispatch,props.toggle])

  

    const messagesEndRef = useRef(null)
  
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  
    // useEffect(() => {
    //   scrollToBottom()
    // }, [messages]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(content)
    socket.emit('message',{chatId,content,senderId});
    // dispatch(addMessage({content, chatId, senderId,token}))
    // content, chatId, senderId
    // socket.emit("message", { content: x, chatId,userId });
    setContent("");
  };

  // console.log(props.receivedData)
  const messages = useSelector((state) => state.messages.messages);
  // console.log("👍", messages)


  useEffect(() => {
    // socket = io(ENDPOINT);
    // socket.emit("setup", user);
    // socket.on("connected", () => setSocketConnected(true));
      socket.on("connect", () => {
      setSocketConnected(true)
      console.log("connected", socket.id);
    });

    socket.on("welcome", (s) => {
      console.log(s);
    });

    socket.on(chatId, (data) => {
      console.log(data);
      setMessage((messages) => [...messages, data]);
      scrollToBottom()
      // dispatch(addMessage({content, chatId, senderId,token}))
    })
    console.log(messages);
    return () => {
      socket.disconnect();
    };

  }, []);


// console.log(content)

  return (
    <Box className="message tab" sx={{ width: "80%" }}>
      <Box >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <Box>
            {/* {content?.sender.firstName} */}
            {chatName}
          </Box>
          <Box>
            <MoreHorizIcon />
            <StarBorderOutlinedIcon sx={{ marginLeft: "5px" }} />
          </Box>
        </Box>
        <Box sx={{ height: "65vh" }}>
          <Divider />
          <Stack>
            <Avatar src={Profile} sx={{ height: "100px", width: "100px" ,margin:"15px"}} ></Avatar>
          </Stack>
          <Divider />
          <Box sx={{overflowY:"auto",height:"49vh", autoFocus:"true"}}>

            {messages && messages?.map((content, i) => {
              return (

                <Stack key={content._id}>
                  <Stack sx={{ flexDirection: "row", gap: "5px",marginTop:"15px" ,marginLeft:"8px" }}>

                    <Avatar sx={{height:"60px",width:"60px"}} src={Profile}></Avatar>
                    <Stack sx={{gap:"12px"}}>

                      <Typography sx={{fontSize:"14px",fontFamily:"system-ui",fontWeight:600,lineHeight:"20px",fontStyle:"normal",color:"rgba(0 0 0 0.9)"}}>
                        {content.sender?.email}
                      </Typography>
                      <Typography sx={{fontSize:"14px",fontFamily:"system-ui",fontWeight:400,lineHeight:"20px",fontStyle:"normal",color:"rgba(0 0 0 0.9)"}}>

                        {content.content}
                      </Typography>
                    </Stack>
                  </Stack>


                </Stack>
              )
            })}
            <div useRef={messagesEndRef}/>
          </Box >
        </Box>
        <Box >
          <Divider />
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            minRows={4}
            variant="soft"
            placeholder="write a message"
            sx={{
              width: "90%", overflow: "none", backgroundColor: "#F4F2EE", border: "none", margin: "10px"
            }}

          />
          {/* <TextField id="filled-basic" label="write a message" variant="filled"  sx={{width:"100%"}}/> */}

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
              <Button onClick={handleSubmit} sx={{ marginBottom: "15px" }}>send</Button>
              <MoreHorizIcon />
            </Box>
          </Box>
        </Box>
      </Box>

    </Box>
  )
}

export default MessageTab
