import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {TfiTwitter} from 'react-icons/tfi'

const Footer = () => {
  return (
  <footer>
    <a href="#" className='footer__logo'>SUVEB AKHTAR</a>

    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>  

    <div className="footer__socials">
      <a href="https://facebook.com"> <FaFacebookF/></a>
      <a href="https://instagram.com/shoaib__khan787?igshid=YmMyMTA2M2Y="> <BsInstagram/></a>
      <a href="https://twitter.com"> <TfiTwitter/></a>
    </div>

    <div className="footer__copyright">
      <small> &copy; Suveb Akhtar. All rights reserved.</small>
    </div>

   
  </footer>
  )
  }

export default Footer
