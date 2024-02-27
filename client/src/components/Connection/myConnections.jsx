import { Box, Divider, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import Header from '../Header';
import MainFooter from '../MainFooter';
import InvitationCard from '../Card/invitationCard';
import { useDispatch, useSelector } from 'react-redux';
import {fetchActiveConnection} from "../../features/connection/connectionAction"
const MyConnections = () => {
    const dispatch= useDispatch();
    const user = useSelector((state) => state.user);
    const connections = useSelector((state) => state.connection.connections);
    // console.log(connections)
    const token = user.userToken
    const userId = user.userId;
    // console.log(userId)
    useEffect( () => {
       
        dispatch(fetchActiveConnection({userId,token}));
    }, [dispatch])
    return (
        <Box sx={{ backgroundColor: "#F4F2EE", height: "100vh", marginTop: "30px", padding:"20px" }}>
            <Box className="home-nav">
                <Header />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", gap: "25px" }}>
                <Box
                sx={{
                    width: "45vw",
                    border: "1px solid #F2F0EC",
                    backgroundColor: "white",
                    borderRadius: "10px",
                }}>
                <Stack
                sx={{padding:"20px"}}
                   >
                    <Typography sx={{ margin: "10px" }}>
                        Connections
                    </Typography>
                    <Divider sx={{ margin: "2px" }} />
                    <Box>
                             {connections?.map((content,index) => (
                                    <div key={index}>
                                        <InvitationCard 
                                        content={content}/>
                                    </div>
                                       
                             ))}
                        </Box>


                </Stack>
                </Box>
                <Stack
                    sx={{
                        width: "15vw",
                        border: "1px solid #F2F0EC",
                        borderRadius: "10px",
                    }}>
                    <MainFooter/>
                </Stack>
            </Box>

        </Box>
    )
}

export default MyConnections;
