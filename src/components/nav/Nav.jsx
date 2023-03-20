import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {HiOutlineInformationCircle} from 'react-icons/hi'
import {MdOutlineHomeRepairService} from 'react-icons/md'
import {BiBookBookmark} from 'react-icons/bi'
import {IoMdContact} from 'react-icons/io'
import { useState } from 'react'

const Nav = () => {
  const [activeNav ,setActiveNav] =useState('#');
  return (
    <div className='nav'>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <HiOutlineInformationCircle/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <BiBookBookmark/></a>
      <a href="#service" onClick={() => setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}> <MdOutlineHomeRepairService/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <IoMdContact/></a>
    </div>
  )
}

export default Nav
