import React from 'react';
import './Contact.css';
export const Contact = ( ) =>{
  return (
    <div>
      <h1>Get In Touch</h1>
      <div>
        <label>Name</label>
        <input></input>
      </div>
      <div>
        <label>Phone</label>
        <input></input>
      </div>
      <div>
        <label>Email</label>
        <input></input>
      </div>
      <div>
        <label>Message</label>
        <textbox
        placeholder='message'></textbox>
      </div>
     </div>
  )
}
