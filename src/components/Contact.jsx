import React from 'react'
import emailjs from "emailjs-com";
const Contact = () => {
     function sendEmail(e){
      e.preventDefault();
      emailjs.sendForm('service_9xtn9pm','template_bky7zom',e.target,'MQT-N8ZxtC4Hqw6Bw').then(res=>{
        console.log(res);
      }).catch(err=> console.log(err));

     }

  return (
    <section className="contact">
      <form onSubmit={sendEmail} >
        <h1>CONTACT US</h1>
        <div>
          <label>Name</label>
          <input
            type="text" name='name'
            
          />
        </div>
        <div>
          <label>Email</label>
         
          <input
            type="email" name='user_email'
            
          />
        </div>
        <div>
          <label>Message</label>
          
          <input
            type="text"  name='message' rows="4"
           
          />
        </div>
        <button
          type="submit" >
         Send Message 
        </button>
      </form>
    </section>
  )
}

export default Contact