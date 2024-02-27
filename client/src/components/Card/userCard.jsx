// import React from 'react'

import { Avatar, Box, Button, Card, CardHeader, IconButton, Typography } from "@mui/material";
import Bgimage from "../../assets/bgimage.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../../features/connection/connectionAction";

export default function UserCard(props) {
const dispatch = useDispatch();
const user = useSelector((state) => state.user);
const senderId = user.userId;
// console.log(userId)
console.log(props.userId)
const token = user.userToken;
const receiverId = props.userId ;
const handleConnect=()=>{
  dispatch(addConnection({receiverId,senderId,token}));
}

  return (
    <Card sx={{ width: "10vw" }}>
      <Box sx={{ position: "relative" }}>
        <img src={Bgimage} alt="logo " style={{ height: "80px" }} />
        {/* </Box> */}
        <CardHeader
          sx={{ display: "flex", flexDirection: "column" }}
          backgroundImage={<img src={Bgimage} alt="logo " />}
          avatar={
            <Avatar sx={{ height: "80px", width: "80px", position: "absolute", top: "30px", right: "50px" }} aria-label="recipe">
              {/* <img src={Profile} style={{objectFit:"container"}}></img> */}
            </Avatar>
          }

          title={
            <Typography sx={{ position: "relative", top: "10px" }}>
              {props.email}
            </Typography>
          }

          subheader={
            <Typography sx={{ position: "relative", top: "10px", fontSize: "12px",left:"50px" }}>
              workAt
            </Typography>
          }

        />
        <Button sx={{
          height: "30px",
          marginLeft: "50px", border: "1px solid #0B66C2", marginBottom: "15px", borderRadius: "20px"
        }}
        onClick={handleConnect}
        >
          Connect
          </Button>
      </Box>

    </Card>
  );
}
