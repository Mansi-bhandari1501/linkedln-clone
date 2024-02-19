import React from "react";
import LoginComponent from "../../components/Login";
import Footer from "../../components/Footer/footer";
import Box from "@mui/system/Box";

function LoginPage() {
  // return (
  //   <>
  //     < LoginComponent />
  //     <div className="footer">
  //       <Footer />
  //     </div>
  //   </>

  // );

  return <Box className="login-page">
    <LoginComponent />
    <div className="footer">
          <Footer />
        </div>
  </Box>
}
export default LoginPage;
