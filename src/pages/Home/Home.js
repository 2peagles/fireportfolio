import React from 'react';
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
               <button><a href='/'><p>Portfolio</p></a></button>
                <button><a href='/'><p>resume</p></a></button>
              </div>
            <button className='contactbtn'>Get in touch</button>
          </div>
    </div>
  )
}
