import React from 'react';
import { GoLogoGithub } from 'react-icons/go';
import peagles from '../../Images/peagles.png';
import sunnyside from '../../Images/sunnyside.png';
import clipboard from '../../Images/clipboard.png';
import './Projects.css';

export const Projects = () => {
  return (
    <div id='projects'>
      <div className='projectsdiv'>
        {/* <Link smooth to="#home"> Projects</Link> */}
        <div className='projectcontainer parent'>
          <div className=' ribbon'><a href="https://github.com/2peagles/SunnySide" target="_blank" rel="noreferrer"><GoLogoGithub className='ribbonlogo' /></a></div>
            <div className='projectcontentcontainer '>
            <img src={sunnyside} alt=" Eccomerce Login Page" />
            <h1> Sunyside Landing Page</h1>
            <p><b> FRONT END REACT APP </b>
              This Frontend Mentor challenge was a perfect test on my layout and responsive skills. There's a tiny bit of JS for 
              the mobile menu, but the focus was on HTML & CSS. It has mobile and desktop layout view. A 
              README file is also included. 
            </p>
            {/* <ul>
              <li>react </li>
              <li>bootstrap</li>
            </ul> */}
           <button className='liveview'> <a href='https://eloquent-cannoli-31bcd7.netlify.app/'  target="_blank" rel="noreferrer" ><b>LIve View</b></a></button>
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
            <div className=' ribbon'><a href="https://github.com/2peagles/Clipboard-Landing-page" target="_blank" rel="noreferrer">
              <GoLogoGithub className='ribbonlogo'/></a></div>
          <div className='projectcontentcontainer'>
            <img src={clipboard} alt=" Face Recognition App Login Page" />
             <h1>Clipboard Landing Page</h1>
                <p><b> FRONT END REACT APP </b> 
                This Frontend Mentor Junior Challenge put my layout skills to the test with HTML & CSS. 
                It has a design for mobile and desktop layout view.
                 {/* <ul>
                     <li>react </li>
                   </ul> */}
                  </p>
                <button className='liveview'> <a href='https://631e3cb60c688b0008308839--jocular-lebkuchen-585975.netlify.app/'  target="_blank" rel="noreferrer" ><b>LIve View</b></a></button>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
