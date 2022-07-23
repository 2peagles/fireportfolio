import React from 'react';
import { BsGithub} from 'react-icons/bs';
import { FaReact, FaBootstrap } from 'react-icons/fa'
import { SiMaterialui, SiTsnode, SiCsswizardry } from 'react-icons/si'
import { DiJavascript1} from 'react-icons/di'
import { IconContext } from 'react-icons';
import './Skills.css';

export const Skills = () => {
  return (
    <div id='skills'>
      <IconContext.Provider value={{ color: "white", className: "skillicons", size:'70' }}>
         <ul className='skillcontainer'>
                <li>
                    <BsGithub className='deg225' />  
                </li>
                <li>
                   <FaReact />
                </li>
                <li>
                   <FaBootstrap className='deg0' />
                </li>
                <li>
                   <SiMaterialui  className='deg180'/>
                </li>
                <li>
                   <DiJavascript1  className='deg135'/>
                </li>
                <li>
                   <SiTsnode  className='deg315'/>
                </li>
                <li>
                   <SiCsswizardry  className='deg45'/>
                </li>
         </ul>
      </IconContext.Provider>
      <IconContext.Provider value={{ color: "white", className: "skillicons", size:'70' }}>
         <ul className='mobile-skills-container'>
            <ul className='mobileul'>
                <li>
                    <BsGithub  />  
                </li>
                <li>
                   <FaReact />
                </li>
                <li>
                   <FaBootstrap  />
                </li>
                <li>
                   <SiMaterialui  />
                </li>
                <li>
                   <DiJavascript1 />
                </li>
                <li>
                   <SiTsnode />
                </li>
                <li>
                   <SiCsswizardry />
                </li>
             </ul>
         </ul>
      </IconContext.Provider>
    </div>
  )
}
