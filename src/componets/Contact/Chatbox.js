import React, { useState, useEffect } from 'react';
import { Popup } from '../Contact/Popup';
import {BsChatSquareTextFill} from 'react-icons/bs';
import Contact from './Contact';
import './Contact.css';

export const Chatbox = () => {
    const[showChatbox, setShowChatbox] = useState(false);
    const [buttonPopup, setButtonPopup] = useState(false);
    useEffect (()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 100){
                setShowChatbox(true);
            } else {
                setShowChatbox(false);
            }
        })
    }, []);

  return (
    <div>
        {showChatbox && (
            <>
              <button onClick={() => setButtonPopup(true)}  className='top-btn-position top-btn-style'> 
                  hello  <BsChatSquareTextFill  />
             </button>
             <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <Contact  />
            </Popup>
          </>
              )}
    </div>
  )
}
