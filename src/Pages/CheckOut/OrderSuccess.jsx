import React, { useContext, useState } from "react";
import { Context } from "../../Context/Context";
import { Link } from "react-router-dom";

import userImg1 from "../CheckOut/CheckOutImg/user-2.jpg";
import userImg2 from "../CheckOut/CheckOutImg/user-1.jpg";
import moneyBack from "../CheckOut/CheckOutImg/money-back.jpg";

import "../CheckOut/CheckOut";
import { useEffect } from "react";
import AuthContext from "../../Context/AuthContext";

const OrderSuccess = () => {
  const { auth } = useContext(AuthContext);
  const { fullname, email, createAt } = auth.user;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {
    cartItem,
    cartSubTotal,
    totalItem,
    cartTotal,
    shippingFee,
    onSubmitOrder,
  } = useContext(Context);
  const cartEmpty = totalItem === 0;

  return (
    <div>
      {" "}
      <div
        className="d-flex align-items-center justify-content-center bg-dark-subtle"
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
      >
        <div className="container bg-white p-5">
          <div className="row">
            {/* <div className="d-flex pb-3">
      <div>
        <Link to="/" className="nav-link active">
          Home&nbsp;
        </Link>
      </div>
      <div>/ Checkout</div>
    </div> */}

            {/* ps-5 bg-body p-4 w-100  flex-column */}
            <div className="d-flex align-items-center justify-content-center">
              <div className="d-flex">
                {/*  bg-primary position-relative*/}

                <div className="d-flex justify-content-center flex-column">
                  {/* className=" me-4 pe-3 position-relative" */}
                  {/* <div > */}

                  <div className="container" style={{ width: "45rem" }}>
                    <h1 className="text-capitalize"></h1>
                    <div className="mb-3">
                      <div className="card mt-4">
                        <div className="card-header fs-3 fw-semibold">
                          Order Infomation
                        </div>
                        <div className="card-body d-flex">
                          <img
                            className="rounded-circle"
                            style={{ width: 100, height: 100 }}
                            src={userImg1}
                          ></img>
                          <div className="ms-3 w-100">
                            <div className="d-flex justify-content-between p-2">
                              <p className="ms-1 card-text fs-5 text-capitalize">
                                Name: {fullname}
                              </p>
                            </div>
                            <div className="d-flex justify-content-between p-2">
                              <p className="ms-1 card-text fs-5">
                                Phone Number: +84968134426
                              </p>
                            </div>
                            <div className="d-flex justify-content-between p-2">
                              <p className="ms-1 card-text fs-5">
                                Shipping Adress: Housing Building - 122st, NYC,
                                USA
                              </p>
                            </div>
                            <div className="d-flex justify-content-between p-2">
                              <p className="ms-1 card-text fs-5">
                                Email: {email}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="container">Your Invoice </h2>
                  <div className="d-flex container justify-content-between">
                    <div className="fs-5 fst-italic">Order #123</div>
                    <div className="fs-5 fst-italic">Date: 12/3/2023</div>
                  </div>
                  {/* (                bg-primary */}
                  <div className=" container mt-4 w-100">
                    {/* className="border border-dark-subtle rounded" */}
                    <div className="position-relative">
                      {/* bg-primary */}
                      {/* cartEmpty */}
                      {cartEmpty ? (
                        <div>
                          <div className="d-flex justify-content-start mt-3 mb-3">
                            Your order is currently empty. Come and see our
                            products...
                          </div>
                          <div>
                            <Link
                              to="/all-products"
                              className="nav-link active"
                            >
                              <button className="btn btn-dark mt-3">
                                {" "}
                                Return to shop
                              </button>
                            </Link>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="position-relative col-12  border border-dark-subtle rounded">
                            <div className="row p-2 pt-3 pb-3">
                              <div className="col fs-6 ">Product</div>
                              <div className="col-2 fs-6 d-flex justify-content-end">
                                Subtotal
                              </div>
                            </div>
                            {/* style={{backgroundColor: "red"}} */}

                            <div className="w-100">
                              {cartItem.map((item) => {
                                return (
                                  <div
                                    key={item.product.id}
                                    // border-top bg-success row  border rounded border-secondary-subtle
                                    className="d-flex border-top p-2"
                                  >
                                    <div className="col text-start d-flex align-items-center">
                                      <img
                                        style={{ width: 80 }}
                                        className="ms-1"
                                        src={item.product.img}
                                      ></img>
                                      <div className="ms-4">
                                        {item.product.name}
                                      </div>
                                    </div>

                                    <div className="col-2 d-flex align-items-center">
                                      <div
                                        className="p-3"
                                        key={item.product.id}
                                      >
                                        x{item.amount}
                                      </div>
                                    </div>
                                    <div className="col-2 d-flex align-items-center justify-content-end me-1">
                                      ${item.amount * item.product.price}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>

                            {/* border-top border-bottom */}

                            <div className="d-flex border-top border-bottom p-2 pt-3 pb-3">
                              <div className="col fs-6">SubTotal</div>
                              <div className="col-2 d-flex justify-content-end me-1 fs-6">
                                ${cartSubTotal}
                              </div>
                            </div>

                            {/*border-bottom  */}
                            <div className="d-flex border-bottom p-2 pt-3 pb-3">
                              <div className="col fs-6">Shipping</div>
                              <div className="col-2 d-flex justify-content-end me-1 fs-6">
                                ${shippingFee}
                              </div>
                            </div>
                            <div className="d-flex p-2 pt-3 pb-3">
                              <div className="col fw-semibold fs-5">Total</div>
                              <div className="col-2 d-flex justify-content-end me-1 fs-5 fw-semibold">
                                ${cartTotal}
                              </div>
                            </div>
                          </div>
                          <div>
                            <Link
                              to="/all-products"
                              className="nav-link active"
                            >
                              <button className="btn btn-dark mt-3">
                                {" "}
                                Return to shop
                              </button>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
