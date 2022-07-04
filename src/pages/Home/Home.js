import React  from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Resume from '../../Images/Resume .pdf';
// import {GrContact} from 'react-icons/gr';
// import { Popup } from '../../componets/Contact/InnerPopup';
import './Home.css';

export const Home = () => {
  return (
    <div id='home'>
        <div id='homecontainer'> 
            <div className='homecontentcontainer'>
                <h1 className='homeheader'>full stacked developer</h1>
                <p className='homep'>building responsive optimized sites.</p>
            </div>
            <div className='btngroup'>
               <button><Link smooth to="#projects"> Projects</Link></button>
                <button><a href={Resume} rel="noreferrer" target="_blank">resume</a></button>
              </div>
            {/* <button className='contactbtn'>Get in touch</button> */}
          </div>
          {/* <GrContact onClick={() => setButtonPopup(true)} className='contacticon' />
       <Popup trigger={buttonPopup} setTigger={setButtonPopup}></Popup> */}
    </div>
  )
}
