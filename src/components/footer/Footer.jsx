import React from 'react'
import "./footer.css";

import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';

const Footer = () => {
  return (
   <footer>
    <a href='#' className='footer_logo'>Nikhil Jaiswal</a>

    <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experience</a></li>
      <li><a href='#services'>Services</a></li>
      <li><a href='#portfolio'>Portfolio</a></li>
      <li><a href='#testimonials'>Testimonials</a></li>
      <li><a href='#contact'>Contact</a></li>
      
    </ul>

    <div className="footer_socials">
      <a href='https://www.facebook.com/nnikkhil' target="__blank"><FaFacebookF/></a>
      <a href='https://www.instagram.com/nnikkkhil'target="__blank"><FiInstagram/></a>
      <a href='https://twitter.com/nnikkkhil'target="__blank"><IoLogoTwitter/></a>
    </div>

    <div className="footer_copyright">
      <small>&copy; NJ All rights reserved.</small>
    </div>
   </footer>
  )
}

export default Footer