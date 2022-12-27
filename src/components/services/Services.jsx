import React from 'react'
import './services.css'
import {BsCheck2} from 'react-icons/bs'

const Services = () => {
  return (
<section id="service">
  <h5>What I Offer</h5>
  <h2>Services</h2>

  <div className="container services__container">
   
    <artcle className="service">
      <div className="service__head">
        <h3>Web Development</h3>
      </div>

      <ul className='service__list'>
        <li>
          <BsCheck2 className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quod.</p>
        </li>
        <li>
          <BsCheck2 className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quod.</p>
        </li>
        <li>
          <BsCheck2 className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quod.</p>
        </li>
        <li>
          <BsCheck2 className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quod.</p>
        </li>
        <li>
          <BsCheck2 className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quod.</p>
        </li>
      
       
      </ul>
    </artcle>
  

  </div>

</section>
  )
}

export default Services
