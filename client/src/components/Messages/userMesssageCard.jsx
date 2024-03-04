import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import "./userMessageCard.css";
import Profile from "../../assets/profile.png";

const UserMesssageCard = () => {
  return (
    <Stack sx={{ marginTop: "5px", flexDirection: "row", marginTop: "10px" }}>
      <Avatar
        aria-label="recipe"
        src={Profile}
        sx={{ height: "80px", width: "80px" }}
      ></Avatar>
      <Stack sx={{ flexDirection: "column", gap: "0px", width: "100%" }}>
        <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Typography
            className="userName"
            sx={{ fontSize: "16px", lineHeight: "20px" }}
          >
            userName
          </Typography>
          <Typography
            className="userName"
            sx={{ fontSize: "16px", lineHeight: "20px", marginRight: "15px" }}
          >
            time
          </Typography>
        </Stack>
        <Typography className="userName" sx={{ fontSize: "14px" }}>
          companyName
        </Typography>
        <Typography className="userName" sx={{ fontSize: "14px" }}>
          message
        </Typography>
        <Divider sx={{ marginTop: "15px" }} />
      </Stack>
    </Stack>
  );
};

export default UserMesssageCard;
