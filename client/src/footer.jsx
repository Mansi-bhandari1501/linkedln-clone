import React from "react";
import "./footer.css";
import { ReactComponent as Logo } from './linkedin-logo.svg'

const Footer = () => {
  return (
    <div className="footer-container" >

       <ul className="footer-content" type="none">
        <li>
        <Logo className="logoo"/>

        </li>
        <li>© 2024 </li>  
        <li>About</li>
        <li>Accessibility</li>
        <li>User Agreement</li>
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
        <li>Copyright Policy</li>
        <li>Brand Policy</li>
        <li>Guest Controls</li>
        <li>Community Guidelines</li>
        <li>Language</li>
        </ul>
    </div>
  );
};

export default Footer;
