import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./sign-up.css";

function Signup() 
{
  const [name,setName] =  useState("")  
  const [email,setEmail] =  useState("")
  const [password,setPassword] =  useState("")
  const [phone,setPhone] =  useState("")
  const navigate = useNavigate();
  // form function
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
         
      });
      if (res && res.data.success) {
        // toast.success(res.data && res.data.message);
        alert(res.data && res.data.message);
        navigate("/loginpage");
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
        <section className="signin-container ">
          <div className="signup-data">
            <h3 className="signup-heading">Create a new account .</h3>
            <p className="login-link">
              Already Have an Account{" "}
              <span>
                <NavLink to="/loginpage">Sign-in</NavLink>
              </span>
            </p>
            <form onSubmit={handleSubmit}> 
              <label>
                <input
                  className="input-name"
                  type="text"
                  value={name}
                  onChange={(e)=> setName(e.target.value)}
                  name="name"
                //   onChange={getdata}
                  placeholder="Enter name"
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
              <label>
                <input
                  className="input-date"
                  type="phone"
                  value={phone}
                  onChange={(e)=> setPhone(e.target.value)}
                  required
                  name="phone"
                //   onChange={getdata}
                  placeholder="phone"
                />
              </label>
              <input
                className="input-submit"
                type="submit"
                // onClick={addData}
                value="Create account"
              />
              {/* <Button className="btn" variant="contained">submit</Button> */}
            </form>
          </div>
        </section>
      </div>
          </>
  );
}
export default Signup;
