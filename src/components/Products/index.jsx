import React, { Component } from "react";

import SideDrawer from "../utils/sideDrawer.jsx";
import Product from "../utils/product";
import banner from "../../resources/images/banner.png";
class Products extends Component {
  state={
    show: true
  }
  componentDidMount(){
    if(window.innerWidth < 600){
      this.setState({show: false})
    }
  }
  toggleShow=()=>{
    this.setState({show: !this.state.show})
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <img src={banner} alt="banner" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-3  col-sm-3">
            <button
              onClick={this.toggleShow}
              className=" btn btn-outline-dark bg-light"
              style={{ fontSize: "20px", padding: "15px" }}
            >
              {" "}
              <i className="fas fa-sliders-h"></i> Hide Filters
            </button>
          </div>
          <div className="col-lg-6 col-md-6  col-sm-6">
            <h1 className="" style={{ fontSize: "32px", padding: "15px" }}>
              Men <span style={{ fontSize: "12px" }}> (1230 Items)</span>
            </h1>
          </div>
          <div className="col-lg-3  col-md-3  col-sm-3">
            <p className="" style={{ fontSize: "24px", padding: "15px" }}>
              <i className="fas fa-sort-amount-up"></i> New Arrivals
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3  col-md-3  col-sm-3">
            <hr />
            <SideDrawer show={this.state.show} />
          </div>
          <div className="col-lg-9 col-md-9  col-sm-9">
            <div className="row">
              <div className="col-lg-3 col-md-6  col-sm-12">
                <Product />
              </div>
              <div className="col-lg-3  col-md-6  col-sm-12">
                <Product />
              </div>
              <div className="col-lg-3  col-md-6  col-sm-12">
                <Product />
              </div>
              <div className="col-lg-3  col-md-6  col-sm-12">
                <Product />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6  col-sm-12">
                <Product />
              </div>
              <div className="col-lg-3  col-md-6  col-sm-12">
                <Product />
              </div>
              <div className="col-lg-3  col-md-6  col-sm-12">
                <Product />
              </div>
              <div className="col-lg-3  col-md-6  col-sm-12">
                <Product />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
