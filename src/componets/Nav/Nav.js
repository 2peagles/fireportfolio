import { BsGithub} from 'react-icons/bs';
import { BiMenu } from 'react-icons/bi';
import { FaHome, FaTimes } from 'react-icons/fa';
import { RiFilePaper2Fill } from 'react-icons/ri';
import { BiLibrary } from 'react-icons/bi';
// import CgWorkAlt from 'react-icons/cg'
import { GrLinkedin } from 'react-icons/gr';
import{ GrContact } from 'react-icons/gr'
import React, {useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Resume from '../../Images/Resume .pdf';
import { Popup } from '../Contact/Popup';
import Contact from  '../Contact/Contact';
import './Nav.css';
import { IconContext } from "react-icons";


export const Nav = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    const[menu, setMenu] = useState(false);
    const handleClick =()=>setMenu(!menu);
    return(
        <> 
        <IconContext.Provider value={{ color: "white", className: "" }}>
            <div className='sidebar'>
                <ul className={!menu ? 'hidden' : 'mobilecontent'}> 
                    <li className='sideicons home'>
                        <Link 
                             smooth to="#home"
                             className='sideicon'>
                       HOME <FaHome />
                    </Link>
                    </li>
                    <li className='sideicons skills'>
                        <Link 
                             smooth to="#skills"
                             className='sideicon'>
                       SKILLS <BiLibrary />
                    </Link>
                    </li>
                    <li className='sideicons github'>
                    <a 
                        href="https://github.com/2peagles" 
                        target="_blank"
                        rel="noreferrer"
                        className='sideicon github'>
                         GITHUB <BsGithub />
                    </a>
                    </li>
                    <li className='sideicons linkedin'>
                        <a
                        href="h/"
                        target="_blank"
                        rel="noreferrer"
                        className='sideicon'>
                         LINKEDIN <GrLinkedin />
                        </a>
                    </li>
                    <li className='sideicons contact'>
                    <div onClick={() => setButtonPopup(true)} className='sideicon '> 
                        Contact <GrContact className='contacticon' stroke="white"/>
                    </div>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <Contact  />
                    </Popup>
                    </li>
                    <li className='sideicons resume'>
                    <a 
                        href={Resume}
                         rel="noreferrer" 
                         target="_blank" 
                        className='sideicon'>
                        RESUME <RiFilePaper2Fill />
                    </a>
                    </li>
                </ul>
            </div>
            </IconContext.Provider>
<div className='navbar'>
            <div onClick={handleClick} className='mobilemenu'>
                {!menu ? <BiMenu  className='menu'/> : <FaTimes className='ex-menu'/> }
            </div>

                <ul className={!menu ? 'hidden' : 'mobilecontent'}>
                    <li className='mobileicon'>
                        <Link
                            onClick={handleClick}
                            smooth to="#home"
                            className='mobileicons'>
                            HOME
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
                            href="h/"
                            target="_blank"
                            rel="noreferrer"
                            className='mobileicons'>
                            LINKEDIN
                        </a>
                    </li>
                    <li className='mobileicon'>
                        <a
                            href={Resume}
                            rel="noreferrer"
                            target="_blank"
                            className='mobileicons'>
                            RESUME
                        </a>
                    </li>
                </ul>
            </div>
            </>
    );
}