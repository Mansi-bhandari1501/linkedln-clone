import React, { useEffect, useState } from "react";
import Header from "../Header";
import {
  Avatar,
  Box,
  Button,
  Divider,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ReactComponent as Edit } from "../../utils/edIT.svg";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import SearchIcon from "@mui/icons-material/SearchRounded";
import MainFooter from "../MainFooter";

import TuneIcon from "@mui/icons-material/Tune";

import UserMesssageCard from "./userMesssageCard";
import OtherMessage from "./otherMessage";
import { useDispatch, useSelector } from "react-redux";
import { fetchChats } from "../../features/chat/chatAction";
import MessageTab from "./messageTab";

const MessageComponent = () => {
  const [type, setType] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const logId = user.userInfo._id
  console.log(logId)
  // const chats = useSelector((state)=>state)
  // console.log(chats)

  useEffect(() => {
    const token = user.userToken;
    dispatch(fetchChats({ token, logId }));

  }, [dispatch]);

  const chats = useSelector((state) => state.chats.chats);
  console.log(chats)
  return (
    // <Stack sx={{ display: 'flex', flexDirection: 'column' }}>
    //   {connections?.map((content) => {
    <Box
      sx={{ backgroundColor: "#F4F2EE", height: "100vh", marginTop: "10px" }}
    >
      <Box className="home-nav">
        <Header />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          height: "90vh",
        }}
      >
        {/* <Stack sx={{height:"500px"}} flexDirection={"row"} justifyContent={'space-around'}>   */}

        <Stack
          sx={{
            width: "42vw",
            border: "1px solid #DFDEDA",
            borderRadius: "10px",
            backgroundColor: "white",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "",
              borderRadius: "10px",
              // border:"1px solid grey"
            }}
          >
            <Box sx={{ width: "40%" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "8px",
                }}
              >
                <Box>Messaging</Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "10px",
                  }}
                >
                  <Box>
                    <MoreHorizIcon />
                  </Box>
                  <Box>
                    {/* <EditCalendarIcon /> */}
                    <Edit style={{ height: "30px", width: "22px" }} />
                  </Box>
                </Box>
              </Box>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  width: "20vw",
                  marginTop: "4px",
                }}
              >
                <TextField
                  className="search-bar"
                  sx={{
                    Width: "400px",
                    height: "35px",
                    paddingLeft: "12px",
                    marginTop: "5px",
                    // backgroundColor:"#EDF3F8",
                    "& .MuiOutlinedInput-root": {
                      height: "28px",
                      width: "15vw",
                      backgroundColor: "#EDF3F8",
                    },
                    "&.MuiInputBase-input-MuiOutlinedInput-input": {
                      padding: "10px",
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon style={{ color: "black", fontSize: "20px" }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <TuneIcon style={{ color: "black", zIndex: "3" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <Button
                  onClick={() => {
                    setType(true);
                  }}
                >
                  Focused
                </Button>
                <Button
                  onClick={() => {
                    setType(false);
                  }}
                >
                  Other
                </Button>
              </Box>

              <Divider />
              <Box sx={{ height: "10vh" }}>{type ? <Box sx={{ overflowY: "scroll", height: "75vh" }}>
                <>
                  {chats && chats?.map((content, i) => {
                    return (
                      <div key={content._id}>

                        <UserMesssageCard
                          content={content} />
                      </div>
                    )
                  })}
                </>
              </Box>
                :
                <OtherMessage />}
              </Box>
            </Box>
            <hr
              style={{
                marginTop: "2px",
                height: "89vh",
                color: "#DFDEDA",
                width: "",
              }}
            />
            {/* <Divider sx={{height:"500px",color:'black'}}/> */}
            <MessageTab />
            {/* <Box sx={{ width: "80%" }}>
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
            {/* <Box></Box>
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
            </Box>  */}
          </Box>
        </Stack>
        <Stack
          sx={{
            width: "15vw",

            borderRadius: "10px",
          }}
        >
          <Box sx={{ marginTop: "8px", marginBottom: "18px" }}>
            <MainFooter />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default MessageComponent;
