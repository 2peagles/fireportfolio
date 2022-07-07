import { BsGithub } from 'react-icons/bs'
import { FaHome } from 'react-icons/fa'
import { RiFilePaper2Fill } from 'react-icons/ri'
// import CgWorkAlt from 'react-icons/cg'
// import { GiHamburgerMenu } from 'react-icons/gi';
import { GrLinkedin } from 'react-icons/gr'
import{ GrContact } from 'react-icons/gr'
import React, {useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Resume from '../../Images/Resume .pdf';
import { Popup } from '../Contact/Popup';
import Contact from  '../Contact/Contact';
import './Nav.css';

export const Nav = () => {
    const [navbar, setNavbar] = useState(false);
    const handleClick = ()=> setNavbar(!navbar);
    
    const [buttonPopup, setButtonPopup] =useState(false);
    return(
            <div className='sidebar'>
                <ul> 
                    <li className='sideicons home'>
                        <Link 
                             onClick={handleClick} 
                             smooth to="#home"
                             className='sideicon'>
                       HOME <FaHome />
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
                    {/* <li className='sideicons'>
                    <button onClick={() => setButtonPopup(true)} className='sideicon'> <GrContact /></button>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <Contact />
                    </Popup>
                    </li> */}
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
    );
}