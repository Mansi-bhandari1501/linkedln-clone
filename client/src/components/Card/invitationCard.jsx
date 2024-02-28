import { Avatar, Box, Button, Divider } from '@mui/material';
import React from 'react'

const InvitationCard = ({content}) => {
  return (
   <>
   <Box sx={{display:"flex",justifyContent:"space-between", alignItems:"center",height:"70px"}}>
        <Box sx={{display:"flex", flexDirection:"row", gap:"5px"}}>
        <Box>
          <Avatar sx={{height:'60px',width:"60px"}}/>
        </Box>
        <Box>
         {content.sender}
        </Box>
        </Box>
        <Box>
          <Button>Ignore</Button>
          <Button sx={{border:"1px solid #0B66C2", borderRadius:"20px"}}>Accept</Button>
        </Box>
    </Box>
<Divider/>
   </>
  )
}

export default InvitationCard;