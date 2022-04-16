import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images';

import './Header.css';

const Header = () => (
  <div>
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour"/>
        <h1 className="app__header-h1">
          The Key to Fine Dining
        </h1>
        <p className="p__opensans" style={{margin:"2rem 0"}}>Remember when cafés served full English breakfasts – sausages, beans, fried bread, bacon and eggs – with a strong cup of tea? Well, this place still does and you can have your breakfast at any time you like during the day while you listen to your favourite tunes from the 1980s. </p>
        <button type="button" className="custom__button">Explore Menu</button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
  </div>
);

export default Header;
