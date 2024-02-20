import { Box } from '@mui/system';
import React from 'react'
import Logo from "../../assets/linkedIn_logo.png";

import "./MainFooter.css"
const MainFooter = () => {
    return (
        <div className='mainFooter-container'>
            <ul type="none" className='footerList'>
                <li>About</li>
                <li>Accessibility</li>
                <li>Help Center</li>
               
                <li>Privacy & Terms</li>
                <li>Ad Choices</li>
                <li>Advertising</li>
                <li>Business Services</li>
                <li>Get the LinkedIn App</li>
                <li>More</li>
            </ul>
            <ul type="none" className='footerList-last'>
                <li><img src={Logo} alt='logo' style={{height:"15px"}}/></li>
                <li> LinkedIn </li>
                <li> Corporation </li>
                <li> © 2024</li>
            </ul>
        </div>
    )
}

export default MainFooter;
