import { Box, Divider, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Header from "../Header";
import { ReactComponent as NetworkLogo } from "../../utils/network-logo.svg";
// import EventNoteIcon from '@material-ui/icons/EventNote';
import MainFooter from "../MainFooter";
import InvitationCard from "../Card/invitationCard";
import UserCard from "../Card/userCard";
// import { experimentalStyled as styled } from '@mui/material/styles';

// import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../features/User/userAction";
import { Link } from "react-router-dom";
import { fetchConnection } from "../../features/connection/connectionAction";

// const item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));
const NetworkComponent = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const token = user.userToken;
  const userId = user.userId;

 

  const users = useSelector((state) => state.user.users);
  const connections = useSelector((state) => state.connection.connections);
  console.log(connections)
  console.log(users);

  useEffect(() => {
    dispatch(fetchUsers( {userId, token} ));
    dispatch(fetchConnection( {userId, token} ));
  }, [dispatch]);

  // if (isLoading) {
  //     return 'Loading...';
  // }

  return (
    <Box
      sx={{ backgroundColor: "#F4F2EE", height: "100vh", marginTop: "30px" }}
    >
      <Box className="home-nav">
        <Header />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "25px" }}>
        {/* <Stack sx={{height:"500px"}} flexDirection={"row"} justifyContent={'space-around'}>   */}
        <Stack
          sx={{
            width: "15vw",
            border: "1px solid #DFDEDA",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              marginTop: "8px",
              marginBottom: "8px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItem: "center",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between", padding:"10px" }}>
              <Typography>Manage my network</Typography>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between ", paddingLeft:"10px"}}>
              <Link
                to="/mynetwork/invite-connect/connections"
                style={{ textDecoration: "NONE",display:"flex",justifyContent:"space-around" }}
              >
                  <NetworkLogo sx={{marginRight:"20px"}} />
                <Typography sx={{ paddingLeft: "10px" }}>
                  Connections
                </Typography>
              </Link>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between ", paddingLeft:"10px"}}>
              <Link to="/"  style={{ textDecoration: "NONE",display:"flex",justifyContent:"space-around" }}>
              <NetworkLogo sx={{marginRight:"20px"}} />
                <Typography sx={{ paddingLeft: "10px" }}>Contacts</Typography>
              </Link>
            </Box>

            <Box sx={{display:"flex",justifyContent:"space-between ", paddingLeft:"10px"}}>
              <Link to="/"  style={{ textDecoration: "NONE",display:"flex",justifyContent:"space-around" }}>
              <NetworkLogo sx={{marginRight:"20px"}} />
                <Typography sx={{ paddingLeft: "10px" }}>Groups</Typography>
              </Link>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between ", paddingLeft:"10px"}}>
              <Link to="/"  style={{ textDecoration: "NONE",display:"flex",justifyContent:"space-around" }}>
              <NetworkLogo sx={{marginRight:"20px"}} />
                <Typography sx={{ paddingLeft: "10px" }}>Events</Typography>
              </Link>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between ", paddingLeft:"10px"}}>
              <Link to="/"  style={{ textDecoration: "NONE",display:"flex",justifyContent:"space-around" }}>
              <NetworkLogo sx={{marginRight:"20px"}} />
                <Typography sx={{ paddingLeft: "10px" }}>Pages</Typography>
              </Link>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between ", paddingLeft:"10px"}}>
              <Link to="/" style={{ textDecoration: "NONE",display:"flex",justifyContent:"space-around" }}>
              <NetworkLogo sx={{marginRight:"20px"}} />
                <Typography sx={{ paddingLeft: "10px" }}>
                  Newsletters
                </Typography>
              </Link>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between ", paddingLeft:"10px"}}>
              <Link to="/"  style={{ textDecoration: "NONE",display:"flex",justifyContent:"space-around" }}>
              <NetworkLogo sx={{marginRight:"20px"}} />
                <Typography sx={{ paddingLeft: "10px" }}>Hashtag</Typography>
              </Link>
            </Box>
          </Box>
          <Divider />
          <Box sx={{ marginTop: "8px", marginBottom: "18px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <MainFooter />
            </Box>
          </Box>
        </Stack>
        <Stack
          sx={{
            gap: "15px",
          }}
        >
          <Box
            sx={{
              width: "42vw",
              border: "1px solid #DFDEDA",
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "8px",
            }}
          >
            <Box
              sx={{
                padding: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography>Invitations</Typography>
              </Box>
              <Box>
                <Link to="/mynetwork/invitation-manager">
                  <typography>See All</typography>
                </Link>
              </Box>
            </Box>
            <Divider />
            <Box>
              {connections?.map((content, index) => (
                <div key={index}>
                  <InvitationCard content={content} />
                </div>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              width: "42vw",
              border: "1px solid #DFDEDA",
              backgroundColor: "white",
              borderRadius: "10px",
              paddingRight: "20px",
              padding: "10px",
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Typography sx={{ margin: "10px" }}>Suggetions</Typography>
              <Grid
                container
                spacing={{ xs: 2, md: 1 }}
                columns={{ xs: 3, sm: 9, md: 12 }}
              >
                {users?.map((content) => (
                  <Grid item xs={1} sm={3} md={3} key={content._id}>
                    <UserCard 
                    userId={content._id}
                    email={content.email} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default NetworkComponent;