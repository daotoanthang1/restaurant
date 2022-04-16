import React from 'react';
import { SubHeading } from '..';


import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="News Letter" />
      <h1 className="headtext__cormorant">Subcribe To Our Newsletter</h1>
      <p className="p__opensans">And Never Miss Latest Updates</p>
    </div>
    <div className="app__newsletter-input flex__center">
        <input type="email" placeholder="Enter your e-mail address" />
        <button type="button" className="custom__button">Subcribe</button>
    </div>
  </div>
);

export default Newsletter;
