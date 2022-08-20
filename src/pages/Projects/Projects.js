import React from 'react';
import { GoLogoGithub } from 'react-icons/go';
import cake from '../../Images/cake.png';
import peagles from '../../Images/peagles.png';
import ecom from '../../Images/ecom.png'
import './Projects.css';

export const Projects = () => {
  return (
    <div id='projects'>
      <div className='projectsdiv'>
        {/* <Link smooth to="#home"> Projects</Link> */}
        <div className='projectcontainer parent'>
            <div className=' ribbon'><a href="https://github.com/2peagles/materials" target="_blank" rel="noreferrer"><GoLogoGithub className='ribbonlogo' /></a></div>
            <div className='projectcontentcontainer '>
            <img src={ecom} alt=" Eccomerce Login Page" />
            <h1> Eccomerce</h1>
            <p><b> FRONT END REACT APP </b>
              Static Eccomerce app, with bright colors. 
              made with material ui, with commerce.js 
              and stripe ready to be installed.
            </p>
            <ul>
              <li>react (framework)</li>
              <li>Material UI</li>
            </ul>
           <button className='liveview'> <a href='https://62d323e7a9a7384c553358c6--resilient-dolphin-e1c9c0.netlify.app/'  target="_blank" rel="noreferrer" ><b>LIve View</b></a></button>
        </div>
        </div>
        <div className='projectcontainer parent'>
          <div className='projectcontentcontainer'>
            <div className=' ribbon'><a href="https://github.com/2peagles/PeaglePups" target="_blank" rel="noreferrer"><GoLogoGithub className='ribbonlogo' /></a></div>
            <img src={peagles} alt=' Two Peagle Puppies'/> 
            <h1> Showcasing</h1>
            <p><b>FRONT END REACT APP </b>
              Built for me, I breed dogs and needed a site for clients,
               to show them the process and the litters.
            </p>
            <ul>
              <li>react </li>
              <li>react tspartticles</li>
              <li>tacyhons  </li>
              <li>bootstrap</li>
            </ul>
            <button className='liveview'> <a href='https://2peagles.github.io/PeaglePups/'  target="_blank" rel="noreferrer" ><b>LIve View</b></a></button>
            {/* <button className=' projectbtn livebtn'>Live view</button>
            <button className='projectbtn'><a href='/' className='gitrepo'><GoLogoGithub /></a></button> */}
          </div>
        </div>
        <div className='projectcontainer parent'>
        <div className='projectcontentcontainer '>
        <div className=' ribbon'><a href="https://github.com/2peagles/cupcake" target="_blank" rel="noreferrer">
              <GoLogoGithub className='ribbonlogo'/></a></div>
          <div className='projectcontentcontainer'>
            <img src={cake} alt=" Face Recognition App Login Page" />
             <h1>Cupcake</h1>
                <p><b> FRONT END REACT APP </b> 
                    Showcasing a cake shop. Has a video on the 
                    home page which does render right away, but does work.
                    As an about, producct and contact page using react router.
                 <ul>
                     <li>react </li>
                     <li>tacyhons</li>
                   </ul>
                  </p>
                <button className='liveview'> <a href='https://2peagles.github.io/cupcake/'  target="_blank" rel="noreferrer" ><b>LIve View</b></a></button>
                  {/* <button className=' projectbtn livebtn'>Live view</button>
                  <button className='projectbtn'><a href='/' className='gitrepo'><GoLogoGithub /></a></button> */}
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
