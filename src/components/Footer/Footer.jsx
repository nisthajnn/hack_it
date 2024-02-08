import React from 'react'
import './Footer.css'
 import Twitter from "../../assets/twitter.png";
import Instagram from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.png';
import logo from '../../assets/logo.png';
const Footer = () => {
  return (
    <div className="footer-container">
        <hr/>
        <div className="footer">
            <div className="social-links">
           <img src={Twitter} alt="" />
           <img src={Instagram} alt="" />
           <img src={Linkedin} alt="" /> 
        </div>
       
        <div className="logo-footer">
            <img src={logo} alt="" />
            </div>
        </div>
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
    </div>
      )
}

export default Footer