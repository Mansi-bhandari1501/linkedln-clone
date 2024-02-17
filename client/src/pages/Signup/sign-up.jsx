import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./sign-up.css";
// import { ReactComponent as IconMenu } from "../../utils/logo.svg";
import Footer from "../../components/Footer/footer";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  // FormControl,
  IconButton,
  InputAdornment,
  // InputLabel,
  OutlinedInput,
} from "@mui/material";
import Logo from "../../assets/linkedIn_logo.png";

function Signup() {
  // const [username, setUsername] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [phone,setPhone] =  useState("")
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const navigate = useNavigate();
  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/users/register", {
        email,
        password,
      });
      console.log(email, password);
      if (res && res.data.success) {
        // toast.success(res.data && res.data.message);
        alert(res.data && res.data.message);
        navigate("/login");
      } else {
        // toast.error(res.data.message);
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      // toast.error("Something went wrong");
      alert("Something went wrong");
    }
    // console.log(process.evn.REACT_APP_API)
  };

  return (
    <>
      <div className="signup-page">
        {/* <IconMenu className="logo" /> */}
        <div className="Logo">
          <img src={Logo} alt="logo" className="logo"></img>
        </div>
        <p className="signup-heading">
          Make the most of your professional life
        </p>
        <section className="signun-container ">
          <div className="signup-data">
            {/* <h3 className="signup-heading">  Sign up</h3> */}
            <form className="signup-form" onSubmit={handleSubmit}>
              {/* <label>Email or phone number</label> */}
              {/* <input
                  className="input-name"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  name="name"
                  // onChange={getdata}
                  placeholder="Enter username"
                  required
                  autoFocus
                /> */}
              {/* <TextField className="input-name"
               variant="outlined"
              //  sx={{height:'15px'}}
                onChange={(e) => setUsername(e.target.value)} /> */}
              {/* <label>
                <input
                  className="inputemail"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}

                  name="email"
                  //   onChange={getdata}
                  placeholder="Enter Email"
                  required

                />
              </label> */}
              <div className="signup-inputs">
                <label>Email or phone number</label>

                <TextField
                  className="inputemail"
                  size="small"
                  inputProps={{
                    style: {
                      padding: "5px",
                    },
                  }}
                  variant="outlined"
                  // style={{width: '50px'}}!!!
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password (6+ characters)</label>
                {/* <TextField
                  size="small"
                  inputProps={{
                    style: {
                      padding: '5px'
                    }
                  }}
                  className="input-password"
                  onChange={(e) => setPassword(e.target.value)} /> */}
                <OutlinedInput
                  className="input-password"
                  size="small"
                  onChange={(e) => setPassword(e.target.value)}
                  inputProps={{
                    style: {
                      padding: "0px",
                    },
                  }}
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        sx={{ fontSize: "16px", color: "#0A66C2" }}
                        // edge="end"
                      >
                        {showPassword ? "Hide" : "show"}
                      </IconButton>
                    </InputAdornment>
                  }
                  // label="Password"
                />
              </div>
              {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined"> */}
              {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
              {/* </FormControl> */}
              {/* <label>
                <input
                  className="input-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}

                  name="password"
                  //   onChange={getdata}
                  placeholder="password"
                  required

                />
              </label> */}
              {/* <label>
                <input
                  className="input-phone"
                  type="phone"
                  value={phone}
                  onChange={(e)=> setPhone(e.target.value)}
                  required
                  name="phone"
                  //   onChange={getdata}
                  placeholder="phone"
                  />
              </label> */}
              <p className="terms-policy">
                By clicking Agree & Join or Continue, you agree to the LinkedIn{" "}
                <span style={{ color: "blue" }}>
                  User Agreement, Privacy Policy
                </span>{" "}
                and <span style={{ color: "blue" }}>Cookie Policy</span>.
              </p>
              <input
                className="btn-submit"
                type="submit"
                // onClick={addData}
                value="Agree & Join"
                style={{ fontSize: "16px" }}
              />
              {/* <Button className="btn-submit" onSubmit={handleSubmit} sx={{ borderRadius: "50px" }} variant="contained">Agree & Join</Button> */}
            </form>
            <div className="choice_seprator">
              <p className="or"> or </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Button
                sx={{
                  width: "90%",
                  borderRadius: "50px",
                  border: "1px solid #666666",
                  textTransform: "capitalize",
                }}
                disabled={false}
                variant="outlined"
                className="btn-google-signin"
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span>
                    <img
                      height="19"
                      width="19"
                      paddding="15 0 0 0"
                      src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
                      alt="google-logo"
                    />
                  </span>
                  <p>Continue with Google</p>
                </div>
              </Button>
            </div>
            <p className="quote">
              Already on LinkedIn?{" "}
              <span>
                <NavLink
                  style={{ color: "#8344CC", textDecoration: "none" }}
                  to="/login"
                >
                  Sign-in
                </NavLink>
              </span>
            </p>
          </div>
        </section>
        <div className="getHelp">
          Looking to create a page for a business?{" "}
          <span style={{ color: "#8344CC" }}>Get help</span>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
export default Signup;
