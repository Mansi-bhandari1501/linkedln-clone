import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./sign-up.css";
import { ReactComponent as IconMenu } from './logo.svg'
import Footer from "./footer";

function Signup() 
{
  const [username,setUsername] =  useState("")  
  const [email,setEmail] =  useState("")
  const [password,setPassword] =  useState("")
  // const [phone,setPhone] =  useState("")
  const navigate = useNavigate();
  // form function
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/users/register", {
        username,
        email,
        password, 
      });
      console.log(username,email, password);
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
        <section className="signin-container ">
          <div className="signup-data">
            <h3 className="signup-heading">  Sign up</h3>
            <p className="quote">
            Make the most of your professional life
            </p>
            <form onSubmit={handleSubmit}> 
              <label>
                <input
                  className="input-name"
                  type="text"
                  value={username}
                  onChange={(e)=> setUsername(e.target.value)}
                  name="name"
                    // onChange={getdata}
                  placeholder="Enter username"
                  required
                  autoFocus
                  />
              </label>
              <label>
                <input
                  className="inputemail"
                  type="email"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  
                  name="email"
                  //   onChange={getdata}
                  placeholder="Enter Email"
                  required
                  
                  />
              </label>
              <label>
                <input
                  className="input-password"
                  type="password"
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                  
                  name="password"
                  //   onChange={getdata}
                  placeholder="password"
                  required
                  
                  />
              </label>
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
                By clicking Agree & Join or Continue, you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie Policy.
                </p>
              <input
                className="input-submit"
                type="submit"
                // onClick={addData}
                value="Agree & Join"
                />
              {/* <Button className="btn" variant="contained">submit</Button> */}
            </form>
            <p className="quote">

            Already on LinkedIn? {" "}
            <span><NavLink to="/login">Sign-in</NavLink></span>
            </p>
          </div>
        </section>
      </div>
      <Footer />
          </>
  );
}
export default Signup;
