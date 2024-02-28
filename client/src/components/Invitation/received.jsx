import { Avatar, Box, Button, Divider, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchConnection } from '../../features/connection/connectionAction'

const Received = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user);
    const token = user.userToken;
    const userId = user.userId;
    useEffect(() => {
      dispatch(fetchConnection(userId,token))
    }, [dispatch])
    const connections = useSelector((state) => state.connection.connections);
 
console.log(connections)
  
    return (
      <Stack sx={{ display: 'flex', flexDirection: 'column' }}>
        {connections?.map((content,i) => {
            return (
               
              <Stack key={i} sx={{margin: '15px',width:"39vw"}} flexDirection={'row'}>
                 <Box sx={{display:'flex',width:"41vw",justifyContent:"space-between"}}>

                 <Box sx={{display:'flex',gap:"10px"}}>
                  <Avatar></Avatar>
                  {content.sender}
                 </Box>
                 <Box>
                    <Button>Ignore</Button>
                    <Button sx={{border:"1px solid #0B66C2", borderRadius:"20px"}}>Accept</Button>
                 </Box>
                 </Box>
                  
                 <Divider />
              </Stack>
                
                
            )
        })
    }
  
      </Stack>
    )
  
}

export default Received;
