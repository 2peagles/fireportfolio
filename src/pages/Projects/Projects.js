import React from 'react';
import { GoLogoGithub } from 'react-icons/go';
import smartbrain from '../../Images/smartbrain.png';
import peagles from '../../Images/peagles.png';
import ecom from '../../Images/ecom.png'
import './Projects.css';

export const Projects = () => {
  return (
    <div id='projects'>
      <div className='projectsdiv'>
        {/* <Link smooth to="#home"> Projects</Link> */}
        <div className='projectcontainer parent'>
          <div className=' ribbon'><a href="https://github.com/2peagles" target="_blank" rel="noreferrer"><GoLogoGithub className='ribbonlogo'/></a></div>
          <div className='projectcontentcontainer'>
            <img src={smartbrain} alt=" Face Recognition App Login Page" />
             <h1>Smart Brain</h1>
                <p><b> FULL STACKED REACT APP </b> 
                 Takes images and detects faces, using claraifi api. 
                 has a secure login! 
                 {/* <ol>
                     <li>react (framework)</li>
                     <li>node.js/express (server)</li>
                     <li>postgres (database)</li>
                    <li>heroku (cloud source )</li>
                   </ol> */}
                  </p>
                   {/* <ol>
                     <li>react (framework)</li>
                     <li>node.js/express (server)</li>
                     <li>postgres (database)</li>
                    <li>heroku (cloud source )</li>
                   </ol> */}
                   <p className='testheading'><b>TEST IT OUT YOURSELF </b></p>
                  <ol>
                    <li className='test'> gmail: test@gmail.com </li>
                     <li className='test'> password:123</li>
                </ol>
                <button className='liveview'> <a href='/'  target="_blank" rel="noreferrer" ><b>LIve View</b></a></button>
                  {/* <button className=' projectbtn livebtn'>Live view</button>
                  <button className='projectbtn'><a href='/' className='gitrepo'><GoLogoGithub /></a></button> */}
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
            <ol>
              <li>react </li>
              <li>react tspartticles</li>
              <li>tacyhons  </li>
              <li>bootstrap</li>
            </ol>
            <button className='liveview'> <a href='https://2peagles.github.io/PeaglePups/'  target="_blank" rel="noreferrer" ><b>LIve View</b></a></button>
            {/* <button className=' projectbtn livebtn'>Live view</button>
            <button className='projectbtn'><a href='/' className='gitrepo'><GoLogoGithub /></a></button> */}
          </div>
        </div>
        <div className='projectcontainer parent'>
          <div className='projectcontentcontainer '>
            <div className=' ribbon'><a href="https://github.com/2peagles/materials" target="_blank" rel="noreferrer"><GoLogoGithub className='ribbonlogo' /></a></div>
            <img src={ecom} alt=" Face Recognition App Login Page" />
            <h1>Smart Brain</h1>
            <p><b> FRONT END REACT APP </b>
              Static Eccomerce app, with bright colors. 
              made with material ui, with commerce.js 
              and stripe ready to be installed.
            </p>
            <ol>
              <li>react (framework)</li>
              <li>Material UI</li>
              <li></li>
              <li>Netlify</li>
            </ol>
           <button className='liveview'> <a href='https://62d323e7a9a7384c553358c6--resilient-dolphin-e1c9c0.netlify.app/'  target="_blank" rel="noreferrer" ><b>LIve View</b></a></button>
          </div>
        </div>
      </div>
    </div>
  )
}
