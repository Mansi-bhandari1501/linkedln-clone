import React from "react";
// import "./sign-up.css";
import Footer from "../../components/Footer/footer";
import SignupComponent from "../../components/Signup/index.jsx"

function Signuppage() {
  return (
    <>
      <div>
        <SignupComponent />
      </div>
        <div className="footer">
          <Footer />
        </div>
    </>
  );
}
export default Signuppage;
