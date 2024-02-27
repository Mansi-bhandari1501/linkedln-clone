import { Avatar, Box, Button, Divider, Stack, Typography } from '@mui/material';
import React, { useState } from 'react'
import Header from '../Header';
import MainFooter from '../MainFooter';
import Received from './received.jsx';
import Sent from './send.jsx';

const ManageInvitation = () => {
  const [type,setType] =  useState(true);
  return (
    <Box
    sx={{ backgroundColor: "#F4F2EE", height: "100vh", marginTop: "30px" }}
  >
     <Box className="home-nav">
        <Header />
      </Box>
    <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center",gap:"20px"}}>
    <Stack
          sx={{
            width: "42vw",
            border: "1px solid grey",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <Box sx={{padding:"10px"}}>
            <Box
              sx={{
                height: "200px",
                // border: "1px solid blue",
                position: "relative",
                
              }}
            >
              <Typography>Manage Invitations</Typography>
            <Box>
            <Button 
            onClick={()=>{setType(true)}}
            >Received</Button>
            <Button
             onClick={()=>{setType(false)}}
             >Send</Button>
            </Box>
            <Divider/>
            {type ? <Received /> : <Sent /> }
            </Box>
          </Box>
        </Stack>
        <Stack
          sx={{
            width: "15vw",
           
          }}
        >
          <Box sx={{
            width: "15vw",
            border: "1px solid grey",
            backgroundColor: "white",
            borderRadius: "10px",
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around"
          }}>
            AD
            <Avatar></Avatar>
          </Box>
          <MainFooter/>
        </Stack>
    </Box>
    </Box>
  )
}

export default ManageInvitation;
