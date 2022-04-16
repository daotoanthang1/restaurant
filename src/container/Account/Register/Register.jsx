import Input from 'rc-input'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Register.css"
export const Register = () => {
    window.onload = function () {
        document.getElementById("password1").onchange = validatePassword;
        document.getElementById("password2").onchange = validatePassword;
    }
    function validatePassword(){
        var pass2=document.getElementById("password2").value;
        var pass1=document.getElementById("password1").value;
        if(pass1!=pass2)
            document.getElementById("password2").setCustomValidity("Passwords Don't Match");
        else
            document.getElementById("password2").setCustomValidity('');	 
    }
  return (
    <div className="content-w3ls">
        <div className="content-agile1">
            <h2 className="agileits1"><Link to="/">GERÍCHT</Link></h2>
            <p className="agileits2">Experience the best you've ever had</p>
        </div>
        <div className="content-agile2">
            <form action="#" method="post">
                <div className="form-control w3layouts"> 
                    <input type="text" id="firstname" name="firstname" placeholder="First Name" title="Please enter your First Name" required="" />
                </div>

                <div className="form-control w3layouts">	
                    <input type="email" id="email" name="email" placeholder="mail@example.com" title="Please enter a valid email" required="" />
                </div>

                <div className="form-control agileinfo">	
                    <input type="password" className="lock" name="password" placeholder="Password" id="password1" required="" />
                </div>	

                <div className="form-control agileinfo">	
                    <input type="password" className="lock" name="confirm-password" placeholder="Confirm Password" id="password2" required="" />
                </div>			
                
                <input type="submit" className="register" value="Register" />
            </form>
            
            <p className="wthree w3l">Fast Signup With Your Favourite Social Profile</p>
            <ul className="social-agileinfo wthree2">
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
            </ul>
        </div>
        <div className="clear"></div>
    </div>
  )
}
