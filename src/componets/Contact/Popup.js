import React,{ useState, useEffect }from 'react';
import { GrContact } from 'react-icons/gr';
// import { InnerPopup } from './InnerPopup';

export const Popup = (props) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [showContact, setShowContact] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY < 300) {
        setShowContact(true);
      } else {
        setShowContact(false);
      }
    })
  }, []);

  return (
    <div>
      <div className='popup-inner'>
        <button className='close-btn' onClick={(() => props.setTigger(false))}>
          {/* <GrClose /> */}
        </button>
        {props.children}
      </div>
      {showContact && (
        <GrContact
          onClick={()=>setButtonPopup(true)}
          trigger={buttonPopup} setTrigger={setButtonPopup}
          className=' contact-btn' />)}
    </div>

  )
}
