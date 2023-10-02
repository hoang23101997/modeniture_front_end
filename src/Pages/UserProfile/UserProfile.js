import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
import "./userprofile.css";
import userImg1 from "../CheckOut/CheckOutImg/user-2.jpg";

import { useEffect } from "react";
import AuthContext from "../../Context/AuthContext";
import handleGetData from "../../apis/postAPI";
import "../CheckOut/CheckOut";

const UserProfile = () => {
  const { auth } = useContext(AuthContext);
  const { fullname, email, _id } = auth.user;
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    _id && getPaymentHistory();
  }, [_id]);

  const { totalItem } = useContext(Context);
  const cartEmpty = totalItem === 0;

  const getPaymentHistory = async () => {
    const API = `/payments?id=${_id}`;

    try {
      await handleGetData.handleData(API).then((res) => {
        console.log(res);
        if (res && res.status === 200 && res.data) {
          setPayments(res.data.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {" "}
      <div
        className="d-flex align-items-center justify-content-center bg-dark-subtle"
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
      >
        <div className="container bg-white p-sm-5 p-4">
          <div className="row">
            <div className="d-flex align-items-center justify-content-center">
              <div className="d-flex">
                <div className="d-flex justify-content-center flex-column">
                  <div className="">
                    <h1 className="text-capitalize">Your information</h1>
                    <div className="mb-3">
                      <div className="card mt-4">
                        <div className="card-header fs-3">Your Profile</div>
                        <div className="card-body d-flex justify-item-center p-4 p-md-3">
                          <img
                            className="rounded-circle"
                            style={{ width: 100, height: 100 }}
                            src={userImg1}
                          ></img>
                          <div className="user-name ms-sm-3 w-100">
                            <h5 className="card-title text-capitalize p-2">
                              {fullname}
                            </h5>
                            <p className="card-text text-secondary p-2">
                              “We have to spend money to get money. It is a
                              rule”
                            </p>
                            <div className="email-block d-flex flex-sm-column flex-md-row justify-content-between p-2">
                              <p className=" ms-md-1 card-text fs-5 fw-semibold">
                                Your email: {email}
                              </p>
                              <button className="ms-3 me-3 btn btn-dark">
                                Change Email
                              </button>
                            </div>
                            <div className="password-block d-flex flex-sm-column  flex-md-row justify-content-between p-2">
                              <p className="ms-md-1 card-text fs-5 fw-semibold text-danger">
                                Your Password: *******
                              </p>
                              <button className="ms-3 me-3 btn btn-danger">
                                Change Password
                              </button>
                            </div>
                            <div className="balance-block d-flex flex-sm-column flex-md-row justify-content-between p-2">
                              <p className="ms-md-1 card-text fs-5 fw-semibold text-success">
                                Your Balance: ****,**$
                              </p>
                              <button className="ms-3 me-3 btn btn-success">
                                Show
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="container pb-3 fs-1">Your History Order </h2>

                  <div className=" container p-0 w-100">
                    <div className="position-relative">
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
                          <div>
                            {payments.map((item) => {
                              function sumArray(mang) {
                                let sum = 0;
                                for (let i = 0; i < mang.length; i++) {
                                  sum += mang[i];
                                }
                                return sum;
                              }
                              let mang = item.data.map((i2) =>
                                i2.orders.map(
                                  (i3) => i3.product.price * i3.amount
                                )
                              );

                              console.log(item.data.map((i2) => i2.Fee));
                              return (
                                <div className="position-relative col-12  border border-dark-subtle rounded p-3 mb-3">
                                  <div className="d-flex justify-content-between flex-sm-row flex-column">
                                    <div className="fs-5 fst-italic">
                                      {" "}
                                      Order #{item._id.slice(0, 6)}
                                    </div>
                                    <div className="fs-5 fst-italic">
                                      Date: {item.createAt.slice(0, 10)}{" "}
                                    </div>
                                  </div>
                                  <div className="text-capitalize fs-5 fw-semibold">
                                    {" "}
                                    Username: {item.data[0].username}{" "}
                                  </div>

                                  <div className="d-flex flex-column">
                                    <div className="border-bottom p-2">
                                      Product:
                                      {item.data.map((i2) =>
                                        i2.orders.map(
                                          (i3) =>
                                            " " +
                                            i3.product.name +
                                            " x" +
                                            i3.amount +
                                            ". Subtotal = $" +
                                            i3.product.price * i3.amount +
                                            ";"
                                        )
                                      )}
                                    </div>
                                    <div className="fw-semibold p-2">
                                      SubTotal = {sumArray(mang[0]) + "$"}
                                    </div>
                                    <div className="fw-semibold  border-bottom p-2">
                                      Shipping Fee ={" "}
                                      {item.data.map((i2) => i2.Fee)}
                                    </div>
                                    <div className="fw-bold p-2">
                                      Total = {item.data.map((i2) => i2.Price)}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
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

export default UserProfile;
