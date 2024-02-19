import React from "react";
import "./sign-up.css";
import SignupComponent from "../../components/Signup";
import Footer from "../../components/Footer/footer";


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
