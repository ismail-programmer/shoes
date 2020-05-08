import React, { Component } from "react";
import img1 from "../../resources/images/ALBERTO_TORRESI_EVAN_MEN_S_TAN_TASSEL_SLIP-ONS_mediume2b5.jpg";
class product extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="bg-light">
          <button className="btn btn-danger redBtn">ON SALE</button>
          <img className="imageProduct" src={img1} />
          <div className="paras">
            <p>ALBERTO TORRESI EVAN MENS TAN TASSEL SLIP-ONS</p>
            <p>
              <del className="delPrice">$54564</del>{" "}
              <span className="text-danger">$545</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default product;
