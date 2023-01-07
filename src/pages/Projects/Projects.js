import React from 'react';
import {Slide} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';
// import {SlideImages} from './SlideImages'
// import { GoLogoGithub } from 'react-icons/go';
// import peagles from '../../Images/peagles.png';
// import sunnyside from '../../Images/sunnyside.png';
// import clipboard from '../../Images/clipboard.png';
import './Projects.css';

const slideImages = [
  {
    url:'https://i.postimg.cc/3w8F0Dg9/Screenshot-2023-01-07-6-11-37-PM.png',
    // src:'../../Images/sunnyside.png',
    captiontitle:'easybank',
    captiondescription: 'This challenge focuses mostly on HTML & CSS. There is a tiny bit of JS included for the mobile navigation toggle.',
    livesitelink:'https://main--precious-semifreddo-5c681f.netlify.app/',
    githublink:'https://github.com/2peagles/easybank',
  },
  {
    url: 'https://i.postimg.cc/wT9MpcHW/Screenshot-2023-01-07-6-10-47-PM.png',
    captiontitle: 'sunnyside',
    captiondescription: 'This challenge focuses mostly on HTML & CSS. There is a tiny bit of JS included for the mobile navigation toggle.',
    livesitelink: 'https://eloquent-cannoli-31bcd7.netlify.app/',
    githublink: 'https://github.com/2peagles/SunnySide',
  },
  {
    url: 'https://i.postimg.cc/1X5Kw1G2/Screenshot-2023-01-07-6-13-00-PM.png',
    captiontitle: 'loopstudios',
    captiondescription: 'This challenge focuses mostly on HTML & CSS. There is a tiny bit of JS included for the mobile navigation toggle.',
    livesitelink: 'https://jade-twilight-3bf9e4.netlify.app/',
    githublink: 'https://github.com/2peagles/loopstudios',
  },
  {
    url: 'https://i.postimg.cc/zD672vrX/Screenshot-2023-01-07-6-12-09-PM.png',
    captiontitle: 'shortly',
    captiondescription: 'This challenge focuses mostly on HTML & CSS. There is a tiny bit of JS included for the mobile navigation toggle.',
    livesitelink: 'https://main--starlit-manatee-c4b578.netlify.app/',
    githublink: 'https://github.com/2peagles/shorten-link',
  },
]
export const Projects = () => {
  return (
    <section id='projects'>
      <div className='project_container'>
      {/* <div className='projectsdiv'> */}
      <article className='slide-container' >
        <Slide>
            {slideImages.map((slideImage, index)=>(
              <div className='each-slide' key={index} style={{backgroundImage:`url(${slideImage.url})`}}>
                  <div className='caption_container'>
                    <div className='caption_items'>
                      <span>{slideImage.captiontitle}</span>
                      <span><p>{slideImage.captiondescription}</p></span>
                      {/* <div className='btngroupproject'> */}
                      <button className='slidebtn'><a href={slideImage.livesitelink} target="_blank" rel="noreferrer">preview</a></button>
                      <button className='slidebtn'><a href={slideImage.githublink} target='_blank' rel='noreferrer'>github</a></button>
                      {/* </div> */}
                    </div>
                  </div>
              </div>
            ))}
          </Slide>
      </article>

      <article className='about_section'>
        <h2>about me</h2>
          <p>
            Hello there, my name is Precious and I’m an aspiring front end developer! 
            Since I started coding almost a year ago, I have learned so much. Having learned so much,
             I have so much more of an appreciation for web applications now. There's always something 
             new to learn. I started doing frontend mentor challenges and I really like them. I'm considering
              getting the premium version, but for now, using my eye judgment is fine with me.

        </p>
      </article>
      </div>
    </section>
  )
}
