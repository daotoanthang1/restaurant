import React, { Fragment, useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link } from 'react-router-dom';
import images from "../../constants/images";
import { Login } from '../../container/Account/Login/Login';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false);
  useEffect(()=>{
    var header = document.getElementsByClassName("app__navbar-links");
    var btns = header[0].getElementsByClassName("nav__link");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      });
    }
  })
  
  return (
    <Fragment>
      <nav className="app__navbar" style={{position:"fixed",zIndex:"999"}}>
        <div className="app__navbar-logo">
          <a href="#home"><img src={images.gericht} alt="app logo"/></a>
        </div>
        <ul className="app__navbar-links">
          <li className="p__opensans nav__link active"><a href="#home">Home</a></li>
          <li className="p__opensans nav__link"><a href="#about">About</a></li>
          <li className="p__opensans nav__link"><a href="#menu">Menu</a></li>
          <li className="p__opensans nav__link"><a href="#awards">Awards</a></li>
          <li className="p__opensans nav__link"><a href="#contact">Contact</a></li>
        </ul>
        <div className="app__navbar-login"> 
          
          <a href="/login" className="p__opensans">Login / Register</a>
          <div/>
          <a href="/" className="p__opensans">Book Table</a>
        </div>
        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu color="#fff" fontSize={27} cursor="pointer" onClick={()=>setToggleMenu(true)} />


          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={()=>setToggleMenu(false)} />
              <ul className="app__navbar-smallscreen_links">
                <li className="p__opensans"><a href="#home" onClick={()=>setToggleMenu(false)}>Home</a></li>
                <li className="p__opensans"><a href="#about" onClick={()=>setToggleMenu(false)}>About</a></li>
                <li className="p__opensans"><a href="#menu" onClick={()=>setToggleMenu(false)}>Menu</a></li>
                <li className="p__opensans"><a href="#awards" onClick={()=>setToggleMenu(false)}>Awards</a></li>
                <li className="p__opensans"><a href="#contact" onClick={()=>setToggleMenu(false)}>Contact</a></li>
              </ul>
            </div> 
            )}
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar;
