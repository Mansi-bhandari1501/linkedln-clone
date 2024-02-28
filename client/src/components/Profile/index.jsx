import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Header from "../Header";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import FormDialog from "../Profile-Form/index.jsx";
import Bgimage from "../../assets/bgimage.jpeg";
import { useDispatch, useSelector } from "react-redux";
import NewPost from "../NewPost/index.jsx";
const ProfileComponent = () => {
  const [open, setOpen] = useState (false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // const dispatch = useDispatch();

  const user = useSelector((state) => state.user.userInfo);
 console.log(user)
 const handleClick =(e)=>{
  
 }
  return (
    <Box
      sx={{ backgroundColor: "#F4F2EE", height: "100vh", marginTop: "30px" }}
    >
      <Box className="home-nav">
        <Header />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "25px" }}>
        {/* <Stack sx={{height:"500px"}} flexDirection={"row"} justifyContent={'space-around'}>   */}

        <Stack
          // sx={{
          //   width: "42vw",
          //   border: "1px solid grey",
          //   backgroundColor: "white",
          //   borderRadius: "10px",
          // }}
        >
          <Box
           sx={{
            width: "42vw",
            border: "1px solid grey",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
          >
            
         
            <Box
              sx={{
                height: "200px",
                // border: "1px solid blue",
                position: "relative",
                width: "2",
              }}
            >
              <img
                style={{ width: "100%", objectFit: "fill", overflow: "hidden" }}
                src={Bgimage}
                alt=""
              />
            </Box>
            <Box>
              <Box sx={{ width: "100% ", display: "flex", flexDirection: "column", position: 'relative' }}>
                <Avatar
                  sx={{
                    height: "150px",
                    width: "150px",
                    positiion: "absolute",
                    top: "-90px",
                    left: "30px",
                    border: "1px solid white",
                  }}
                ></Avatar>
                <Box  sx={{
                  position: "absolute",
                  top: "8vh",
                  left: "3vw"
                }}>
                  <Box>
               {user.firstName} {user.lasName}
                  </Box>
                  <Box>
                  student at punjabi university Patiala
                  {/* {user.education} */}
                  </Box>
                </Box>
              </Box>
              <Box sx={{ position: "absolute", right: "730px", top: "290px" }}>
                <FormDialog
                  className="edit-btn"
                  sx={{
                    "&:MuiButtonBase-root-MuiButton-root": {
                      position: "absolute",
                      top: "230px",
                      right: "300px",
                      borderColor: "white",
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>
            
        <Box
         sx={{
          width: "42vw",
          border: "1px solid grey",
          backgroundColor: "white",
          borderRadius: "10px",
          marginTop:"10px"
        }}
        >
          <Box sx={{width: "100%",display:"flex",justifyContent:"space-between",padding:"10px"}}>

          <Typography sx={{marginLeft:"10px",marginTop:"10px"}}>
          Activity
          </Typography>
          <Box>

          <Button sx={{marginLeft:"510px",marginTop:"0px"}}
          onClick={handleClickOpen}>create a post</Button>
          {open && <NewPost hide={handleClose} />}
          <ModeEditIcon sx={{size:"small"}} />
          </Box>
          <Box sx={{
            display:"flex",flexDirection:"column",
          }
          }>
          {/* <Divider/>
            comments */}
          </Box>
          </Box>
        </Box>
        <Box
         sx={{
          width: "42vw",
          border: "1px solid grey",
          backgroundColor: "white",
          borderRadius: "10px",
          marginTop:"10px"

        }}
        >
          <Box sx={{  width: "100%",display:"flex",justifyContent:"start",flexDirection:"column"}}>

          <Typography sx={{marginLeft:"10px",marginTop:"10px"}}>
          Experience
          </Typography>
          <Box>
          <Box sx={{marginLeft:"50px",marginTop:"8px",marginBottom:"8px"}}>
            Zenmonk
            {/* {user} */}
          </Box>
            {/* comments */}
          </Box>
          </Box>
        </Box>
        </Stack>
        <Stack
          sx={{
            width: "15vw",
            border: "1px solid grey",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <Box sx={{ marginTop: "8px", marginBottom: "8px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <h4>Profile Language </h4>
              <ModeEditIcon />
            </Box>
            <Typography sx={{ paddingLeft: "32px" }}>English</Typography>
          </Box>
          <Divider />
          <Box sx={{ marginTop: "8px", marginBottom: "18px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <h4>Public profile & URL </h4>
              <ModeEditIcon />
            </Box>
            <Typography sx={{ paddingLeft: "32px", marginBottom: "18px" }}>
              www.linkedin.com/d-b0ba2a20b
            </Typography>
            <Divider />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProfileComponent;
