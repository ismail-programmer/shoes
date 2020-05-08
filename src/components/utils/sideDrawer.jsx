import React, { Component } from "react";
import img from "../../resources/images/sidebarimg.jpg";
class sideDrawer extends Component {
  render() {
    return (
      <div style={{display: this.props.show ? "block" : "none"}}>
        <ul>
          <i className="fas fa-chevron-circle-down drop"></i>
          <b className="sideHead"> Category</b>
          <li>Boots</li>
          <li>Casual Shoes</li>
          <li>Formal Shoes</li>
          <li>Sansles & Slippers</li>
        </ul>
        <hr />
        <ul>
          <i className="fas fa-chevron-circle-down drop"></i>
          <b className="sideHead"> Color</b>
          <li>
            <button
              type="button"
              className="ColorSwatch "
              data-tag="color_black"
              data-action="toggle-tag"
              data-tooltip="Black"
              style={{ backgroundColor: "black" }}
            >
              <span className="name">Black</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="ColorSwatch "
              data-tag="color_black"
              data-action="toggle-tag"
              data-tooltip="Black"
              style={{ backgroundColor: "red" }}
            >
              <span className="name">Red</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="ColorSwatch "
              data-tag="color_black"
              data-action="toggle-tag"
              data-tooltip="Black"
              style={{ backgroundColor: "grey" }}
            >
              <span className="name">Grey</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="ColorSwatch "
              data-tag="color_black"
              data-action="toggle-tag"
              data-tooltip="Black"
              style={{ backgroundColor: "green" }}
            >
              <span className="name">Green</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="ColorSwatch "
              data-tag="color_black"
              data-action="toggle-tag"
              data-tooltip="Black"
              style={{ backgroundColor: "yellow" }}
            >
              <span className="name">Yellow</span>
            </button>
          </li>
        </ul>
        <hr />
        <ul>
          <i className="fas fa-chevron-circle-down drop"></i>
          <b className="sideHead"> Size</b>
          <br />
          <li
            className="btn btn-outline-dark bg-light"
            style={{ display: "inline-block", margin: " 5px 5px 5px 50px" }}
          >
            40/6
          </li>
          <li
            className="btn btn-outline-dark bg-light"
            style={{ display: "inline-block", margin: " 5px 5px 5px 10px" }}
          >
            41/7
          </li>
          <br />
          <li
            className="btn btn-outline-dark bg-light"
            style={{ display: "inline-block", margin: " 5px 5px 5px 50px" }}
          >
            42/8
          </li>
          <li
            className="btn btn-outline-dark bg-light"
            style={{ display: "inline-block", margin: " 5px 5px 5px 10px" }}
          >
            43/9
          </li>
        </ul>
        <hr />
        <ul>
          <i className="fas fa-chevron-circle-down drop"></i>
          <b className="sideHead"> Price</b>
          <br />
          <input
            className="inputs"
            style={{
              maxWidth: "70px",
              display: "inline-block",
              marginRight: "100px",
              padding: "5px",
            }}
            type="number"
            defaultValue="2001"
          />
          <input
            className="inputs"
            style={{
              maxWidth: "70px",
              display: "inline-block",
              padding: "5px",
            }}
            type="number"
            defaultValue="6000"
          />
          <li>
            <input type="range" min="$2000" max="$6000" />
          </li>
        </ul>
        <hr />
        <ul>
          <i className="fas fa-chevron-circle-down drop"></i>
          <b className="sideHead"> Styles</b>
          <li>Boots</li>
          <li>Casual Shoes</li>
          <li>Derby</li>
          <li>Formal Shoes </li>
          <li>Lace UP</li>
          <li>Monk</li>
          <li>Oxford</li>
          <li>Sandals</li>
        </ul>

        <img
          src={img}
          style={{ width: "350px", height: "500px" }}
          alt="image"
        />
      </div>
    );
  }
}

export default sideDrawer;
