import React from 'react'
import "./about.css";
import ME from "../../assets/p2.jpg";
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";
const About = () => {
  return (
  <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about_container">
        <div className="about_me">
            <div className="about_me-image">
                <img src={ME}alt="About Image" />
            </div>

        </div>

        <div className="about_content">
            <div className="about_cards">
            <article className='about_card'>
               <FaAward className='about_icon'/>
               <h5>Experience</h5>
               <small>1+ Year Working</small>
            </article>

            <article className='about_card'>
               <FiUsers className='about_icon'/>
               <h5>Clients</h5>
               <small>10+ WorldWide</small>
            </article>

            <article className='about_card'>
               <VscFolderLibrary className='about_icon'/>
               <h5>Projects</h5>
               <small>6+ Completed</small>
            </article>

            </div>
         <p>
            my name is nikhil jaiswal. I am from Bhopal Madhya Pradesh. I am Software 
            Engineer . I also follow my hobby as content creator . I make tech (gaming & pc) 
            videos on youtube. I use Java as my primary language & I am full stack developer also.
         </p>

         <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
    </div>
  </section>
  )
}

export default About