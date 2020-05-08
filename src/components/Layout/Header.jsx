import img1 from "../../resources/images/revised_menu_03_1x1.pngad04.jpg";

import img2 from "../../resources/images/revised_menu_05_1x1.png29fd.jpg";
import img3 from "../../resources/images/locator1b268.png";
import logo_black from "../../resources/images/logo_black_145xc4e9.png";
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  componentDidMount(){
    const listItems = Array.from(
      document.querySelectorAll(".HorizontalList__Item")
    );
    const events = [
      { type: "mouseenter", event: this.mouseEnter },
      { type: "mouseleave", event: this.mouseLeave },
    ];
    listItems.forEach((el) =>events.forEach((e) => el.addEventListener(e.type, e.event)));
  }
  handleDropdown = (e)=>{
    const id= e.target.id || e.target.parentNode.id;
    const dataId= e.target.dataset.id || e.target.parentNode.dataset.id
    this.toggleHidden(id,"expanded");
    this.refs[dataId].classList.toggle("open_dropdown")
  }
  componentWillUnmount(){
    const listItems = Array.from(
      document.querySelectorAll(".HorizontalList__Item")
    );
    const events = [
      { type: "mouseenter", event: this.mouseEnter },
      { type: "mouseleave", event: this.mouseLeave },
    ];
    listItems.forEach((el) =>events.forEach((e) => el.removeEventListener(e.type, e.event)));
  }
  mouseEnter = (e) => e.target.classList.add("is-expanded");
  mouseLeave = (e) => e.target.classList.remove("is-expanded");
  toggleHidden = (id,type) => {
    const attr = document.getElementById(id).attributes;
    if (attr[`aria-${type}`].value === "true") {
      document.getElementById(id).setAttribute(`aria-${type}`, "false");
    } else {
      document.getElementById(id).setAttribute(`aria-${type}`, "true");
    }
  }
  render() {
    return (
      <div>
      <header
        id="section-header"
        className="Header Header--logoLeft   Header--withIcons"
        data-section-id="header"
        data-section-type="header"
        data-section-settings='{"navigationStyle": "logoLeft","hasTransparentHeader": false,"isSticky": true}'
        role="banner"
      >
        <div className="Header__Wrapper">
          <div className="Header__FlexItem Header__FlexItem--fill">
            <button
              onClick={()=> this.toggleHidden("sidebar-menu","hidden")}
              className="Header__Icon Icon-Wrapper Icon-Wrapper--clickable hidden-desk"
              aria-expanded="false"
              data-action="open-drawer"
              data-drawer-id="sidebar-menu"
              aria-label="Open navigation"
            >
              <span className="hidden-tablet-and-up">
                <svg
                  className="Icon Icon--nav"
                  role="presentation"
                  viewBox="0 0 20 14"
                >
                  <path
                    d="M0 14v-1h20v1H0zm0-7.5h20v1H0v-1zM0 0h20v1H0V0z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <span className="hidden-phone">
                <svg
                  className="Icon Icon--nav-desktop"
                  role="presentation"
                  viewBox="0 0 24 16"
                >
                  <path
                    d="M0 15.985v-2h24v2H0zm0-9h24v2H0v-2zm0-7h24v2H0v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </button>
            <nav
              className="Header__MainNav hidden-pocket hidden-lap"
              aria-label="Main navigation"
            >
              <ul className="HorizontalList HorizontalList--spacingExtraLoose">
                <li className="HorizontalList__Item">
                  <Link
                    to="collections/new-arrivals.html"
                    className="Heading u-h6"
                  >
                    New Arrivals
                    <span className="Header__LinkSpacer">New Arrivals</span>
                  </Link>
                </li>
                <li className="HorizontalList__Item ">
                  <Link
                    to="collections/bestsellers.html"
                    className="Heading u-h6"
                  >
                    Best Sellers
                    <span className="Header__LinkSpacer">Best Sellers</span>
                  </Link>
                </li>
                <li
                  className="HorizontalList__Item "
                  aria-haspopup="true"
                  onMouseEnter={() =>
                    document
                      .querySelector(".MegaMenu")
                      .setAttribute("aria-hidden", "false")
                  }
                  onMouseLeave={() =>
                    document
                      .querySelector(".MegaMenu")
                      .setAttribute("aria-hidden", "true")
                  }
                >
                  <Link to="/products" className="Heading u-h6">
                  Products
                    <span className="Header__LinkSpacer">Products</span>
                  </Link>
                  <div className="MegaMenu" aria-hidden="true">
                    <div className="MegaMenu__Inner">
                      <div className="MegaMenu__Item MegaMenu__Item--fit menu_item-1">
                        <Link
                          to="collections/men.html"
                          className="MegaMenu__Title Heading Text--subdued u-h7"
                        >
                          MEN
                        </Link>
                        <ul className="Linklist inline">
                          <li className="Linklist__Item">
                            <Link
                              to="collections/men-boat-shoes.html"
                              className="Link Link--secondary"
                            >
                              Boat Shoes
                            </Link>
                          </li>
                          <li className="Linklist__Item">
                            <Link
                              to="collections/men-boots.html"
                              className="Link Link--secondary"
                            >
                              Boots
                            </Link>
                          </li>
                          <li className="Linklist__Item">
                            <Link
                              to="collections/men-brogue.html"
                              className="Link Link--secondary"
                            >
                              Brogues
                            </Link>
                          </li>
                          <li className="Linklist__Item">
                            <Link
                              to="collections/derby.html"
                              className="Link Link--secondary"
                            >
                              Derby
                            </Link>
                          </li>
                          <li className="Linklist__Item">
                            <Link
                              to="collections/esphadrilles.html"
                              className="Link Link--secondary"
                            >
                              Espadrilles
                            </Link>
                          </li>
                          <li className="Linklist__Item">
                            <Link
                              to="collections/men-flyknit.html"
                              className="Link Link--secondary"
                            >
                              Flyknit
                            </Link>
                          </li>
                          <li className="Linklist__Item">
                            <Link
                              to="collections/men-lace-up.html"
                              className="Link Link--secondary"
                            >
                              Lace Up
                            </Link>
                          </li>
                          <li className="Linklist__Item">
                            <Link
                              to="collections/men-loafers.html"
                              className="Link Link--secondary"
                            >
                              Loafers
                            </Link>
                          </li>
                        </ul>
                        <ul className="Linklist inline">
                          <li className="Linklist__Item">
                            <Link
                              to="collections/men-monk.html"
                              className="Link Link--secondary"
                            >
                              Monk
                            </Link>
                          </li>

                          <li className="Linklist__Item">
                            <Link
                              to="collections/men-oxford.html"
                              className="Link Link--secondary"
                            >
                              Oxford
                            </Link>
                          </li>

                          <li className="Linklist__Item">
                            <Link
                              to="collections/men-sandal.html"
                              className="Link Link--secondary"
                            >
                              Sandals
                            </Link>
                          </li>

                          <li className="Linklist__Item">
                            <Link
                              to="collections/men-slip-on.html"
                              className="Link Link--secondary"
                            >
                              Slip Ons
                            </Link>
                          </li>

                          <li className="Linklist__Item">
                            <Link
                              to="collections/men-slippers.html"
                              className="Link Link--secondary"
                            >
                              Slippers
                            </Link>
                          </li>

                          <li className="Linklist__Item">
                            <Link
                              to="collections/men-sneakers.html"
                              className="Link Link--secondary"
                            >
                              Sneakers
                            </Link>
                          </li>

                          <li className="Linklist__Item">
                            <Link
                              to="collections/men-tassel.html"
                              className="Link Link--secondary"
                            >
                              Tassels
                            </Link>
                          </li>

                          <li className="Linklist__Item">
                            <Link
                              to="collections/men.html"
                              className="Link Link--secondary"
                            >
                              Shop All{" "}
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="MegaMenu__Item MegaMenu__Item--fit menu_item-2">
                        <Link
                          to="collections/women.html"
                          className="MegaMenu__Title Heading Text--subdued u-h7"
                        >
                          WOMEN
                        </Link>
                        <ul className="Linklist">
                          <li className="Linklist__Item">
                            <Link
                              to="collections/women-boots.html"
                              className="Link Link--secondary"
                            >
                              Boots
                            </Link>
                          </li>
                          <li className="Linklist__Item">
                            <Link
                              to="collections/women.html"
                              className="Link Link--secondary"
                            >
                              Shop All
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="MegaMenu__Item MegaMenu__Item--fit menu_item-3">
                        <Link
                          to="#"
                          className="MegaMenu__Title Heading Text--subdued u-h7"
                        >
                          Categories
                        </Link>
                        <ul className="Linklist">
                          <li className="Linklist__Item">
                            <Link
                              to="collections/formal-shoes.html"
                              className="Link Link--secondary"
                            >
                              Formal Shoes
                            </Link>
                          </li>
                          <li className="Linklist__Item">
                            <Link
                              to="collections/casual-shoes.html"
                              className="Link Link--secondary"
                            >
                              Casual Shoes
                            </Link>
                          </li>
                          <li className="Linklist__Item">
                            <Link
                              to="collections/boots.html"
                              className="Link Link--secondary"
                            >
                              Boots
                            </Link>
                          </li>
                          <li className="Linklist__Item">
                            <Link
                              to="collections/sandal-slippers.html"
                              className="Link Link--secondary"
                            >
                              Sandal &amp; Slippers
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="MegaMenu__Item MegaMenu__Item--fit menu_item-4">
                        <Link
                          to="#"
                          className="MegaMenu__Title Heading Text--subdued u-h7"
                        >
                          Collection
                        </Link>
                        <ul className="Linklist">
                          <li className="Linklist__Item">
                            <Link
                              to="collections/exclusive-collection-1.html"
                              className="Link Link--secondary"
                            >
                              Exclusive Collection
                            </Link>
                          </li>
                          <li className="Linklist__Item">
                            <Link
                              to="collections/flyknit-collection.html"
                              className="Link Link--secondary"
                            >
                              Flyknit Collection
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="MegaMenu__Item"
                        style={{ width: "660px", minWidth: "425px" }}
                      >
                        <div className="MegaMenu__Push MegaMenu__Push--shrink">
                          <Link
                            className="MegaMenu__PushLink"
                            to="collections/men.html"
                          >
                            <div
                              className="MegaMenu__PushImageWrapper AspectRatio"
                              style={{
                                background: `url(${img1})`,
                                maxWidth: `239px`,
                                ["--aspect-ratio"]: "0.8505338078291815",
                              }}
                            >
                              <img
                                className="Image--lazyLoad Image--fadeIn"
                                src={img1}
                                alt=""
                              />

                              <span className="Image__Loader"></span>
                            </div>
                          </Link>
                        </div>
                        <div className="MegaMenu__Push MegaMenu__Push--shrink">
                          <Link
                            className="MegaMenu__PushLink"
                            to="collections/women.html"
                          >
                            <div
                              className="MegaMenu__PushImageWrapper AspectRatio"
                              style={{
                                background: `url(${img2})`,
                                maxWidth: "239px",
                                ["--aspect-ratio"]: "0.8505338078291815",
                              }}
                            >
                              <img
                                className="Image--lazyLoad Image--fadeIn"
                                src={img2}
                                alt=""
                              />
                              <span className="Image__Loader"></span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="HorizontalList__Item "
                  aria-haspopup="true"
                  onMouseEnter={() =>
                    document
                      .querySelector(".DropdownMenu")
                      .setAttribute("aria-hidden", "false")
                  }
                  onMouseLeave={() =>
                    document
                      .querySelector(".DropdownMenu")
                      .setAttribute("aria-hidden", "true")
                  }
                >
                  <Link to="collections/offers.html" className="Heading u-h6">
                    Offers
                  </Link>
                  <div className="DropdownMenu" aria-hidden="true">
                    <ul className="Linklist">
                      <li className="Linklist__Item">
                        <Link
                          to="collections/offers-inr-1699.html"
                          className="Link Link--secondary"
                        >
                          Flat @ INR 1699{" "}
                        </Link>
                      </li>
                      <li className="Linklist__Item">
                        <Link
                          to="collections/flat-inr-1899.html"
                          className="Link Link--secondary"
                        >
                          Flat @ INR 1899{" "}
                        </Link>
                      </li>
                      <li className="Linklist__Item">
                        <Link
                          to="collections/flat-2199.html"
                          className="Link Link--secondary"
                        >
                          Flat @ INR 2199{" "}
                        </Link>
                      </li>
                      <li className="Linklist__Item">
                        <Link
                          to="collections/flat-inr-2399.html"
                          className="Link Link--secondary"
                        >
                          Flat @ INR 2399{" "}
                        </Link>
                      </li>
                      <li className="Linklist__Item">
                        <Link
                          to="collections/steal-a-deal.html"
                          className="Link Link--secondary"
                        >
                          Steal a Deal{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div className="Header__FlexItem Header__FlexItem--logo">
            <h1 className="Header__Logo">
              <Link to="index.html" className="Header__LogoLink">
                <img
                  className="Header__LogoImage Header__LogoImage--primary"
                  src={logo_black}
                  width="145"
                  alt="Alberto Torresi"
                />
              </Link>
            </h1>
          </div>

          <div className="Header__FlexItem Header__FlexItem--fill">
            <Link
              to="/"
              className="Header__Icon Icon-Wrapper Icon-Wrapper--clickable hidden-phone"
              onClick={()=>document.querySelector("#login").dataset.hidden = "false"}
            >
              <svg
                className="Icon Icon--account"
                role="presentation"
                viewBox="0 0 20 20"
              >
                <g
                  transform="translate(1 1)"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="square"
                >
                  <path d="M0 18c0-4.5188182 3.663-8.18181818 8.18181818-8.18181818h1.63636364C14.337 9.81818182 18 13.4811818 18 18"></path>
                  <circle cx="9" cy="4.90909091" r="4.90909091"></circle>
                </g>
              </svg>
            </Link>

            <Link
              to="pages/store-locator.html"
              className="Header__Icon Icon-Wrapper Icon-Wrapper--clickable "
              aria-label="Search"
            >
              <span className="locator">
                <img src={img3} width={35} />
              </span>
            </Link>

            <Link
              to="search.html"
              className="Header__Icon Icon-Wrapper Icon-Wrapper--clickable "
              data-action="toggle-search"
              aria-label="Search"
            >
              <span className="hidden-tablet-and-up">
                <svg
                  className="Icon Icon--search"
                  role="presentation"
                  viewBox="0 0 18 17"
                >
                  <g
                    transform="translate(1 1)"
                    stroke="currentColor"
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="square"
                  >
                    <path d="M16 16l-5.0752-5.0752"></path>
                    <circle cx="6.4" cy="6.4" r="6.4"></circle>
                  </g>
                </svg>
              </span>
              <span className="hidden-phone">
                <svg
                  className="Icon Icon--search-desktop"
                  role="presentation"
                  viewBox="0 0 21 21"
                >
                  <g
                    transform="translate(1 1)"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="square"
                  >
                    <path d="M18 18l-5.7096-5.7096"></path>
                    <circle cx="7.2" cy="7.2" r="7.2"></circle>
                  </g>
                </svg>
              </span>
            </Link>

            <Link
              to="cart.html"
              className="Header__Icon Icon-Wrapper Icon-Wrapper--clickable "
              data-action="open-drawer"
              data-drawer-id="sidebar-cart"
              aria-expanded="false"
              aria-label="Open cart"
            >
              <span className="hidden-tablet-and-up">
                <svg
                  className="Icon Icon--cart"
                  role="presentation"
                  viewBox="0 0 17 20"
                >
                  <path
                    d="M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <span className="hidden-phone">
                <svg
                  className="Icon Icon--cart-desktop"
                  role="presentation"
                  viewBox="0 0 19 23"
                >
                  <path
                    d="M0 22.985V5.995L2 6v.03l17-.014v16.968H0zm17-15H2v13h15v-13zm-5-2.882c0-2.04-.493-3.203-2.5-3.203-2 0-2.5 1.164-2.5 3.203v.912H5V4.647C5 1.19 7.274 0 9.5 0 11.517 0 14 1.354 14 4.647v1.368h-2v-.912z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <span className="Header__CartDot "></span>
            </Link>
          </div>
        </div>
      </header>
      <section
        id="sidebar-menu"
        className="SidebarMenu Drawer Drawer--small Drawer--fromLeft"
        aria-hidden="true"
        data-section-id="sidebar-menu"
        data-section-type="sidebar-menu"
      >
        <header className="Drawer__Header" data-drawer-animated-left>
          <button
            className="Drawer__Close Icon-Wrapper--clickable"
            data-action="close-drawer"
            data-drawer-id="sidebar-menu"
            aria-label="Close navigation"
            onClick={()=>this.toggleHidden("sidebar-menu","hidden")}
          >
            <svg
              className="Icon Icon--close"
              role="presentation"
              viewBox="0 0 16 14"
            >
              <path
                d="M15 0L1 14m14 0L1 0"
                stroke="currentColor"
                fill="none"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </header>

        <div className="Drawer__Content">
          <div className="Drawer__Main" data-drawer-animated-left data-scrollable>
            <div className="Drawer__Container">
              <nav
                className="SidebarMenu__Nav SidebarMenu__Nav--primary"
                aria-label="Sidebar navigation"
              >
                <div className="Collapsible">
                  <Link
                    to="collections/new-arrivals.html"
                    className="Collapsible__Button Heading Link Link--primary u-h6"
                  >
                    New Arrivals
                  </Link>
                </div>
                <div className="Collapsible">
                  <Link
                    to="collections/bestsellers.html"
                    className="Collapsible__Button Heading Link Link--primary u-h6"
                  >
                    Best Sellers
                  </Link>
                </div>
                <div className="Collapsible">
                  <button
                    className="Collapsible__Button Heading u-h6"
                    data-action="toggle-collapsible"
                    aria-expanded="false"
                    id="btn1"
                    data-id="menu1"
                    onClick={this.handleDropdown}
                  >
                    COLLECTION<span className="Collapsible__Plus"></span>
                  </button>

                  <div className="Collapsible__Inner" ref="menu1">
                    <div className="Collapsible__Content">
                      <div className="Collapsible">
                        <button
                          className="Collapsible__Button Heading Text--subdued Link--primary u-h7"
                          data-action="toggle-collapsible"
                          aria-expanded="false"
                          onClick={this.handleDropdown}
                          id="btn2"
                          data-id="menu2"
                        >
                          MEN<span className="Collapsible__Plus"></span>
                        </button>

                        <div className="Collapsible__Inner" ref="menu2">
                          <div className="Collapsible__Content">
                            <ul className="Linklist Linklist--bordered Linklist--spacingLoose">
                              <li className="Linklist__Item">
                                <Link
                                  to="collections/men-boat-shoes.html"
                                  className="Text--subdued Link Link--primary"
                                >
                                  Boat Shoes
                                </Link>
                              </li>
                              <li className="Linklist__Item">
                                <Link
                                  to="collections/men-boots.html"
                                  className="Text--subdued Link Link--primary"
                                >
                                  Boots
                                </Link>
                              </li>
                              <li className="Linklist__Item">
                                <Link
                                  to="collections/men-brogue.html"
                                  className="Text--subdued Link Link--primary"
                                >
                                  Brogues
                                </Link>
                              </li>
                              <li className="Linklist__Item">
                                <Link
                                  to="collections/derby.html"
                                  className="Text--subdued Link Link--primary"
                                >
                                  Derby
                                </Link>
                              </li>
                              <li className="Linklist__Item">
                                <Link
                                  to="collections/esphadrilles.html"
                                  className="Text--subdued Link Link--primary"
                                >
                                  Espadrilles
                                </Link>
                              </li>
                              <li className="Linklist__Item">
                                <Link
                                  to="collections/men-flyknit.html"
                                  className="Text--subdued Link Link--primary"
                                >
                                  Flyknit
                                </Link>
                              </li>
                              <li className="Linklist__Item">
                                <Link
                                  to="collections/men-lace-up.html"
                                  className="Text--subdued Link Link--primary"
                                >
                                  Lace Up
                                </Link>
                              </li>
                              <li className="Linklist__Item">
                                <Link
                                  to="collections/men-loafers.html"
                                  className="Text--subdued Link Link--primary"
                                >
                                  Loafers
                                </Link>
                              </li>
                              <li className="Linklist__Item">
                                <Link
                                  to="collections/men-monk.html"
                                  className="Text--subdued Link Link--primary"
                                >
                                  Monk
                                </Link>
                              </li>
                              <li className="Linklist__Item">
                                <Link
                                  to="collections/men-oxford.html"
                                  className="Text--subdued Link Link--primary"
                                >
                                  Oxford
                                </Link>
                              </li>
                              <li className="Linklist__Item">
                                <Link
                                  to="collections/men-sandal.html"
                                  className="Text--subdued Link Link--primary"
                                >
                                  Sandals
                                </Link>
                              </li>
                              <li className="Linklist__Item">
                                <Link
                                  to="collections/men-slip-on.html"
                                  className="Text--subdued Link Link--primary"
                                >
                                  Slip Ons
                                </Link>
                              </li>
                              <li className="Linklist__Item">
                                <Link
                                  to="collections/men-slippers.html"
                                  className="Text--subdued Link Link--primary"
                                >
                                  Slippers
                                </Link>
                              </li>
                              <li className="Linklist__Item">
                                <Link
                                  to="collections/men-sneakers.html"
                                  className="Text--subdued Link Link--primary"
                                >
                                  Sneakers
                                </Link>
                              </li>
                              <li className="Linklist__Item">
                                <Link
                                  to="collections/men-tassel.html"
                                  className="Text--subdued Link Link--primary"
                                >
                                  Tassels
                                </Link>
                              </li>
                              <li className="Linklist__Item">
                                <Link
                                  to="collections/men.html"
                                  className="Text--subdued Link Link--primary"
                                >
                                  Shop All{" "}
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="Collapsible">
                        <button
                          className="Collapsible__Button Heading Text--subdued Link--primary u-h7"
                          data-action="toggle-collapsible"
                          aria-expanded="false"
                          onClick={this.handleDropdown}
                          id="btn3"
                          data-id="menu3"
                        >
                          WOMEN<span className="Collapsible__Plus"></span>
                        </button>

                        <div className="Collapsible__Inner" ref="menu3" >
                          <div className="Collapsible__Content">
                            <ul className="Linklist Linklist--bordered Linklist--spacingLoose">
                              <li className="Linklist__Item">
                                <Link
                                  to="collections/women-boots.html"
                                  className="Text--subdued Link Link--primary"
                                >
                                  Boots
                                </Link>
                              </li>
                              <li className="Linklist__Item">
                                <Link
                                  to="collections/women.html"
                                  className="Text--subdued Link Link--primary"
                                >
                                  Shop All
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="Collapsible">
                        <button
                          className="Collapsible__Button Heading Text--subdued Link--primary u-h7"
                          data-action="toggle-collapsible"
                          aria-expanded="false"
                          onClick={this.handleDropdown}
                          id="btn4"
                          data-id="menu4"
                        >
                          Categories<span className="Collapsible__Plus"></span>
                        </button>

                        <div className="Collapsible__Inner" ref="menu4">
                          <div className="Collapsible__Content">
                            <ul className="Linklist Linklist--bordered Linklist--spacingLoose">
                              <li className="Linklist__Item">
                                <Link
                                  to="collections/formal-shoes.html"
                                  className="Text--subdued Link Link--primary"
                                >
                                  Formal Shoes
                                </Link>
                              </li>
                              <li className="Linklist__Item">
                                <Link
                                  to="collections/casual-shoes.html"
                                  className="Text--subdued Link Link--primary"
                                >
                                  Casual Shoes
                                </Link>
                              </li>
                              <li className="Linklist__Item">
                                <Link
                                  to="collections/boots.html"
                                  className="Text--subdued Link Link--primary"
                                >
                                  Boots
                                </Link>
                              </li>
                              <li className="Linklist__Item">
                                <Link
                                  to="collections/sandal-slippers.html"
                                  className="Text--subdued Link Link--primary"
                                >
                                  Sandal &amp; Slippers
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="Collapsible">
                        <button
                          className="Collapsible__Button Heading Text--subdued Link--primary u-h7"
                          data-action="toggle-collapsible"
                          aria-expanded="false"
                          onClick={this.handleDropdown}
                          id="btn5"
                          data-id="menu5"
                        >
                          Collection<span className="Collapsible__Plus"></span>
                        </button>

                        <div className="Collapsible__Inner" ref="menu5">
                          <div className="Collapsible__Content">
                            <ul className="Linklist Linklist--bordered Linklist--spacingLoose">
                              <li className="Linklist__Item">
                                <Link
                                  to="collections/exclusive-collection-1.html"
                                  className="Text--subdued Link Link--primary"
                                >
                                  Exclusive Collection
                                </Link>
                              </li>
                              <li className="Linklist__Item">
                                <Link
                                  to="collections/flyknit-collection.html"
                                  className="Text--subdued Link Link--primary"
                                >
                                  Flyknit Collection
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Collapsible">
                  <button
                    className="Collapsible__Button Heading u-h6"
                    data-action="toggle-collapsible"
                    aria-expanded="false"
                    onClick={this.handleDropdown}
                    id="btn6"
                    data-id="menu6"
                  >
                    Offers<span className="Collapsible__Plus"></span>
                  </button>
                  <div className="Collapsible__Inner" ref="menu6">
                    <div className="Collapsible__Content">
                      <div className="Collapsible">
                        <Link
                          to="collections/offers-inr-1699.html"
                          className="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          Flat @ INR 1699
                        </Link>
                      </div>
                      <div className="Collapsible">
                        <Link
                          to="collections/flat-inr-1899.html"
                          className="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          Flat @ INR 1899
                        </Link>
                      </div>
                      <div className="Collapsible">
                        <Link
                          to="collections/flat-2199.html"
                          className="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          Flat @ INR 2199
                        </Link>
                      </div>
                      <div className="Collapsible">
                        <Link
                          to="collections/flat-inr-2399.html"
                          className="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          Flat @ INR 2399
                        </Link>
                      </div>
                      <div className="Collapsible">
                        <Link
                          to="collections/steal-a-deal.html"
                          className="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          Steal a Deal{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
              <nav
                className="SidebarMenu__Nav SidebarMenu__Nav--secondary"
                style={{display :"none"}}
              >
                <ul className="Linklist Linklist--spacingLoose">
                  <li className="Linklist__Item">
                    <Link
                      to="account/login.html"
                      className="Text--subdued Link Link--primary"
                    >
                      Account
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <aside className="Drawer__Footer" data-drawer-animated-bottom>
            <ul className="SidebarMenu__Social HorizontalList HorizontalList--spacingFill">
              <li className="HorizontalList__Item">
                <Link
                  to="https://www.facebook.com/AlbertoTorresiShoes"
                  className="Link Link--primary"
                  target="_blank"
                  rel="noopener"
                  aria-label="Facebook"
                >
                  <span className="Icon-Wrapper--clickable">
                    <svg className="Icon Icon--facebook" viewBox="0 0 9 17">
                      <path d="M5.842 17V9.246h2.653l.398-3.023h-3.05v-1.93c0-.874.246-1.47 1.526-1.47H9V.118C8.718.082 7.75 0 6.623 0 4.27 0 2.66 1.408 2.66 3.994v2.23H0v3.022h2.66V17h3.182z"></path>
                    </svg>
                  </span>
                </Link>
              </li>

              <li className="HorizontalList__Item">
                <Link
                  to="https://twitter.com/AlbertoTorresiS"
                  className="Link Link--primary"
                  target="_blank"
                  rel="noopener"
                  aria-label="Twitter"
                >
                  <span className="Icon-Wrapper--clickable">
                    <svg
                      className="Icon Icon--twitter"
                      role="presentation"
                      viewBox="0 0 32 26"
                    >
                      <path d="M32 3.077c-1.1748.525-2.4433.8748-3.768 1.031 1.356-.8123 2.3932-2.0995 2.887-3.6305-1.2686.7498-2.6746 1.2997-4.168 1.5934C25.751.796 24.045.0025 22.158.0025c-3.6242 0-6.561 2.937-6.561 6.5612 0 .5124.0562 1.0123.1686 1.4935C10.3104 7.7822 5.474 5.1702 2.237 1.196c-.5624.9687-.8873 2.0997-.8873 3.2994 0 2.2746 1.156 4.2867 2.9182 5.4615-1.075-.0314-2.0872-.3313-2.9745-.8187v.0812c0 3.1806 2.262 5.8363 5.2677 6.4362-.55.15-1.131.2312-1.731.2312-.4248 0-.831-.0438-1.2372-.1188.8374 2.6057 3.262 4.5054 6.13 4.5616-2.2495 1.7622-5.074 2.812-8.1546 2.812-.531 0-1.0498-.0313-1.5684-.0938 2.912 1.8684 6.3613 2.9494 10.0668 2.9494 12.0726 0 18.6776-10.0043 18.6776-18.6776 0-.2874-.0063-.5686-.0188-.8498C30.0066 5.5514 31.119 4.3954 32 3.077z"></path>
                    </svg>
                  </span>
                </Link>
              </li>

              <li className="HorizontalList__Item">
                <Link
                  to="https://www.instagram.com/albertotorresi"
                  className="Link Link--primary"
                  target="_blank"
                  rel="noopener"
                  aria-label="Instagram"
                >
                  <span className="Icon-Wrapper--clickable">
                    <svg
                      className="Icon Icon--instagram"
                      role="presentation"
                      viewBox="0 0 32 32"
                    >
                      <path d="M15.994 2.886c4.273 0 4.775.019 6.464.095 1.562.07 2.406.33 2.971.552.749.292 1.283.635 1.841 1.194s.908 1.092 1.194 1.841c.216.565.483 1.41.552 2.971.076 1.689.095 2.19.095 6.464s-.019 4.775-.095 6.464c-.07 1.562-.33 2.406-.552 2.971-.292.749-.635 1.283-1.194 1.841s-1.092.908-1.841 1.194c-.565.216-1.41.483-2.971.552-1.689.076-2.19.095-6.464.095s-4.775-.019-6.464-.095c-1.562-.07-2.406-.33-2.971-.552-.749-.292-1.283-.635-1.841-1.194s-.908-1.092-1.194-1.841c-.216-.565-.483-1.41-.552-2.971-.076-1.689-.095-2.19-.095-6.464s.019-4.775.095-6.464c.07-1.562.33-2.406.552-2.971.292-.749.635-1.283 1.194-1.841s1.092-.908 1.841-1.194c.565-.216 1.41-.483 2.971-.552 1.689-.083 2.19-.095 6.464-.095zm0-2.883c-4.343 0-4.889.019-6.597.095-1.702.076-2.864.349-3.879.743-1.054.406-1.943.959-2.832 1.848S1.251 4.473.838 5.521C.444 6.537.171 7.699.095 9.407.019 11.109 0 11.655 0 15.997s.019 4.889.095 6.597c.076 1.702.349 2.864.743 3.886.406 1.054.959 1.943 1.848 2.832s1.784 1.435 2.832 1.848c1.016.394 2.178.667 3.886.743s2.248.095 6.597.095 4.889-.019 6.597-.095c1.702-.076 2.864-.349 3.886-.743 1.054-.406 1.943-.959 2.832-1.848s1.435-1.784 1.848-2.832c.394-1.016.667-2.178.743-3.886s.095-2.248.095-6.597-.019-4.889-.095-6.597c-.076-1.702-.349-2.864-.743-3.886-.406-1.054-.959-1.943-1.848-2.832S27.532 1.247 26.484.834C25.468.44 24.306.167 22.598.091c-1.714-.07-2.26-.089-6.603-.089zm0 7.778c-4.533 0-8.216 3.676-8.216 8.216s3.683 8.216 8.216 8.216 8.216-3.683 8.216-8.216-3.683-8.216-8.216-8.216zm0 13.549c-2.946 0-5.333-2.387-5.333-5.333s2.387-5.333 5.333-5.333 5.333 2.387 5.333 5.333-2.387 5.333-5.333 5.333zM26.451 7.457c0 1.059-.858 1.917-1.917 1.917s-1.917-.858-1.917-1.917c0-1.059.858-1.917 1.917-1.917s1.917.858 1.917 1.917z"></path>
                    </svg>
                  </span>
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </div>
    );
  }
}

export default Header;
