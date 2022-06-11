import React from 'react'
import "./contact.css";
import{MdOutlineEmail} from "react-icons/md";
import{RiMessengerLine} from "react-icons/ri";
import{BsInstagram} from "react-icons/bs";
import  { useRef } from 'react';
import emailjs from "emailjs-com";

const Contact = () => {
   const form=useRef();

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wtcpttd', 'template_ouhffwj', form.current, 'RgJFHcSihW3Y4Qs4C')
    e.target.reset();
     
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>COntact me</h2>

      <div className="container contact_container">
        <div className="contact_options">
        
          <article className="contact_option">
          <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>workfornikhiljaiswal@gmail.com</h5>
            <a href = "mailto: abc@example.com" target="__blank">Send a message</a>

          </article>

          <article className="contact_option">
          <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>nikhiljaiswal</h5>
            <a href='https://m.me/nnikkhil' target="-_blank">Send a message</a>

          </article>

          <article className="contact_option">
          <BsInstagram className='contact_option-icon'/>
            <h4>Instagram</h4>
            <h5>nnikkkhil</h5>
            <a href='https://www.instagram.com/nnikkkhil' target="__blank">Send a message</a>

          </article>


        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
           <input type="text" name="name" placeholder='Your Full Name' required />
           <input type="email" name="email" placeholder='Your Email' required />
           <textarea name="message" rows="7" placeholder='Your Message'></textarea>
           <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact