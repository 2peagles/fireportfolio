import React, { useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { BiMenu, BiLibrary} from 'react-icons/bi';                  
import { FaHome, FaTimes } from 'react-icons/fa';
import { RiFilePaper2Fill } from 'react-icons/ri';
import { GrLinkedin } from 'react-icons/gr';
import { IconContext } from "react-icons";
import { HashLink as Link } from 'react-router-hash-link';
// import Resume from '../../Images/Resume .pdf';
import ResumeNew from '../../Images/ResumeNew.pdf';
import './Nav.css';


export const Nav = () => {
    const[menu, setMenu] = useState(false);
    const handleClick =()=>setMenu(!menu);
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
            if (window.scrollY  >= 190 ) {
                setNavbar(true);
            } else {
                setNavbar(false);
            }
        }
        
window.addEventListener('scroll', changeBackground)

    return(
        <> 
        <IconContext.Provider value={{ color: "white", className: "" }}>
            <div className='sidebar'>
                <ul > 
                        <li className={navbar ? 'sideiconsbackgroundchange' : 'sideicons'}>
                        <Link 
                             smooth to="#home"
                             className='sideicon'>
                       HOME <FaHome />
                    </Link>
                    </li>
                        <li className={navbar ? 'sideiconsbackgroundchange' : 'sideicons'} >
                        <Link 
                             smooth to="#skills"
                             className='sideicon'>
                       SKILLS <BiLibrary />
                    </Link>
                    </li>
                        <li className={navbar ? 'sideiconsbackgroundchange' : 'sideicons'}>
                    <a 
                        href="https://github.com/2peagles" 
                        target="_blank"
                        rel="noreferrer"
                        className='sideicon github'>
                         GITHUB <BsGithub />
                    </a>
                    </li>
                        <li className={navbar ? 'sideiconsbackgroundchange' : 'sideicons'}>
                        <a
                        href="https://www.linkedin.com/in/precious-bey-b31177220/"
                        target="_blank"
                        rel="noreferrer"
                        className='sideicon'>
                         LINKEDIN <GrLinkedin />
                        </a>
                    </li>
                        <li className={navbar ? 'sideiconsbackgroundchange' : 'sideicons'}>
                    <a 
                        href={ResumeNew}
                         rel="noreferrer" 
                         target="_blank" 
                        className='sideicon'>
                        RESUME <RiFilePaper2Fill />
                    </a>
                    </li>
                </ul>
            </div>
            </IconContext.Provider>

            <div onClick={handleClick}  className={navbar ? 'mobilemenucolorchange' : 'mobilemenu'}>
                {!menu ? <BiMenu  /> : <FaTimes /> }
            </div>

                <ul className={!menu ? 'hidden' : 'mobilecontent'}>
                    <ul className='mobilenav'>
                    <li className='mobileicon'>
                        <Link
                            onClick={handleClick}
                            smooth to="#home"
                            className='mobileicons'>
                            HOME
                        </Link>
                    </li>
                    <li className='mobileicon'>
                        <Link 
                             smooth to="#projects"
                             className='mobileicons'>
                       PROJECTS
                    </Link>
                    </li>
                    <li className='mobileicon'>
                        <Link 
                             smooth to="#skills"
                             className='mobileicons'>
                       SKILLS 
                    </Link>
                    </li>
                    <li className='mobileicon'>
                        <a
                            href="https://github.com/2peagles"
                            target="_blank"
                            rel="noreferrer"
                            className='mobileicons'>
                         GITHUB
                        </a>
                    </li>
                    <li className='mobileicon'>
                        <a
                            href="https://www.linkedin.com/in/precious-bey-b31177220/"
                            target="_blank"
                            rel="noreferrer"
                            className='mobileicons'>
                            LINKEDIN
                        </a>
                    </li>
                    <li className='mobileicon'>
                        <a
                            href={ResumeNew}
                            rel="noreferrer"
                            target="_blank"
                            className='mobileicons'>
                            RESUME
                        </a>
                    </li>
                    </ul>
                </ul>
            </>
    );
}