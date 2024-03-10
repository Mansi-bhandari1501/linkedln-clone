import { Avatar, Stack, Typography } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./notificationsTab.css";
import io from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotifications } from "../../features/notification/notification.action";

const NotificationsTab = (props) => {
  const socket = useMemo(
    () =>
      io("http://localhost:4000", {
        withCredentials: true,
      }),
    []
  );
  const dispatch = useDispatch();
  const receiverId = useSelector((state) => state.user.userId);

  useEffect(() => {
    dispatch(fetchNotifications({ receiverId }));
  }, [dispatch]);
  useEffect(() => {
    // socket = io(ENDPOINT);
    // socket.emit("setup", user);
    // socket.on("connected", () => setSocketConnected(true));
    socket.on("welcome", (s) => {
      console.log(s);
    });

    console.log(receiverId);
    socket.emit("notify-room", receiverId);
    // socket.on("connect", () => {
    // //   setSocketConnected(true)
    //   console.log("connected", socket.id);
    // });

    // socket.on(chatId, (data) => {
    //   console.log(data);

    //   dispatch(newMessage(data))
    // })

    return () => {
      socket.off("welcome");
      socket.off("connect");
      // socket.disconnect();
    };
  }, []);

  const handleClickbtn = () => {
    console.log("hello");
  };
  return (
    <Stack
      className="notify"
      onClick={handleClickbtn}
      sx={{
        height: "116px",
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          paddingLeft: "30px",
          paddingTop: "16px",
          paddingBottom: "16px",
        }}
      >
        <Avatar></Avatar>
        <Stack sx={{ gap: "10px", marginLeft: "10px" }}>
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "system-ui",
              fontWeight: 400,
              lineHeight: "18px",
              fontStyle: "normal",
              color: "#000000e6",
            }}
          >
            hihiihigvdfgdfghfdbngnbfgbnfnfdnf dhbsdfhb tergebgfbsfkjbn
            kdfffffffffbhkdjshbkdfjhdkjhbkdbk
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "system-ui",
              fontWeight: 400,
              lineHeight: "18px",
              fontStyle: "normal",
              color: "#000000e6",
            }}
          >
            hihiihi
          </Typography>
        </Stack>
        <Stack>
          <Typography
            sx={{
              fontSize: "12px",
              fontFamily: "system-ui",
              fontWeight: 400,
              lineHeight: "18px",
              fontStyle: "normal",
              color: "#000000e6",
            }}
          >
            1h
          </Typography>
          <MoreHorizIcon sx={{ marginRight: "20px", marginTop: "5px" }} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default NotificationsTab;
