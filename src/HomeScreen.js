import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "././Pages/Homepage/home.css";
import "./App.css";
import Login from "./Pages/loginpage/Loginpage";
import "./form_chat.css";
// import HomePage from "./Pages/Homepage/Homepage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faLifeRing,
  faShieldHalved,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { Fragment, useContext, useState } from "react";
import { Badge, Dropdown } from "react-bootstrap";
import { FaBars, FaShoppingBag, FaTrash } from "react-icons/fa";
import AuthContext from "./Context/AuthContext";
import { Context } from "./Context/Context";
import Aboutusmenu from "./Pages/AboutUs/Aboutusmenu";
import AllProducts from "./Pages/AllProducts/AllProducts";
import DecorationCategory from "./Pages/AllProducts/DecorationCategory";
import FramePosterCategory from "./Pages/AllProducts/FramePosterCategory";
import FurnitureCategory from "./Pages/AllProducts/FurnitureCategory";
import CheckOut from "./Pages/CheckOut/CheckOut";
import OrderSuccess from "./Pages/CheckOut/OrderSuccess";
import Contactus from "./Pages/Contact/Contactus";
import Footer from "./Pages/Footer/Footer";
import HomePage from "./Pages/Homepage/Homepage";
import imglogin from "./Pages/Homepage/modeNiture.png";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import UserProfile from "./Pages/UserProfile/UserProfile";
import YourCart from "./Pages/YourCart/YourCart";
import Loginstatus from "./Pages/loginpage/Loginstatus";
import Register from "./Pages/loginpage/Register";
import ScrollButton from "./ScrollButton/ScrollButton";
import CheckOut_Privated from "./Pages/CheckOut/CheckOut_Privated";
library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faShieldHalved,
  faTruckFast,
  faLifeRing
);
const HomeScreen = () => {
  const { cartItem, removeFromCart, totalItem, toggleClass } =
    useContext(Context);
  const cartEmpty = totalItem === 0;
  const {
    auth: { isAuthenticate },
  } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);
  const [showsubMenu, setShowsubMenu] = useState(false);
  const handleClose = () => setShowMenu(!showMenu);
  const handleShow = () => setShowMenu(true);
  const handleShowSub = () => setShowsubMenu((current) => !current);
  console.log(showsubMenu);
  return (
    <div>
      {" "}
      <Fragment>
        <div className="container">
          {/* Normal Menu */}
          <nav className="navbar-menu fixed-top bg-body pt-3 pb-3">
            <div className=" container d-flex justify-content-between align-items-center ">
              <Link to="/" className="navbar-brand">
                <img className="logo" src={imglogin}></img>
              </Link>
              <ul
                style={{ flexDirection: "row" }}
                className="navbar-nav d-flex align-items-center"
                id="nav-bar-laptop"
              >
                <li className="nav-item me-4">
                  <Link to="/" className="nav-link" aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <Link to="/about-us" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <Link to="/all-products" className="nav-link">
                    All Products
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <Link to="/contact" className="nav-link">
                    Our Team
                  </Link>
                </li>
                <li className="nav-item me-2">
                  <Link to="/cart" className="nav-link">
                    Your Cart
                  </Link>
                </li>
                <li className="nav-item me-1">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="Dark"
                      className="position-relative"
                    >
                      <FaShoppingBag
                        className="me-1"
                        fontSize="25px"
                      ></FaShoppingBag>
                      <Badge className="position-absolute top-0 start-75 translate-middle badge rounded-pill bg-dark mt-1">
                        {totalItem}
                      </Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      className="bg-dark mt-2"
                      style={{ minWidth: 400 }}
                    >
                      <span>
                        {cartEmpty ? (
                          <div className="d-flex justify-content-center text-light">
                            Your Cart Is Currently Empty.
                          </div>
                        ) : (
                          <div className="d-flex flex-column">
                            {cartItem.map((item) => (
                              <div
                                key={item.product.id}
                                className="p-2 d-flex flex-row align-items-center justify-content-start"
                              >
                                {
                                  <img
                                    className="ms-3 rounded-circle me-3"
                                    style={{ width: 60 }}
                                    src={item.product.img}
                                  ></img>
                                }
                                <div className="w-75">
                                  <div className="fw-bold text-light">
                                    {item.product.name} &nbsp;
                                  </div>
                                  <div className="text-light">
                                    {item.amount} x&nbsp; ${item.product.price}
                                    .00
                                  </div>
                                </div>
                                <FaTrash
                                  type="button"
                                  onClick={() =>
                                    removeFromCart(item.product.id)
                                  }
                                  className="me-4 text-light"
                                />
                              </div>
                            ))}
                            <Link to="/cart" className="nav-link">
                              <div className="d-flex justify-content-center">
                                <button
                                  style={{ minWidth: 350 }}
                                  className="btn btn-light p-2 mb-2 mt-3"
                                >
                                  Go To Cart{" "}
                                </button>
                              </div>
                            </Link>
                          </div>
                        )}
                      </span>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="nav-item ms-2">
                  <Loginstatus />
                </li>
              </ul>
            </div>
          </nav>
          {/* Resposive Menu */}
          <div className="res-menu fixed-top bg-body pt-3 pb-3 pe-4 ps-4 pe-sm-5 ps-sm-5">
            {!showMenu && (
              <div className="d-flex justify-content-between align-items-center ">
                <Link to="/" className="navbar-brand-res">
                  <img className="logo" src={imglogin}></img>
                </Link>
                <div className="sologan text-capitalize me-3 ms-3">
                  We are more than just furniture
                </div>
                <FaBars className="fs-2" onClick={handleShow} />
              </div>
            )}

            {showMenu && (
              <div>
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                    Modeniture
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleClose}
                  ></button>
                </div>

                <div className="offcanvas-body">
                  <div>
                    <ul id="nav-bar-res">
                      <li className="nav-item">
                        <Link
                          to="/"
                          onClick={toggleClass}
                          className="nav-link"
                          aria-current="page"
                        >
                          Home
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/all-products" className="nav-link">
                          All Products
                        </Link>
                      </li>
                      <li className="nav-item">
                        <div className="nav-link">
                          <div className="dropdown">
                            <button
                              id="categories"
                              className="dropdown-toggle bg-body border-top-0 border-end-0 border-start-0"
                              type="button"
                              onClick={handleShowSub}
                            >
                              Our Categories
                            </button>
                            {showsubMenu && (
                              <div
                                className="dropdown-submenu"
                                style={{
                                  background: "rgba(255,255,255,.3)",
                                  transition: "all 2s",
                                }}
                              >
                                <div className="ms-3 me-3 border-bottom">
                                  <Link
                                    to="/all-products/furniture"
                                    className="dropdown-item p-3"
                                  >
                                    Furniture
                                  </Link>
                                </div>
                                <div className="ms-3 me-3 border-bottom">
                                  <Link
                                    to="/all-products/decoration"
                                    className="dropdown-item p-3"
                                  >
                                    Decoration
                                  </Link>
                                </div>
                                <div className="ms-3 me-3 border-bottom">
                                  <Link
                                    to="/all-products/frame&poster"
                                    className="dropdown-item p-3"
                                  >
                                    Posters
                                  </Link>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </li>
                      <li className="nav-item">
                        <Link to="/about-us" className="nav-link">
                          About Us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/contact" className="nav-link">
                          Our Team
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/cart" className="nav-link">
                          Your Cart
                        </Link>
                      </li>

                      <div
                        id="res-cart-login-item"
                        className="nav-item mt-3 d-flex justify-content-between pe-3 ps-3"
                      >
                        <li className="nav-item">
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="Dark"
                              className="position-relative"
                            >
                              <FaShoppingBag
                                className="me-1"
                                fontSize="25px"
                              ></FaShoppingBag>
                              <Badge className="position-absolute top-0 start-75 translate-middle badge rounded-pill bg-dark mt-1">
                                {totalItem}
                              </Badge>
                            </Dropdown.Toggle>
                            <Dropdown.Menu
                              className="bg-dark"
                              style={{ Width: 340 }}
                            >
                              <span>
                                {cartEmpty ? (
                                  <div className="d-flex justify-content-center text-light">
                                    Your Cart Is Currently Empty.
                                  </div>
                                ) : (
                                  <div className="d-flex flex-column">
                                    {cartItem.map((item) => (
                                      <div
                                        key={item.product.id}
                                        className="item-cart-name d-flex flex-row align-items-center justify-content-start"
                                      >
                                        {
                                          <img
                                            className="ms-3 rounded-circle me-3"
                                            style={{ width: 60 }}
                                            src={item.product.img}
                                          ></img>
                                        }
                                        <div className="w-75">
                                          <div className="fw-bold text-light">
                                            {item.product.name} &nbsp;
                                          </div>
                                          <div className="text-light">
                                            {item.amount} x&nbsp; $
                                            {item.product.price}
                                            .00
                                          </div>
                                        </div>
                                        <FaTrash
                                          type="button"
                                          onClick={() =>
                                            removeFromCart(item.product.id)
                                          }
                                          className="me-4 text-light"
                                        />
                                      </div>
                                    ))}
                                    <Link
                                      to="/cart"
                                      id="go-to-cart"
                                      className="nav-link"
                                    >
                                      <div className=" d-flex justify-content-center">
                                        <button className="cart-button btn btn-light p-2 mb-2 mt-3">
                                          Go To Cart{" "}
                                        </button>
                                      </div>
                                    </Link>
                                  </div>
                                )}
                              </span>
                            </Dropdown.Menu>
                          </Dropdown>
                        </li>
                        <Loginstatus />
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route
            path="/all-products/frame&poster"
            element={<FramePosterCategory />}
          />
          <Route
            path="/all-products/decoration"
            element={<DecorationCategory />}
          />
          <Route
            path="/all-products/furniture"
            element={<FurnitureCategory />}
          />
          <Route path="/about-us" element={<Aboutusmenu />} />
          <Route
            path="/profile"
            element={<PrivateRoute component={UserProfile} />}
          />

          <Route path="/contact" element={<Contactus />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<YourCart />} />
          <Route
            path="/checkout"
            element={!isAuthenticate ? <CheckOut /> : <CheckOut_Privated />}
          />

          <Route path="/orderplaced" element={<OrderSuccess />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
        <ScrollButton />
      </Fragment>
    </div>
  );
};

export default HomeScreen;
