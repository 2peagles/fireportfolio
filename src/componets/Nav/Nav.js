import GoLogoGithub from 'react-icons/go'
// import FaHome from 'react-icons/fa'
import RiFilePaper2Fill from 'react-icons/ri'
// import CgWorkAlt from 'react-icons/cg'
import GrContact from 'react-icons/gr'
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Resume from '../../Images/Resume .pdf';

export const Nav = () => {
    return(
        <div>
            <nav>
                <ol>
                    <li><Link smooth to="#home"> Home</Link></li>
                    <li>
                        <a href="https://github.com/2peagles" target="_blank"  rel="noreferrer">
                            <GoLogoGithub/>
                         </a>
                    </li>
                    <li>
                        <a class="link dim black dib br-100 h2 w2 mr3 pa2 bg-near-white ba b--black-10" href="/Contact" target="_blank">
                            <GrContact/>
                        </a>
                    </li> 
                    <li>
                         <a href={Resume} rel="noreferrer" target="_blank">
                            <RiFilePaper2Fill/>
                        </a>
                    </li>
                </ol>
            </nav>
        </div>
    );
}