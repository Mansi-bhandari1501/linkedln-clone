import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react'
import Header from '../Header';
import { Link } from 'react-router-dom';
import MainFooter from '../MainFooter';
import NotificationsTab from './notificationsTab';
import Ads from "../../assets/ads.png"
const NotificationsComponent = (socket) => {
  return (
    <Box
      sx={{ backgroundColor: "#F4F2EE", height: "100vh", marginTop: "30px" }}
    >
      <Box className="home-nav">
        <Header />
      </Box>
      <Stack sx={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "20px" }}>
        <Stack sx={{
          width: "11vw",
          border: "1px solid #DFDEDA",
          backgroundColor: "white",
          borderRadius: "10px",
          height: "10vh",
          paddingLeft: "16px",
          paddingTop: "20px",
          gap: "5px"
        }}>
          <Typography sx={{ fontSize: "16px", fontFamily: "system-ui", fontWeight: 600, lineHeight: "24px", fontStyle: "normal", color: "rgba(0 0 0 0.9)" }}>Manage your <br /> Notifications</Typography>
          <Link style={{ backgroundColor: "none", textDecoration: "none" }}>
            <Typography sx={{ fontSize: "14px", fontFamily: "system-ui", fontWeight: 600, lineHeight: "20px", fontStyle: "normal", color: "#0B66C2" }}>View Settings </Typography>
          </Link>
        </Stack>
        <Stack
          sx={{
            width: "30vw",
            gap: "10px"
            // border: "1px solid #DFDEDA",
            // backgroundColor: "white",
            // borderRadius: "10px",
            // height:"auto"
          }}
        >
          <Stack sx={{
            width: "30vw",
            border: "1px solid #DFDEDA",
            backgroundColor: "white",
            borderRadius: "10px",
            height: "64px",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            // paddingLeft: "10px",

            // color: "rgba(0 0 0 0.9)"
            // justifyContent:"space-between"
          }}>
            <Stack sx={{ marginLeft: "15px", gap: "10px", flexDirection: "row", }}>

              <Button sx={{
                border: "1px solid green",
                height: "30px",
                textTransform: "none",
                borderRadius: "25px",
                width: "5px",
                backgroundColor: "green",
                color: "white",
                fontSize: "16px",
                fontFamily: "system-ui",
                fontWeight: "600",
                lineHeight: "16px",
                fontStyle: "normal",
                // color: "rgba(0 0 0 0.9)"
              }}>
                All
              </Button>
              <Button sx={{
                border: "1px solid #DFDEDA",
                height: "30px",
                textTransform: "none",
                borderRadius: "25px",
                width: "88px",
                color: "grey",
                fontSize: "16px",
                fontFamily: "system-ui",
                fontWeight: 600,
                lineHeight: "16px",
                fontStyle: "normal",
                padding: "8px"
              }}>
                My posts
              </Button>
              <Button sx={{
                color: "grey",
                fontSize: "16px",
                fontFamily: "system-ui",
                fontWeight: 600,
                lineHeight: "16px",
                fontStyle: "normal",
                border: "1px solid #DFDEDA",
                height: "30px",
                textTransform: "none",
                borderRadius: "25px",
                width: "88px",
                padding: "8px"
              }}>Mentions</Button>
            </Stack>
          </Stack>
          <Stack sx={{
            width: "30vw",
            border: "1px solid #DFDEDA",
            backgroundColor: "white",
            borderRadius: "10px",
            height: "auto",

          }}>
            <NotificationsTab 
            socket={socket}
            />
            
          </Stack>

        </Stack>
        <Stack
          sx={{
            width: "15vw",
            borderRadius: "10px",
            height: "50vh"
          }}>
          <Box sx={{
            width: "15vw",
            // border: "1px solid #DFDEDA",
            // backgroundColor: "white",
            // borderRadius: "10px",
          }}>
          
              <img src={Ads} alt='' style={{objectFit:"fit",borderRadius:"10px"}}/>
          </Box>

          <Box>
            <Box>
            </Box>
            <MainFooter />
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}

export default NotificationsComponent;
