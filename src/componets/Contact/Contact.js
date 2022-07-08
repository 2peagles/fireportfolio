import React from 'react';
import './Contact.css';
export default function Contact () {
  return (
    <form action="https://getform.io/f/88c578b9-2c0d-4849-bbef-669ebdde076f" method="POST">
      <h1>Get In Touch</h1>
        <label>Name</label>
       <input 
        type='text' 
        name='name' 
        placeholder='Name'
        />
      {/* <div>
        <label>Phone</label>
       <input 
        type='numbers' 
        name='number' 
        placeholder='Phone-Number'
        maxLength={12}
         />
      </div> */}
      <div>
        <label>Email</label>
        <input 
          type='text' 
          name='email' 
          placeholder='Email'
         />
      </div>
      <div>
        <label>Message</label>
        <input
         type='text' 
         name='message' 
         placeholder='Message'
         maxLength={200}
        />
      </div>
      <div>
        <button type='submit'>
          Send
        </button>
      </div>
     </form>
    )
  }