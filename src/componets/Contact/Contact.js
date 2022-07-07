import React from 'react';
import './Contact.css';
export default class Contact extends React.Component {
  state = {
    name:null,
    email:null,
    phone:null,
    message:null
  }

  eventHandler( event ) {
    this.setState( { [ event.target.name ]: event.target.value})
  }

  handleSubmit (event){
    event.preventDefault();
  }
  render ( ){
  return (
    <form>
      <h1>Get In Touch</h1>
        <label>Name</label>
         name: <input 
        type='text' 
        name='name' 
        placeholder='Name'
         onChange={this.eventHandler}/>
      <div>
        <label>Phone</label>
       phone: <input 
        type='numbers' 
        name='phone-number' 
        placeholder='Phone-Number'
        maxLength={12}
          onChange={this.eventHandler} />
      </div>
      <div>
        <label>Email</label>
        email: <input 
          type='text' 
          name='email-address' 
          placeholder='Email'
          onChange={this.eventHandler} />
      </div>
      <div>
        <label>Message</label>
       message:  <input
         type='text' 
         name='textbox' 
         placeholder='Message'
         maxLength={200}
         onChange={this.eventHandler}
        />
      </div>
      <div>
        <button type='submit' onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
     </form>
    )
  }
}