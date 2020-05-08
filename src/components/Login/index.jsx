import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="popup_outer" id="login" data-hidden="true">
      <div className="popup_login">
        <div className="heading_login">
          Hello
          <i class="fas fa-times close_icon" onClick={()=>document.querySelector('#login').dataset.hidden = "true"}></i>
        </div>
        <div className="welcome_text">
          Welcome to Albert Torresi
        </div>
        <div className="via">
          Login via
        </div>
        <div className="blog_button_wrapper">
          <button className="button facebook login_button" style={{["--color"] : `#3b5998`}}>
          <i className="fab fa-facebook-f icon"></i>Facebook
          </button>
          <button className="button google login_button" style={{["--color"] : `#DB4437`}} >
          <img className="google_icon" src="https://www.stickpng.com/assets/images/5847f9cbcef1014c0b5e48c8.png" alt=""/>
          <img className="google_name" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png" alt=""/>
          </button>
        </div>
        <div className="or">OR</div>
        <div className="otp">
          Login usuing OTP
        </div>
        <div className="container">
        <div className="form_wrapper">
          <form action="/" className="form">
            <input placeholder="Email or Mobile No*" type="text" className="login_input" />
            <input placeholder="Password*" type="password" className="login_input" />
            <Link to="/">Forgot Password ?</Link>
            <button className="button right login_btn" style={{["--color"] : `#000`}}>Login</button>
          </form>
        </div>
        </div>
        <div className="new_section">
        <div className="container new_section_wrapper">
          <span className="new_text">New Customer?</span>
          <button className="button right" style={{["--color"] : `#000`}}>Register</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;