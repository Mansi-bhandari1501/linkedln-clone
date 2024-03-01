import { Avatar, Box, Button, Divider, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPendingConnection, rejectConnection } from '../../features/connection/connectionAction';
import Profile from "../../assets/profile.png"

const Sent = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user);
  const token = user.userToken;
  const senderId = user.userId;

  useEffect(() => {
    dispatch(fetchPendingConnection({ senderId, token }))
  }, [dispatch])

  const connections = useSelector((state) => state?.connection?.connections.connection);
  console.log(connections);

  const handleWithdraw = (i) => {
    console.log(token)
    const status = "rejected";
    dispatch(rejectConnection({ senderId, receiverId: i, status, token }))
  }

  return (
    <Stack sx={{ display: 'flex', flexDirection: 'column', height: "auto" }}>
      {connections && connections?.map((content) => {
        return (
          <Box key={content?.receiver?._id}>
            <Stack sx={{ margin: '15px', width: "39vw" }} flexDirection={'row'}>
              <Box sx={{ display: 'flex', width: "41vw", justifyContent: "space-between" }}>

                <Box sx={{ display: 'flex', gap: "10px" }}>
                  <Avatar src={Profile}></Avatar>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography sx={{ fontFamily: "system-ui", fontSize: "15px" }}>

                      {content?.receiver?.firstName} {content?.receiver?.lasName}
                    </Typography>
                    <Typography sx={{ fontFamily: "system-ui", fontSize: "12px" }}>

                      {content?.receiver?.city}
                    </Typography>
                  </Box>
                </Box>
                <Box>

                  <Button onClick={() => handleWithdraw(content?.receiver?._id)} sx={{ border: "1px solid #0B66C2", borderRadius: "20px" }}>Withdraw</Button>
                </Box>
              </Box>

            </Stack>
            <Divider />

          </Box>
        )
      })
      }

    </Stack>
  )

}

export default Sent;
