import React from "react";
import Post from "../Post";
import Header from "../Header";
import { Avatar, Box, Button, Divider, Stack } from "@mui/material";
import { ReactComponent as MediaIcon } from "../../utils/media-icon.svg"
import { ReactComponent as ArticleIcon } from "../../utils/article-logo.svg"
import { ReactComponent as EventIcon } from "../../utils/event-logo.svg"

import "./home.css";
import MainFooter from "../MainFooter";
const HomeComponent = () => {
  return (
    <div style={{ backgroundColor: "#F4F2EE", height: "100vh" }}>
      <Stack flexDirection={"column"} className="Home">
        <Box className="home-nav">
          <Header />
        </Box>
        <Box className="home-main">
          <Stack
            gap={2.5}
            flexDirection={"row"}
            justifyContent={"center"}
            margin={"30px"}
          >
            <Stack gap={2}>
              <Box className="side-profile">User details
              <Avatar></Avatar>
              </Box>

              <Box>detailss</Box>
            </Stack>

            <Stack>
              <Stack className="AddPost">
                <Stack flexDirection={"row"} gap={1}>
                  {/* <Box
                    sx={{
                      border: "1px solid #d7d8d6",
                      borderRadius: "100%",
                      width: "45px",
                      height: "45px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: "5px",
                    }}
                  >
                    img
                  </Box> */}
                  <Avatar sx={{ backgroundColor: "red" }} aria-label="recipe">
                    R
                  </Avatar>
                  <Box
                    sx={{
                      border: "1px solid #d7d8d6",
                      borderRadius: "50px",
                      width: "84%",
                      height: "45px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "left",
                      paddingLeft: "20px",
                      fontFamily:
                        'system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
                      fontWeight: "600",
                      fontSize: "14px",
                      color:"rgba(0,0,0,0.5)",
                      lineHeight:"21px",
                      fontStyle:"normal"
                     
                      
                    }}
                    
                  >
                    Start a post,try writting with AI
                  </Box>
                </Stack>
                <Stack  className="share-box" flexDirection={"row"}>
                  <Button
                    className="create-post-btns"
                    startIcon={<MediaIcon/>}
                  >
                    Media 
                  </Button>
                  <Button className="create-post-btns" startIcon={<EventIcon/>}>Event</Button>
                  <Button className="create-post-btns" startIcon={<ArticleIcon/>}>Write Article</Button>
                  
                </Stack>
              </Stack>
              <Divider  sx={{marginBottom:"15px"}}/>
              {/* {
              posts?.map((items) => {
                return (
                <Stack className='display-posts'>
                 <Box>{items.title} : </Box> 
                 <Box>{items.body}</Box>
                 </Stack>
                 )
                }
                )
              } */}

              <Post className="Posts" />
            </Stack>
            <Stack sx={{width:"300px"}}>

            <Box className="home-news-section">News</Box>
            <MainFooter/>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </div>
  );
};

export default HomeComponent;
