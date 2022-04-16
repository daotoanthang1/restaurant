import React from 'react';

import { SubHeading } from '../../components';
import { images,data } from '../../constants'; 

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{marginBottom:"3rem"}}>Find us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum urna mi, pellentesque et lacus sit amet, luctus gravida velit. Suspendisse nec risus risus. Integer lacinia lacinia ullamcorper</p>
        <p className="p__cormorant" style={{color:"#DDCA87",margin:"2rem 0"}}>Opening hours</p>
        <p className="p__opensans">Mon-Fri:10.00 am - 2.00 am</p>
        <p className="p__opensans">Sat-Sun:10.00 am - 3.00 am</p>
      </div>
      <button type="button" className="custom__button" style={{marginTop:"2rem"}}>Visit Us</button>
    </div>
    <div className="app__wrapper_img">
        <img src={images.findus} alt="find us" />
      </div>
  </div>
);

export default FindUs;
