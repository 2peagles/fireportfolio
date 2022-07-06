import { GoLogoGithub } from 'react-icons/go'
import { FaHome,FaTimes } from 'react-icons/fa'
import { RiFilePaper2Fill } from 'react-icons/ri'
// import CgWorkAlt from 'react-icons/cg'
import { GiHamburgerMenu } from 'react-icons/gi';
import{ GrContact } from 'react-icons/gr'
import React, {useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Resume from '../../Images/Resume .pdf';
import { Popup } from '../Contact/Popup';
import { Contact } from  '../Contact/Contact';
import './Nav.css';

export const Nav = () => {
    const [navbar, setNavbar] = useState(false);
    const handleClick = ()=> setNavbar(!navbar);
    
    const [buttonPopup, setButtonPopup] =useState(false);
    return(
            <div className='nav'>
                {/* <ol className='navol'>
                    <li className='navicons'><Link smooth to="#home"><FaHome/></Link></li>
                    <li className='navicons'>
                        <a href="https://github.com/2peagles" target="_blank"  rel="noreferrer">
                            <GoLogoGithub/>
                         </a>
                    </li>
                    <li className='navicons'>
                        <a href="/Contact" >
                            <GrContact/>
                        </a>
                    </li> 
                    <li className='navicons'>
                         <a href={Resume} rel="noreferrer" target="_blank">
                            <RiFilePaper2Fill/>
                        </a>
                    </li>
                </ol> */}

                {/* mobile nav */}
                <div onClick={handleClick} className='mobilemenu'> 
               {!navbar ? <GiHamburgerMenu /> : <FaTimes/> }
                </div>  

                <div className={!navbar ? 'hidden' : 'mobilenav'}>
                    <Link onClick={handleClick} smooth to="#home">
                        <FaHome  />
                    </Link>
                    <a href="https://github.com/2peagles" target="_blank" rel="noreferrer">
                        <GoLogoGithub /> 
                        </a>
                        <button onClick={() => setButtonPopup(true)} > <GrContact /></button>
                        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                            <Contact />
                        </Popup>
                        <a href={Resume} rel="noreferrer" target="_blank" >
                        <RiFilePaper2Fill onClick={handleClick} />
                        </a>
                </div>
            </div>
    );
}