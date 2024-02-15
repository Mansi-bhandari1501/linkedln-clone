import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./sign-up.css";
import { ReactComponent as IconMenu } from '../../utils/logo.svg'
import Footer from "../../components/Footer/footer";
import TextField from '@mui/material/TextField';
// import Button from '@mui/material-next/Button';
import Button from '@mui/material/Button';


function Signup() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [phone,setPhone] =  useState("")
  const navigate = useNavigate();
  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/users/register", {
        username,
        email,
        password,
      });
      console.log(username, email, password);
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
        <IconMenu className="logo" />
        <p className="signup-heading">
          Make the most of your professional life
        </p>
        <section className="signin-container ">
          <div className="signup-data">
            {/* <h3 className="signup-heading">  Sign up</h3> */}
            <form onSubmit={handleSubmit}>
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
                      padding: '5px'
                    }
                  }}
                  variant="outlined"
                  // style={{width: '50px'}}!!!
                  onChange={(e) => setEmail(e.target.value)} />
                <label>Password (6+ characters)</label>
                <TextField
                  size="small"
                  inputProps={{
                    style: {
                      padding: '5px'
                    }
                  }}
                  className="input-password"
                  onChange={(e) => setPassword(e.target.value)} />
              </div>
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
                By clicking Agree & Join or Continue, you agree to the LinkedIn <span style={{ color: 'blue' }}>User Agreement, Privacy Policy</span>User Agreement, Privacy Policy, and <span style={{ color: 'blue' }}>Cookie Policy</span>.
              </p>
              {/* <input
                className="input-submit"
                type="submit"
                // onClick={addData}
                value="Agree & Join"
              /> */}
              <Button className="btn-submit" sx={{ borderRadius: "50px" }} variant="contained">Agree & Join</Button>
            </form>
            <div className="choice_seprator">

              <p className="or">or</p>

            </div>

            <Button sx={{ borderRadius: "50px", marginLeft: "25px" }} disabled={false} variant="outlined" className="btn-google-signin"  >Continue with Google</Button>
            <p className="quote">

              Already on LinkedIn? {" "}
              <span><NavLink to="/login">Sign-in</NavLink></span>
            </p>
          </div>
        </section>
        <div className="getHelp">Looking to create a page for a business? <span style={{ color: "#8344CC" }}>Get help</span></div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
export default Signup;
