import React, { useState } from "react";
import Post from "../Post";
import Header from "../Header";
import { Avatar, Box, Button, Divider, Stack, Typography } from "@mui/material";
import { ReactComponent as MediaIcon } from "../../utils/media-icon.svg";
import { ReactComponent as ArticleIcon } from "../../utils/article-logo.svg";
import { ReactComponent as EventIcon } from "../../utils/event-logo.svg";
import Profile from "../../assets/profile.png"
import "./home.css";
import MainFooter from "../MainFooter";
import NewPost from "../NewPost";
import { useSelector } from "react-redux";
import bgImge from "../../assets/bg.png"
import { Link } from "react-router-dom";
const HomeComponent = () => {

  const user = useSelector((state) => state.user.userInfo);
console.log(user)
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
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
            marginTop={"30px"}
          >
            <Stack sx={{height:"50vh"}}>
              <Box className="side-profile" sx={{backgroundColor:"white"}}>
              <Box  sx={{position:"relative",backgroundColor:"white"}}>
              <Link   to="/profile" style={{textDecoration:"none"}}>
                <img src={bgImge} style={{width:"200px",}} alt=""  />
                <Avatar src={Profile} sx={{height:"80px",width:"80px",position:"absolute",top:"30px",right:"65px"}}></Avatar>
              {/* <Box sx={{position:"absolute",top:"110px",left:"45px"}}> */}
         
               <Typography sx={{position:"absolute",top:"110px",left:"45px"}}>  {user.firstName} {user.lasName} </Typography>
               </Link> 
                <Typography>{user.education}</Typography>
              {/* </Box> */}
                </Box>
             
              <Divider sx={{paddingTop:"100px"}}/>
              </Box>
             
              <Box></Box>
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
                  <Avatar src={Profile} sx={{ backgroundColor: "red" }} aria-label="recipe">
                    
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
                      color: "rgba(0,0,0,0.5)",
                      lineHeight: "21px",
                      fontStyle: "normal",
                    }}
                  >
                    <Button
                      sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "left",
                        fontFamily:
                          '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
                        fontWeight: "500",
                        background: "none",
                        color: "rgb(0,0,0,0.6)",
                        textTransform: "none",
                        "&:hover": { background: "none" },
                      }}
                      onClick={handleClickOpen}
                    >
                      Start a post,try writting with AI
                    </Button>
                    {open && <NewPost hide={handleClose} />}
                  </Box>
                </Stack>
                <Stack className="share-box" flexDirection={"row"}>
                  <Button
                    className="create-post-btns"
                    startIcon={<MediaIcon />}
                  >
                    Media
                  </Button>
                  <Button
                    className="create-post-btns"
                    startIcon={<EventIcon />}
                  >
                    Event
                  </Button>
                  <Button
                    className="create-post-btns"
                    startIcon={<ArticleIcon />}
                  >
                    Write Article
                  </Button>
                </Stack>
              </Stack>
              <Divider sx={{ marginBottom: "15px" }} />
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
            <Stack sx={{ width: "300px" }}>
              <Box className="home-news-section">News</Box>
              <MainFooter />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </div>
  );
};

export default HomeComponent;
