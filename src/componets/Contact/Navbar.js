import React, { useState, useEffect } from 'react';
import { Contact } from '../Contact/Contact';
export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
   useEffect(( )=> {
    window.addEventListener ('scroll', () =>{
      if (window.scrollY > 100) {
        setShowNavbar('true');
      } else {
        setShowNavbar('false');
      }
    })
  }, [ ] );

  return (
    <div>
      {showNavbar && (
        <Contact />
      )}
    </div>
  )
}
