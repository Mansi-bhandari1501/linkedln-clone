import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Box,
  Divider,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { userDetails } from "../../features/User/actionCreator";
import { useState } from "react";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [input,setInput] = useState({
    firstName:"",
    lastName:"",
    additionalName:"",
    pronoun:"",
    headline:"",
    position:"",
    industry:"",
    country:"",
    city:"",

})
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userInfo);
  console.log(input);
  console.log(user._id);
  const handleSubmit=(e)=>{
    e.preventDefault();
    let formData = new FormData();  
    // console.log(input.title)  
    formData.append('firstName',input.firstName);
    formData.append('lastName',input.lastName);
    formData.append('additionalName',input.additionalName);
    formData.append('pronoun',input.pronoun);
    formData.append('headline',input.headline);
    formData.append('position',input.position);
    formData.append('industry',input.industry);
    formData.append('country',input.country);
    formData.append('city',input.city);
    formData.append('userid',user._id);
  ;
    handleClose();
    dispatch(userDetails(formData));
  }
  
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        <ModeEditIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            handleSubmit();
            
          },
        }}
      >
        {/* <DialogTitle>Subscribe</DialogTitle> */}

        <DialogContent sx={{ width: "500px" }}>
          {/* <DialogContentText>
          
          </DialogContentText> */}
          <FormControl sx={{ width: "100%" }}>
            <label>First Name</label>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="first-name"
              // label="Email Address"
              type="text"
              fullWidth
              variant="outlined"
              onChange={(e) => {setInput({ ...input, firstName: e.target.value })}}
            />
            <label>Last Name</label>
            <TextField
              autoFocus
              required
              margin="dense"
              // id="name"
              name="Last-name"
              // label="Email Address"
              type="text"
              fullWidth
              variant="outlined"
              onChange={(e) => {setInput({ ...input, lastName: e.target.value })}}

            />
            <label>Additional Name</label>
            <TextField
              autoFocus
              margin="dense"
              // id="name"
              name="Additional-name"
              // label="Email Address"
              type="text"
              fullWidth
              variant="outlined"
              onChange={(e) => {setInput({ ...input, additionalName: e.target.value })}}

            />
            <label>Pronoun</label>
            <Select
              displayEmpty
              value={0}
              // onChange={handleChange}
            >
              <MenuItem value={0}>Please Select</MenuItem>
              <MenuItem value={10}>She/Her</MenuItem>
              <MenuItem value={20}>He/Him</MenuItem>
              <MenuItem value={30}>They/Them</MenuItem>
            </Select>
            <Typography>Let others know how to refer to you.</Typography>
            <Typography>Learn more about gender pronouns.</Typography>

            <label>Headline</label>
            <TextField
              margin="dense"
              id="name"
              name="Head-line"
              // label="Email Address"
              type="text"
              fullWidth
              variant="outlined"
              onChange={(e) => {setInput({ ...input, headline: e.target.value })}}

            />

            <label>Current Position</label>
            <Typography>Position*</Typography>

            <Select
              // value={}

              displayEmpty
              // onChange={handleChange}
            >
              <MenuItem>Please Select</MenuItem>
              <MenuItem>Full-Stack developer</MenuItem>
              <MenuItem>SEO developer</MenuItem>
              {/* <MenuItem >They/Them</MenuItem> */}
            </Select>
            <Button variant="standard" onClick={handleClickOpen}>
              +Add new Position
            </Button>
            <Box>
              <input type="checkbox" label="Show current company in my intro" />
              <label>Show current company in my intro</label>
            </Box>
            {/* <Checkbox label="Show current company in my intro" defaultChecked /> */}

            <Typography>industry*</Typography>
            <TextField
              required
              margin="dense"
              name="industry"
              // label="Email Address"
              type="text"
              fullWidth
              variant="outlined"
            />
            <Typography>Learn more about industry options</Typography>

            <label>Education</label>
            <Typography>School*</Typography>

            <Select
              // value={}

              displayEmpty
              // onChange={handleChange}
            >
              <MenuItem>Please Select</MenuItem>
              <MenuItem>Full-Stack developer</MenuItem>
              <MenuItem>SEO developer</MenuItem>
              {/* <MenuItem >They/Them</MenuItem> */}
            </Select>
            <Button variant="standard" onClick={handleClickOpen}>
              +Add new education
            </Button>
            <Box>
              <input type="checkbox" />
              <label>Show current company in my intro</label>
            </Box>
            <label>Location</label>
            <Typography>Country/Region*</Typography>

            <TextField
              margin="dense"
              name="country"
              // label="Email Address"
              type="text"
              fullWidth
              variant="outlined"
            />
            <label>City</label>
            <TextField
              margin="dense"
              name="country"
              // label="Email Address"
              type="text"
              fullWidth
              variant="outlined"
            />
            <h3>Contact info</h3>
            <Typography>
              Add or edit your profile URL, email, and more
            </Typography>
            <Button variant="standard" onClick={handleClickOpen}>
              Edit contact info
            </Button>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Divider />
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
