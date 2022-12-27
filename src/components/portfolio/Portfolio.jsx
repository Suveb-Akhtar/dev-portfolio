import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/bw1.webp'
import IMG2 from '../../assets/bw2.webp'
import IMG3 from '../../assets/bw3.webp'


const data = [
{
  id:1,
  image:IMG1,
  title:' UI kit for data design web apps',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/19727539-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
},
{
  id:2,
  image:IMG2,
  title:'Line charts / Orion UI',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/19660913-Line-charts-Orion-UI'
},
{
  id:3,
  image:IMG3,
  title:'Sankey Chart / Orion UI Kit',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/19660633-Sankey-Chart-Orion-UI-Kit'
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
