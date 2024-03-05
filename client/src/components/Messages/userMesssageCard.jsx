import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import "./userMessageCard.css";
import Profile from "../../assets/profile.png";
import { useSelector } from "react-redux";

const UserMesssageCard = (content) => {
  // const chats = useSelector((state) => state.chats.chats);
  // console.log(chats[0].updatedAt)
  // let updatedAt =chats[0].updatedAt;
  // var date = new Date(updatedAt)
  // console.log(date)
  console.log(content.content)
  const chats = content.content
  console.log(chats.users)
  const users = chats.users;
  console.log(users[0].firstName);
  let updatedAt = content.content.updatedAt;
  var date = new Date(updatedAt)
  return (
    
      <Stack key={content._id} sx={{ marginTop: "5px", flexDirection: "row", marginTop: "10px",height:"7vh" }}>
        <Avatar
          aria-label="recipe"
          src={Profile}
          sx={{ height: "70px", width: "70px" }}
        ></Avatar>
        <Stack sx={{ flexDirection: "column", gap: "0px", width: "100%" }}>
          <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Typography
              className="userName"
              sx={{ fontSize: "16px", lineHeight: "20px" }}
            >
              {users[0].firstName}
              {/* {chats} {chats.users[1].lasName} */}
              {/* {chats.chatName} */}
            </Typography>
            <Typography
              className="userName"
              sx={{ fontSize: "12px", lineHeight: "20px", marginRight: "15px" }}
            >
              {date.getDate() + " " + date.toLocaleString('default', { month: 'long' })  }
            </Typography>
          </Stack>
          <Typography className="userName" sx={{ fontSize: "14px" }}>
            message
          </Typography>
          {/* <Typography className="userName" sx={{ fontSize: "14px" }}>
              {chats.users[1].firstName} {chats.users[1].lasName} */}
         
          {/* </Typography> */}
          <Divider sx={{ marginTop: "25px" }} />
        </Stack>
      </Stack>
   
  );
};

export default UserMesssageCard;
