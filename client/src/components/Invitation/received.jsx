import { Avatar, Box, Button, Divider, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addConnection, fetchReceivedConnection, rejectConnection } from '../../features/connection/connectionAction'
import Profile from "../../assets/profile.png" 

const Received = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user);
  const token = user.userToken;
  const receiverId = user.userId;
  useEffect(() => {
    dispatch(fetchReceivedConnection({ receiverId, token }))
  }, [dispatch])
  const connections = useSelector((state) => state.connection.received);
  
  const handleConnect = (i) => {
    const status = "active";
    dispatch(addConnection({ senderId: i, receiverId, status, token }))
  }
  const handleIgnore =(i) =>{
    
    
    const status="rejected";
   dispatch (rejectConnection({senderId: i,receiverId,status,token}))
 }
  return (
    <Stack sx={{ display: 'flex', flexDirection: 'column' }}>
      {connections?.map((content) => {
        return (
          <Box>
            <Stack key={content._id} sx={{ margin: '15px', width: "39vw" }} flexDirection={'row'}>
              <Box sx={{ display: 'flex', width: "41vw", justifyContent: "space-between" }}>

                <Box sx={{ display: 'flex', gap: "10px" }}>
                  <Avatar src={Profile}></Avatar>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography sx={{ fontFamily: "system-ui", fontSize: "15px" }}>
                      
                      {content?.sender?.firstName} {content?.sender?.lasName}
                    </Typography>
                    <Typography sx={{ fontFamily: "system-ui", fontSize: "12px" }}>

                      {content?.sender?.city}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Button onClick={() => handleIgnore(content?.sender?._id)}>Ignore</Button>
                  <Button
                    onClick={() => handleConnect(content?.sender?._id)}
                    sx={{ border: "1px solid #0B66C2", borderRadius: "20px" }}>Accept</Button>
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

export default Received;
