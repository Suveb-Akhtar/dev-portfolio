import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/modi.avif";
import AVTR2 from "../../assets/rahul.jpg";
import AVTR3 from "../../assets/Amit.jpg";
import AVTR4 from "../../assets/amitabh.webp";

import {Pagination, Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const data =[
  {
    avatar:AVTR1,
    name:'Modi ji',
    review:'Shoaib is one of the best professionals that we have known in web development skills. Between his skills you can find good communication and accuracy with the planning in complex projects.'
  },
  {
    avatar:AVTR2,
    name:'Rahul Gandhi',
    review:'Shoaib is AMAZING! If you have any doubt about hiring him, ask me – I am really impressed by this guy!'
  },
  {
    avatar:AVTR3,
    name:'Amit Shah',
    review:'Working with Shoaib was better than expected and we had really high expectations. He is an incredibly talented developer but what really makes him stand out is his work ethic and steady approach. Time after time, and without us asking, he added enhancements and improvements that resulted in a better end product for us and our clients.'
  },
  {
    avatar:AVTR4,
    name:'Amitabh Bachhan',
    review:'We have the fortune of working with Shoaib on a very regular basis. Every single project is done in a timely fashion and is delivered exactly as is outlined. Beyond that, his development skills and expertise make him an invaluable part of our process. We absolutely offer our highest possible recommendation.'
  },
 
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
      modules={[Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}>
      
       {
         data.map(({avatar, name, review}, index) =>{
          return(
       <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} className='client__img'/>
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review} </small>
        </SwiperSlide>
          )
         })
       }
      </Swiper>
    </section>
  );
};

export default Testimonials;
