import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import imageContact from '../images/cool.jpg'

export const Contact = () => {
 const form = useRef();
 const [isSuccess, setIsSuccess] = useState(false);

 const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8pwldqd', 'template_lr3k5lp', e.target, 'urj-GWog3ztk4M7YC')
      .then((result) => {
          console.log(result.text);
          setIsSuccess(true);
      }, (error) => {
          console.log(error.text);
      });
 };

 const handleClose = () => {
    setIsSuccess(false);
 }

 return (
    <div className='contact'>
      <h1>Contact Us</h1>

      <div className='contact-form'>
        <div>
          <p data-aos='zoom-in-up' data-aos-duration='1500'>We value your inquiries and feedback. Our team is here to assist you. Please feel free to reach out to us through the following contact information:</p>
          <img src={imageContact} alt="ImageContact" data-aos='flip-right' data-aos-duration='1500' />
        </div>

        <form ref={form} onSubmit={sendEmail} method='post' className='contact-inputs' data-aos='flip-right' data-aos-duration='1500'>
        <h2>Send Us a Message</h2>
      <section>
      <input type="text" name="user_name" placeholder='Name' required />
      <label></label>
      <input type="email" name="user_email" placeholder='Email' required />
      </section>
      <textarea name="message" placeholder='Write Your Message Here' required />
      <input type="submit" value="Send" className='contact-btn' />

    </form>
      </div>

      {isSuccess && 
        <div className="success-message" >
          <h2>Message Sent!</h2>
          <button onClick={handleClose}>Close</button>
        </div>
      }

      <div className='container-hours-location'>
        <div className='hours-location'>
          <div data-aos='zoom-in-up' data-aos-duration='2000'>
            <h3>Business Hours</h3>
            <ul>
              <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
              <li>Saturday: Closed</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          <div data-aos='zoom-in-up' data-aos-duration='2000'>
            <h3>Location</h3>
            <ul>
              <li>VIT University Chennai Campus,</li>
              <li>Vandalur-Kelambakkam road,</li>
              <li>Chennai-600127,Tamil Nadu,India.</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
 )
}

export default Contact