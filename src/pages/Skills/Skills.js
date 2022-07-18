import React from 'react';
import { BsGithub} from 'react-icons/bs';
import { FaReact, FaBootstrap } from 'react-icons/fa'
import { SiMaterialui, SiTsnode, SiCsswizardry } from 'react-icons/si'
import { DiJavascript1} from 'react-icons/di'
import './Skills.css';

export const Skills = () => {
  return (
    <div id='skills'>
         <ul className='skillcontainer'>
                <li>
                    <BsGithub size={70} />  
                </li>
                <li>
                   <FaReact size={70} />
                </li>
                <li>
                   <FaBootstrap size={70} />
                </li>
                <li>
                   <SiMaterialui size={70} />
                </li>
                <li>
                   <DiJavascript1 size={70} />
                </li>
                <li>
                   <SiTsnode size={70} />
                </li>
                <li>
                   <SiCsswizardry size={70} />
                </li>
        </ul>
    </div>
  )
}
