import React from "react";
import LoginComponent from "../../components/Login";
import Footer from "../../components/Footer/footer";

function LoginPage() {
  return (
   <>
        < LoginComponent />
        <div className="footer">
          <Footer />
        </div>
   </>
     
  );
}
export default LoginPage;
