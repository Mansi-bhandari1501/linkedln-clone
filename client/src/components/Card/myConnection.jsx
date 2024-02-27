import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from "@mui/icons-material/MoreVert";

const MyConnectionCard = (content) => {


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "70px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", gap: "5px" }}>
          <Box>
            <Avatar sx={{ height: "60px", width: "60px" }} />
          </Box>
          <Box>{content.content.sender}</Box>
        </Box>
        <Box>
          <Button sx={{ border: "1px solid #0B66C2", borderRadius: "20px" }}>
            message
          </Button>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={{width:"300px" }}
          >
            
              <MenuItem
                aria-label="Remove Connection"
                onClick={handleClose}
              >
                <><DeleteIcon/>Remove Connection </>
              </MenuItem>
          
          </Menu>
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default MyConnectionCard;
