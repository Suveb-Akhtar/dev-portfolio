import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/project2.png'
import IMG3 from '../../assets/project3.png'


const data = [
{
  id:1,
  image:IMG1,
  title:'Top-Rated Movies Web-Application',
  github:'https://github.com/Suveb-Akhtar/IMDB-movie-app',
  demo:'https://suveb-akhtar-movie-app.netlify.app'
},
{
  id:2,
  image:IMG2,
  title:'Crypto-Currency Web-Application',
  github:'https://github.com/Suveb-Akhtar/Crypto-Zone',
  demo:'https://cryptozone-suveb-akhtar.netlify.app'
},
{
  id:3,
  image:IMG3,
  title:'Weather-Forecast Web-App',
  github:'https://github.com/Suveb-Akhtar/weather-app',
  demo:'https://weather-app-s-akhtar.netlify.app'
},

]


const Portfolio = () => {
  return (
    <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
   {
    data.map(({id, image, title, github, demo}) =>{
      return (
        <article key={id} className='portfolio__item'>
      <div className="portfolio__item-image">
      <img src={image} alt="{title}" />
      </div> 
        <h3>{title}</h3>
        <div className="portfolio__item-cta">
        <a href={github} className='btn' target='__blank'>Github</a>
        <a href={demo} className='btn btn-primary' target='__blank'>Live Demo </a>
    
        </div>
    </article>
      )
    })
   }
    </div>
    </section>
  )
}

export default Portfolio
