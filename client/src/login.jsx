import React,{useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./sign-up.css";
import axios from "axios";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
// import{useAuth} from '../src/context/auth'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [auth, setAuth] = useAuth("");

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
  };  return (
    <>
      <div className="signup-page">
        <section className="signin-container">
          <div className="signup-data">
            <h3 className="signup-heading">Log In</h3>
            <form onSubmit={handleSubmit}>
              <p>
                New User?
                <span>
                <NavLink to="/"> Sign-up</NavLink>
                </span>
              </p>
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
                 <div className="mb-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                navigate("/forgot-password");
              }
            }
            >
              Forgot Password
            </button>
          </div>
              </label>
              <input
                className="input-submit"
                type="submit"
                // onClick={addData}
                value="Submit"
              />
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
export default Login;
