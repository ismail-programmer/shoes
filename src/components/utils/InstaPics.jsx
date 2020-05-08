import React, { Component } from "react";

import img1 from "../../resources/images/img1.png";

class InstaPics extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <span className="col-lg-1 col-md-1 col-sm-1"></span>
          <div className="imge col-lg-2 col-md-2 col-sm-2">
            <img style={{width: `100%`}}  src={img1} alt="" />
            <i className="fab fa-instagram  icon1 "></i>
          </div>
          <div className="imge col-lg-2 col-md-2 col-sm-2">
            <img style={{width: `100%`}} src={img1} alt="" />
            <i className="fab fa-instagram  icon1 "></i>
          </div>
          <div className="imge col-lg-2 col-md-2 col-sm-2">
            <img  style={{width: `100%`}} src={img1} alt="" />
            <i className="fab fa-instagram  icon1 "></i>
          </div>
          <div className="imge col-lg-2 col-md-2 col-sm-2">
            <img  style={{width: `100%`}} src={img1} alt="" />
            <i className="fab fa-instagram  icon1 "></i>
          </div>
          <div className="imge col-lg-2 col-md-2 col-sm-2">
            <img  style={{width: `100%`}} src={img1} alt="" />
            <i className="fab fa-instagram  icon1 "></i>
          </div>
          <span className="col-lg-1 col-md-1 col-sm-1"></span>
        </div>
      </div>
    );
  }
}

export default InstaPics;
