import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gfspfpc', 'template_wtt22ei', form.current, 'GOz_O0vfaDsOuT8hu')
     e.target.reset()
  };

  return (
   <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className='container contact__container'>
      <div className="contact__options">
        <article className="contact__option">
        <MdOutlineMailOutline className='contact__option-icon' />
        <h4>Email</h4>
        <h5>s.khan957051@gmail.com</h5>
        <a href="mailto:s.khan957051@gmail.com" target='_blank'>Send a message</a>
        </article>
        <article className="contact__option">
        <RiMessengerLine className='contact__option-icon'/>
        <h4>Messenger</h4>
        <h5>Shoaib Khan</h5>
        <a href="https://m.me/shoaib.khan" target='_blank'>Send a message</a>
        </article>
        <article className="contact__option">
        <BsWhatsapp className='contact__option-icon'/>
        <h4>Whatsapp</h4>
        <h5>+919570513938</h5>
        <a href="https://api.whatsapp.com/send?phone+919570513938"  target='_blank'>Send a message</a>
        </article>
      </div>
      {/* End of contact option */}
      <form ref={form} onSubmit={sendEmail}>
       <input type="text" name='name' placeholder='Your Full Name' required/>
       <input type="Email" name='email' placeholder='Your Email' required/>
       <textarea name="message" placeholder='Your Message' rows="10" required ></textarea>
       <button type='submit' className='btn btn-primary'> Send Message</button>
      </form>
    </div>

   </section>
  )
}

export default Contact