import { Avatar, Box, TextField } from '@mui/material';
import React from 'react'
import InputEmoji from 'react-input-emoji'
import { ReactComponent as MediaIcon } from "../../utils/media-icon.svg";

const Comment = () => {
  return (
    <Box>
        <Box>
            <Box>
                <Avatar></Avatar>
            </Box>
            <Box>
            <InputEmoji
            
        />
<MediaIcon/>
            </Box>
        </Box>
        <Box></Box>
        <Box></Box>

    </Box>
  )
}

export default Comment;
