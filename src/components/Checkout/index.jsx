import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <div>
      <div className="heading_login">Checkout</div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="content_primary">
              1. Customer Information
            </div>
            <input type="text" className="login_input input"/>
            You can create an account after checkout.
            <br/>
            <Link to="/">Sign In</Link> or <b>Guest Checkout</b>
            <hr/>
            <input type="text" className="login_input input"/>
            <input type="text" className="login_input input"/>
            <input type="text" className="login_input input"/>
            <input type="text" className="login_input input"/>
            <input type="text" className="login_input input"/>
            <input type="text" className="login_input input"/>
            <select name="" id="" className="login_input input">
              <option value="pak">Pakistan</option>
            </select>
            <input type="text" className="login_input input"/>
            <p><input type="radio" name="place" id="home"/> <label htmlFor="home">Home</label></p>
            <p><input type="radio" name="place" id="work"/> <label htmlFor="work">Work(Delivery Monday to Friday 9am - 6pm)</label></p>
            <p><input type="checkbox" name="place" id="future"/> <label htmlFor="future">Save this for future communication</label></p>
            <p><input type="checkbox" name="place" id="address"/> <label htmlFor="address">My billing and shipping address are the same</label></p>
          </div>
          <div className="col-lg-4"></div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;