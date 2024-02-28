import React from 'react'
import Header from '../Header';
import { Avatar, Box, Button, Divider, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import Icon from "../../assets/LinkedIn_icon.svg.png";
import SearchIcon from '@mui/icons-material/SearchRounded';
import MainFooter from '../MainFooter';

const MessageComponent = () => {
    return (
        <Box
            sx={{ backgroundColor: "#F4F2EE", height: "100vh", marginTop: "10px" }}
        >
            <Box className="home-nav">
                <Header />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", gap: "25px", height: "90vh", }}>
                {/* <Stack sx={{height:"500px"}} flexDirection={"row"} justifyContent={'space-around'}>   */}

                <Stack
                    sx={{
                        width: "42vw",
                        border: "1px solid grey",
                        borderRadius: "10px"

                    }}
                >
                    <Box sx={{
                        display: "flex", flexDirection: "row", width: "100%", justifyContent: '', borderRadius: "10px",
                        // border:"1px solid grey"
                    }}>

                        <Box
                            sx={{ width: "40%", backgroundColor: "white" }}>

                            <Box sx={{ display: "flex", justifyContent: "space-between", margin: "8px" }}>
                                <Box>
                                    Messaging
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
                                    <Box>

                                        <MoreHorizIcon />
                                    </Box>
                                    <Box>

                                        <EditCalendarIcon />
                                    </Box>
                                </Box>

                            </Box>
                            <Divider />
                            <Box sx={{ display: "flex", gap: "10px", width: "20vw", marginTop: "4px" }}>
                                <TextField className='search-bar'
                                    sx={{
                                        Width: '400px',
                                        height: '35px',
                                        paddingLeft: "12px",
                                        marginTop: "5px",
                                        "& .MuiOutlinedInput-root": {
                                            height: "28px",
                                            width: "15vw",

                                        },
                                        "&.MuiInputBase-input-MuiOutlinedInput-input": {
                                            padding: "10px"

                                        }

                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start" >
                                                <SearchIcon style={{ color: 'black' }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                                <Button>Focused</Button>
                                <Button>Other</Button>
                            </Box>
                            <Divider />
                            <Box>

                            </Box>


                        </Box>
                        <hr style={{ height: "90vh", color: 'black' }} />
                        {/* <Divider sx={{height:"500px",color:'black'}}/> */}
                        <Box sx={{ width: "80%", backgroundColor: "white" }}>
                            <Box></Box>USERnAME
                        </Box>
                    </Box>
                </Stack>
                <Stack
                    sx={{
                        width: "15vw",


                        borderRadius: "10px",
                    }}
                >


                    <Box sx={{ marginTop: "8px", marginBottom: "18px" }}>

                        <MainFooter />

                    </Box>
                </Stack>
            </Box>
        </Box>
    );
}

export default MessageComponent;
