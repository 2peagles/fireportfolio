import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import PreciousResume from '../../Images/PreciousResume .pdf';
import './Home.css';

export const Home = () => {
  return (
    <div id='home'>
        <div id='homecontainer'> 
            <div className='homecontentcontainer'>
                <h1 className='homeheader'>front end developer</h1>
                <p className='homep'>building responsive optimized sites.</p>
            </div>
            <div className='btngroup'>
               <button><Link smooth to="#projects"> Projects</Link></button>
                <button><a href={PreciousResume} rel="noreferrer" target="_blank">resume</a></button>
              </div>
          </div>
    </div>
  )
}
