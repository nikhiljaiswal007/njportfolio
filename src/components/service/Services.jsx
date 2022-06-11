import React from 'react'
import "./service.css";
import {BiCheck} from "react-icons/bi";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Project Service</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Java </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Java Swing</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>HTML/Css/JavaScript</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Frontend Development</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Backend Development</p>
            </li>
          </ul>
        </article>

        {/* END OF UI UX DESIGN */}

        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Web Design</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Deploy Project</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>React App</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Database Management</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>E Commerce Website</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}
       
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Graphic Designing</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Video Editing</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Intro & Outro</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Google ads</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Thumbnail & Channel Art</p>
            </li>
          </ul>
        </article>

        {/*END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services