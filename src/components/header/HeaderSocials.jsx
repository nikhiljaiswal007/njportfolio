import React from 'react'
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import "./header.css";

function HeaderSocials() {
  return (
   <div className="header_socials">
      <a href='https://www.linkedin.com/in/nikhil-jaiswal-1b8872209' target="_blank"><BsLinkedin/></a>
      <a href='https://github.com/nikhiljaiswal007' target="_blank"><FaGithub/></a>
      <a href='https://instagram.com/nnikkkhil' target="_blank"><FaInstagram/></a>
   </div>
  )
}

export default HeaderSocials