import React from 'react';
// import { Nav } from '../Nav/Nav';
import { GrClose } from 'react-icons/gr';
import './Popup.css';
// import { InnerPopup } from './InnerPopup';

export const Popup = (props) => {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
        <button className='close-btn' onClick={(() => props.setTrigger(false))}>
          <GrClose  />
        </button>
        {props.children}
      </div>
    </div>
  ): ' ' ;
}
