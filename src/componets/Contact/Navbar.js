import React,{useState, useEffect} from 'react';
import { Nav } from '../Nav/Nav';
export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
   useEffect(  ()=> {
    window.addEventListener (( )=>{
      if(window.scrollY > 100){
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    })
  }, [ ] );

  return (
    <div>
      {showNavbar && (
        <Nav />
      )}
    </div>
  )
}
