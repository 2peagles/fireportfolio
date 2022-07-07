import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa'
import './Contact.css'
export const ContactScroll = () => {
  const [showContactScroll, setShowContactScroll] = useState(false);
   useEffect(( )=> {
    window.addEventListener ('scroll', () =>{
      if (window.scrollY > 100) {
        setShowContactScroll(true);
      } else {
        setShowContactScroll(false);
      }
    })
  }, [ ] );

  return (
    <div>
      {showContactScroll && (
          <FaTimes/>
               )}
    </div>
  )
}
