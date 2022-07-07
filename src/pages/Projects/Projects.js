import React from 'react';
import './Projects.css';
import smartbrain from '../../Images/smartbrain.png';
import { GoLogoGithub } from 'react-icons/go';
// import { HashLink as Link } from 'react-router-hash-link';

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
                  </p>
                   <ol>
                     <li>react (framework)</li>
                     <li>node.js/express (server)</li>
                     <li>postgres (database)</li>
                    <li>heroku (cloud source )</li>
                   </ol>
                   <p className='testheading'><b>TEST IT OUT YOURSELF </b></p>
                  <ol>
                    <li className='test'> gmail: test@gmail.com </li>
                     <li className='test'> password:123</li>
                </ol>
                  {/* <button className=' projectbtn livebtn'>Live view</button>
                  <button className='projectbtn'><a href='/' className='gitrepo'><GoLogoGithub /></a></button> */}
             </div>
        </div>
        <div className='projectcontainer parent'>
          <div className='projectcontentcontainer'>
            <div className=' ribbon'><a href="https://github.com/2peagles" target="_blank" rel="noreferrer"><GoLogoGithub className='ribbonlogo' /></a></div>
            <img src={smartbrain} alt=" Face Recognition App Login Page" />
            <h1>Smart Brain</h1>
            <p><b> FULL STACKED REACT APP </b>
              Takes images and detects faces, using claraifi api.
              has a secure login!
            </p>
            <ol>
              <li>react (framework)</li>
              <li>node.js/express (server)</li>
              <li>postgres (database)</li>
              <li>heroku (cloud source )</li>
            </ol>
            <p className='testheading'><b>TEST IT OUT YOURSELF </b></p>
            <ol>
              <li className='test'> gmail: test@gmail.com </li>
              <li className='test'> password:123</li>
            </ol>
            {/* <button className=' projectbtn livebtn'>Live view</button>
            <button className='projectbtn'><a href='/' className='gitrepo'><GoLogoGithub /></a></button> */}
          </div>
        </div>
        <div className='projectcontainer parent'>
          <div className='projectcontentcontainer '>
            <div className=' ribbon'><a href="https://github.com/2peagles" target="_blank" rel="noreferrer"><GoLogoGithub className='ribbonlogo' /></a></div>
            <img src={smartbrain} alt=" Face Recognition App Login Page" />
            <h1>Smart Brain</h1>
            <p><b> FULL STACKED REACT APP </b>
              Takes images and detects faces, using claraifi api.
              has a secure login!
            </p>
            <ol>
              <li>react (framework)</li>
              <li>node.js/express (server)</li>
              <li>postgres (database)</li>
              <li>heroku (cloud source )</li>
            </ol>
            <p className='testheading'><b>TEST IT OUT YOURSELF </b></p>
            <ol>
              <li className='test'> gmail: test@gmail.com </li>
              <li className='test'> password:123</li>
            </ol>
            {/* <button className=' projectbtn livebtn'>Live view</button>
            <button className='projectbtn'><a href='/' className='gitrepo'><GoLogoGithub /></a></button> */}
          </div>
        </div>
      </div>
    </div>
  )
}
