import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import './Newsletter.css';
import { SubHeading, } from '../../components';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title='Newsletter'/>
      <h1 className='headtext__cormorant'>Subscribe to Our Newsletter</h1>
      <p className='p__opensans'>And never miss latest Updates!</p>
    </div>
    <div className='app__newsletter-content'>
      <h1 className='p__cormorant'>Contact Us</h1>
      <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
      <p className='p__opensans'>+1 212-344-1230</p>
      <p className='p__opensans'>+1 212-555-1230</p>
    </div>
    <div className='app__newsletter-working'>
      <h1 className='p__cormorant' >Working Hours</h1>
      <p className='p__opensans'>Monday-Friday</p>
      <p className='p__opensans'>08:00 am -12:00 am</p>
      <p className='p__opensans'>Saturday-Sunday:</p>
      <p className='p__opensans'>07:00am -11:00 pm</p>

    </div>
    <div className='app__newsletter-input flex__center'>
      <input type='email' placeholder='Enter Your Email Adress'/>
      <button  className='custom__button'>Subscribe</button>
    </div> 
    <div className='app__newsletter-copyright'>
    <p className='p__opensans'>@2021 Gerícht. All Rights reserved.</p>
    </div>
    <div className='app__footer-links_icons'>
      <FiFacebook />
      <FiTwitter />
      <FiInstagram />

    </div>
  </div>
  
);

export default Newsletter;
