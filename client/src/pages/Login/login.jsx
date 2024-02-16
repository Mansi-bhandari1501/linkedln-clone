import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Login/login.css";
import axios from "axios";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/footer";
// import{useAuth} from '../src/context/auth'
import Logo from "../../assets/linkedIn_logo.png";
import Box from '@mui/system/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, FilledInput, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from "@mui/material";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [auth, setAuth] = useAuth("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
  const location = useLocation();
  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/users/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        console.log(res.data && res.data.message);
        // setAuth({
        //   ...auth,
        //   user: res.data.user,
        //   token: res.data.token,
        // });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/page");
      } else {
        toast.error(res.data.message);
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Box className="login-page" >
      <Box
        // component="section" 
        className="login-page"
      // sx={{ p: 2, border: '1px dashed grey' }}
      >
        <Box
          sx={{ width: 100, height: 34, marginLeft: '52px', marginTop: '32px' }}>
          <img src={Logo} alt="logo" style={{ height: "28px", width: "110px" }}></img>
        </Box>
        <Box variant="outlined"
          className="login-container"
          sx={{ width: '100%', height: '100%', padding: '24px', display: 'flex', justifyContent: 'center' }}
        >
          <Card
            className="signin-Card"
            sx={{
              borderRadius: '8px',
              //  border:'1px solid black',    
              boxShadow: ' 0 4px 12px rgba(0,0,0,0.15)',
              width: '352px', display: 'flex', justifyContent: 'center',
              padding: '24px'
            }}
          >
            <Box>
              <h1 className="signin-heading">Sign in</h1>
              <p className="heading-para">Stay updated on your professional world</p>
              <form className="signin-form">
                <TextField className="input-email" label="Email or Phone" variant="filled" sx={{
                  border: '1px solid ',
                  size: 'small',
                  '& .MuiFilledInput-underline:after': {
                    borderBottom: 'none',
                  }, borderRadius: '8px', width: '100%'
                }} />
                {/* <TextField label="Password" variant="filled" sx={{ border: '1px solid ', borderRadius: '8px', width: '100%' }} /> */}
                {/* <InputLabel htmlFor="filled-adornment-password" >Password</InputLabel> */}
                {/* <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <Button
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? 'Hide' : 'Show'}
                      </Button>
                    </InputAdornment>
                  }
                /> */}

                <FormControl
                  sx={{

                    // width: '100%',
                    // borderRadius: "8px",
                    // border: '1px solid  black',
                    '& .MuiFilledInput-underline:after': {
                      display: 'none',
                    },
                    '& .MuiFilledInput-underline:before': {
                      display: 'none',
                    },
                    borderRadius: '4px',
                    overflow: 'hidden',
                    '&:focus-within': {
                      outline: '1px solid #0A66C2',
                    },
                    outline: '1px solid grey',
                  }}
                  variant="filled"
                >
                  <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                  <FilledInput
                    sx={{
                      backgroundColor: 'white',
                      '&:focus-within': {
                        outline: '1px solid #0A66C2',
                        backgroundColor: 'transparent',
                      },
                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                    }}
                    id="filled-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <Button
                          sx={{
                            '&:hover':{
                              borderRadius: "20PX",
                              border: "2px solid #2E64C0",
                              height:"30px",
                              backgroundColor:"lightblue"

                            }
                          }}
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <>show</> : <>Hide</>}
                        </Button>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <span ><NavLink style={{ color: '#0073b1', fontWeight: 600, font: '16px' }}>Forgot password?</NavLink></span>
                <Button sx={{
                  backgroundColor: "#2E64C0",
                  borderRadius: "25px",
                  height: "52px",
                  color: 'white',
                  textTransform: "none",
                  fontWeight: 600,
                  lineHeight: "52px",
                  fontSize: "16px"
                }}>Sign in</Button>
              </form>
            </Box>
            <div className="choice_seprator" >

              <p className="or"> or </p>

            </div>
            <p className="terms-policy">
              By clicking Agree & Join or Continue, you agree to the LinkedIn <span style={{ color: 'blue' }}>User Agreement, Privacy Policy</span> and <span style={{ color: 'blue' }}>Cookie Policy</span>.
            </p>
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>

              <Button sx={{ borderRadius: "50px", border: "1px solid #666666", textTransform: "capitalize" }} disabled={false} variant="outlined" className="btn-google-signin"  >
                <div style={{ width: "100%", display: "flex", gap: "10px", alignItems: "center", justifyContent: "center" }}>
                  <span>
                    <img height="19" width='19' paddding='15 0 0 0' src='https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png' />
                  </span>
                  <p>
                    Continue with Google
                  </p>
                </div>
              </Button>
            </div>
            <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "8px", height: "35 px" }}>

              <Button sx={{ borderRadius: "50px", border: "1px solid #666666", textTransform: "capitalize" }} disabled={false} variant="outlined" className="btn-google-signin"  >
                <div style={{ width: "100%", display: "flex", gap: "10px", alignItems: "center", justifyContent: "center" }}>
                  <span>
                    <img height="19" width='19' paddding='15 0 0 0' src='data:image/png;base64,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' />
                  </span>
                  <p>
                    Sign In with Apple
                  </p>
                </div>
              </Button>
            </div>
            <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "8px", height: "35 px" }}>

              <Button sx={{ borderRadius: "50px", border: "1px solid #666666", textTransform: "capitalize" }} disabled={false} variant="outlined" className="btn-google-signin"  >
                <div style={{ width: "100%", display: "flex", gap: "10px", alignItems: "center", justifyContent: "center" }}>
                  <span>
                    <img height="19" width='100%' paddding='15 0 0 0' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqzN9MoFE5QBketEtGPpZhcoCkN7dPHxUfWfGJt-o5ULj3rSkfdAp9AE6TNvGllv6UymU&usqp=CAU' />
                  </span>
                  <p>
                    Sign In with a one-time link
                  </p>
                </div>
              </Button>
            </div>

          </Card>

        </Box>
        <p className="quote">
          New to LinkedIn? {" "}
          <span ><NavLink style={{ color: "#8344CC" }} to="/login">Join now</NavLink></span>
        </p>


        <Box className="footer">
          <Footer />
        </Box>
      </Box >
    </Box>
  );
}
export default Login;
