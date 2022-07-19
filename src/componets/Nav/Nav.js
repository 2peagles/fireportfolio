import React, {useState} from 'react';
import { BsGithub } from 'react-icons/bs';
import { BiMenu, BiLibrary} from 'react-icons/bi';
import { FaHome, FaTimes } from 'react-icons/fa';
import { RiFilePaper2Fill } from 'react-icons/ri';
import { GrLinkedin } from 'react-icons/gr';
import { IconContext } from "react-icons";
import { HashLink as Link } from 'react-router-hash-link';
import Resume from '../../Images/Resume .pdf';
import './Nav.css';


export const Nav = () => {
    const[menu, setMenu] = useState(false);
    const handleClick =()=>setMenu(!menu);
    return(
        <> 
        <IconContext.Provider value={{ color: "white", className: "" }}>
            <div className='sidebar'>
                <ul > 
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
                        href="https://www.linkedin.com/in/precious-bey-b31177220/"
                        target="_blank"
                        rel="noreferrer"
                        className='sideicon'>
                         LINKEDIN <GrLinkedin />
                        </a>
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
            <div onClick={handleClick} className='mobilemenu'>
                {!menu ? <BiMenu  /> : <FaTimes /> }
            </div>

                <ul className={!menu ? 'hidden' : 'mobilecontent'}>
                    <ul>
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
                            href={Resume}
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