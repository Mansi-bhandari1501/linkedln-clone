import React from "react";
import Post from "../Post";
import Header from "../Header";
import { Box, Button, Divider, Stack } from "@mui/material";
import { ReactComponent as MediaIcon } from "../../assets/media-icon.svg";
import "./home.css";
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
              <Box className="side-profile">User details</Box>

              <Box>detailss</Box>
            </Stack>

            <Stack>
              <Stack className="AddPost">
                <Stack flexDirection={"row"} gap={1}>
                  <Box
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
                  </Box>
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
                        '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
                      fontWeight: "500",
                      fontSize: "15px",
                    }}
                  >
                    Start a post
                  </Box>
                </Stack>
                <Stack flexDirection={"row"}>
                  <Button
                    className="create-post-btns"
                    startIcon={<MediaIcon />}
                  >
                    Media
                  </Button>
                  <Button className="create-post-btns">Event</Button>
                  <Button className="create-post-btns">Write Article</Button>
                </Stack>
              </Stack>
              <Divider />
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

            <Box className="home-news-section">News</Box>
          </Stack>
        </Box>
      </Stack>
    </div>
  );
};

export default HomeComponent;
