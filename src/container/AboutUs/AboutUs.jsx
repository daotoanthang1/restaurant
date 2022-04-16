import React from 'react';

import images from '../../constants/images';

import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon_img" />
        <p className="p__opensans">Fast food doesn’t have to be junk food, as this café proves. Do you fancy a really good hamburger made with the best ingredients, or old-fashioned fish and chips fried to perfection.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon_img" />
        <p className="p__opensans">The owner of this small café used to cook all kinds of food, but then she realised she preferred desserts to anything else. If you want meat or fish, don’t come here.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
