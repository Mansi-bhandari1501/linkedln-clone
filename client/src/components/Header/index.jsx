import { Avatar, Box, Button, TextField } from '@mui/material';
import React from 'react'
import Icon from "../../assets/LinkedIn_icon.svg.png";
import "./header.css";
// import SearchIcon from "../../assets/klipartz.com.png"
import SearchIcon from '@mui/icons-material/SearchRounded';
// import HouseIcon from '@mui/icons-material/HouseRounded';
import InputAdornment from '@mui/material/InputAdornment';
import { ReactComponent as HomeLogo } from "../../utils/home-logo.svg"
import { ReactComponent as JobsLogo } from "../../utils/jobs-logo.svg"
import { ReactComponent as MsgLogo } from "../../utils/msg-logo.svg"
import { ReactComponent as NetworkLogo } from "../../utils/network-logo.svg"
import { ReactComponent as NotificationLogo } from "../../utils/notification-logo.svg"
import { ReactComponent as BusinessLogo } from "../../utils/business-logo.svg"
import Profile from "../../assets/profile.png"
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const user = useSelector((state) => state.user.userInfo.firstName);
  console.log(user)
  // const userId = user.userId;
  return (
    <Box className="Header-container">
      <Box sx={{ display: "flex", gap: "10px", width: "20vw", marginTop: "4px" }}>
        <img className="In-logo" src={Icon} alt='' ></img>
        <TextField className='search-bar'
          sx={{
            Width: '380px',
            height: '34px',
            "& .MuiOutlinedInput-root": {
              height: "34px",
              width: "16vw"
            },
            "&.MuiInputBase-input-MuiOutlinedInput-input": {
              padding: "0px"
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
      <Box sx={{ display: "flex", justifyContent: "spaceAround" }}>
        <ul className='menu' type="none" style={{ display: "flex" }}>

          <li className='menu-content' style={{ display: "flex", flexDirection: "column" }}>
            <Button>
              <Link to='/' style={{textDecoration:"none"}}>
                <HomeLogo className="menu-logo" />
                <h4 style={{fontSize:"12px",textTransform:"none"}}>Home</h4>

              </Link>
            </Button>
          </li>

          <li className='menu-content' style={{ display: "flex", flexDirection: "column" }}>
            <Button>
              <Link to='/mynetwork' style={{textDecoration:"none"}}>
                <NetworkLogo className="menu-logo" />
                <h4 style={{fontSize:"12px",textTransform:"none"}}>Mynetwork</h4>
              </Link>
            </Button>
          </li>
          <li className='menu-content' style={{ display: "flex", flexDirection: "column" }}>
            <Button>
              <Link to='/'style={{textDecoration:"none"}}>
                <JobsLogo className="menu-logo" />
                <h4 style={{fontSize:"12px",textTransform:"none"}}>Jobs</h4>

              </Link>
            </Button>
          </li>
          <li className='menu-content' style={{ display: "flex", flexDirection: "column" }}>
            <Button>
              <Link to='/message'style={{textDecoration:"none"}}>

                <MsgLogo className="menu-logo" />
                <h4 style={{fontSize:"12px",textTransform:"none"}}>Messaging</h4>
              </Link>
            </Button>
          </li>
          <li className='menu-content' style={{ display: "flex", flexDirection: "column" }}>
            <Button>
              <Link to='/'style={{textDecoration:"none"}}>

                <NotificationLogo className="menu-logo" />
                <h4 style={{fontSize:"12px",textTransform:"none"}}>Notifications</h4>
              </Link>
            </Button>
          </li>
          <li className='menu-content'>

            <Link to='/profile' style={{textDecoration:"none"}}>
              <Avatar className="menu-logo" sx={{ marginTop: "2px", height: "28px", width: "28px" }} aria-label="recipe" src={Profile}>

              </Avatar>
              <h4 style={{ textAlign: "center", lineHeight: "18px" }} >{user}</h4>

            </Link>


          </li>
          <hr />
        </ul>
      </Box>
      <Box sx={{ display: "flex", gap: "20px" }}>
        <li className='menu-content' style={{ display: "flex", flexDirection: "column" }}>
          <Button>
            <Link to='/'>
              <BusinessLogo />
              <h4 >For Business</h4>

            </Link>
          </Button>
        </li>
        <li className='menu-content' style={{ display: "flex", flexDirection: "column" }}>

          <NavLink className="premium" to="" >Network smarter <br /> with Primium</NavLink>
        </li>
      </Box>
    </Box>
  )
}

export default Header;
