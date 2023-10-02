import React, { useContext, useState } from "react";
import { Context } from "../../Context/Context";
import { Link, useNavigate } from "react-router-dom";
import handleGetData from "../../apis/postAPI";
import {
  FaLock,
  FaUserShield,
  FaCreditCard,
  FaBusinessTime,
} from "react-icons/fa";
import userImg1 from "./CheckOutImg/user-2.jpg";
import userImg2 from "./CheckOutImg/user-1.jpg";
import moneyBack from "./CheckOutImg/money-back.jpg";
import "./Checkout.css";
import { useEffect } from "react";
function CheckOut() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { cartItem, cartSubTotal, totalItem, cartTotal, shippingFee } =
    useContext(Context);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [shipAdress, setShipAdress] = useState("");
  const handleChangeUserName = (event) => {
    setUsername(event.target.value);
    console.log(username);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleChangeAdress = (event) => {
    setShipAdress(event.target.value);
  };

  const cartEmpty = totalItem === 0;
  const data = {
    username: username,
    email: email,
    phone: phone,
    shipAdress: shipAdress,
    orders: cartItem,
    totalItem: totalItem,
    Fee: shippingFee + "$",
    Price: cartTotal + "$",
  };

  const navigate = useNavigate();
  const onCheckOut = async () => {
    const API = "/payments";
    try {
      await handleGetData.handleData(API, data, "post").then((res) => {
        if (
          res &&
          res.status === 200 &&
          res.data &&
          username &&
          phone &&
          email &&
          shipAdress
        ) {
          alert(res.data.message);
          navigate("/");
        }
        if (!username || !phone || !email || !shipAdress) {
          alert("You must fill all required* information");
        }

        localStorage.removeItem("cart");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center bg-dark-subtle"
      style={{ paddingTop: "100px" }}
    >
      <div
        className="container bg-white"
        style={{ paddingTop: "40px", paddingBottom: "40px" }}
      >
        <div className="row">
          {/* ps-5 bg-body p-4 w-100  flex-column */}
          <div className="d-flex align-items-center justify-content-center">
            <div className="d-flex res_check" style={{ width: "90%" }}>
              {/*  bg-primary position-relative*/}

              <div className="col-12 col-lg-6">
                {/* className=" me-4 pe-3 position-relative" */}
                {/* <div > */}

                <div className="w-100">
                  <div className="position-relative">
                    <h1 className="mb-4 text-capitalize">
                      Customer information
                    </h1>
                    <form class="row g-3 needs-validation p-1" noValidate>
                      <div class="col-md-6">
                        <label
                          for="validationCustom01"
                          class="form-label text-danger"
                        >
                          Username*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom01"
                          placeholder="Mark"
                          value={username}
                          onChange={handleChangeUserName}
                          required
                        />
                        <div class="valid-feedback">Looks good!</div>
                      </div>
                      <div class="col-md-6">
                        <label
                          for="validationCustom02"
                          class="form-label text-danger"
                        >
                          Phone*
                        </label>
                        <input
                          type="phone"
                          class="form-control"
                          id="validationCustom02"
                          placeholder="+01 912 30 3114"
                          required
                          value={phone}
                          onChange={handleChangePhone}
                        />
                        <div class="valid-feedback">Looks good!</div>
                      </div>
                      <div class="col-12">
                        <label
                          for="validationCustomUsername"
                          class="form-label text-danger"
                        >
                          Email*
                        </label>
                        <div class="input-group has-validation">
                          <input
                            type="text"
                            class="form-control"
                            id="validationCustomUsername"
                            aria-describedby="inputGroupPrepend"
                            required
                            value={email}
                            onChange={handleChangeEmail}
                          />
                          <div class="invalid-feedback">
                            Please fill with an valid email.
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <label
                          for="validationCustom03"
                          class="form-label text-danger"
                        >
                          Shipping Address*
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="validationCustom03"
                          required
                          value={shipAdress}
                          onChange={handleChangeAdress}
                        />
                        <div class="invalid-feedback">
                          Please provide a valid city.
                        </div>
                      </div>

                      <div class="col-12">
                        <label for="validationCustom03" class="form-label">
                          Your message
                        </label>
                        <textarea
                          className="form-control"
                          placeholder="Enter your message..."
                          name="message"
                        ></textarea>
                      </div>
                      <div class="col-12">
                        <label
                          for="validationCustom03"
                          className="form-label text-danger"
                        >
                          Required Infomation*
                        </label>
                      </div>

                      <h2 className="mt-4">Your Order </h2>
                      {/* (                bg-primary */}
                      <div className="mt-4 w-100">
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
                                  <div className="col fw-semibold fs-5">
                                    Total
                                  </div>
                                  <div className="col-2 d-flex justify-content-end me-1 fs-5 fw-semibold">
                                    ${cartTotal}
                                  </div>
                                </div>
                              </div>

                              <div className="d-flex mt-4 p-0">
                                <input
                                  type="text"
                                  className="form-control w-100"
                                  placeholder="Coupon code"
                                  aria-label="Coupon code"
                                  aria-describedby="button-addon2"
                                ></input>
                                <button
                                  className="btn btn-dark w-50 ms-3 p-2"
                                  type="button"
                                  id="button-addon2"
                                >
                                  Apply
                                </button>
                              </div>

                              <div className="d-flex mt-5 p-0 ">
                                <button
                                  className="d-flex btn btn-dark w-100 p-2 justify-content-center align-items-center"
                                  type="button"
                                  id="button-addon2"
                                  onClick={onCheckOut}
                                >
                                  {" "}
                                  <FaLock className="me-2" />
                                  Place Order ${cartTotal}
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-6">
                <div className="w-90 scc_re ms-4">
                  {/* className="container" */}
                  <div>
                    <h2>What you’ll get</h2>
                    <p className="mt-4">
                      Molestie risus fames enim eu ornare aenean et arcu velit
                      sem eget venenatis a quis neque mi, viverra in sed
                      vestibulum, hendrerit amet lobortis
                    </p>
                    <div>
                      <ul className="list-group mt-4">
                        <li
                          className="list-group-item bg-dark text-light"
                          aria-current="true"
                        >
                          Best quality in town and 100% authentic
                        </li>
                        <li className="list-group-item">
                          Consequat nibh elementum
                        </li>
                        <li className="list-group-item">
                          Neque pharetra facilisi
                        </li>
                        <li className="list-group-item">
                          Sed nunc tellus nulla nunc
                        </li>
                      </ul>
                    </div>
                    <hr className="mt-5"></hr>

                    <div className="card mt-5">
                      <div className="card-header">User Review</div>
                      <div className="card-body d-flex">
                        <img
                          className="rounded-circle"
                          style={{ width: 100, height: 100 }}
                          src={userImg2}
                        ></img>
                        <div className="ms-3">
                          <h5 className="card-title">Julia Keys</h5>
                          <p className="card-text text-secondary">
                            “Pharetra nec dui egestas pellentesque facilisi
                            amet, placerat pretium egestas sit commodo
                            suspendisse aliquet purus.”
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="card mt-4">
                      <div className="card-header">User Review</div>
                      <div className="card-body d-flex">
                        <img
                          className="rounded-circle"
                          style={{ width: 100, height: 100 }}
                          src={userImg1}
                        ></img>
                        <div className="ms-3">
                          <h5 className="card-title">Hugo Medhurst</h5>
                          <p className="card-text text-secondary">
                            “Pharetra nec dui egestas pellentesque facilisi
                            amet, placerat pretium egestas sit commodo
                            suspendisse aliquet purus.”
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr className="mt-5"></hr>
                    <div className="mt-5">
                      <h3>Purchase with confidence</h3>
                      <div className="card mt-4">
                        <div className="card-body d-flex">
                          <img
                            className="rounded-circle"
                            style={{ width: 100, height: 100 }}
                            src={moneyBack}
                          ></img>
                          <div className="ms-3">
                            <h5 className="card-title">
                              100% Money Back Guarantee!
                            </h5>
                            <p className="card-text text-secondary">
                              Adipiscing bibendum id a condimentum risus nec sed
                              malesuada ut etiam egestas. Adipiscing bibendum id
                              a condimentum risus nec.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3">
                        Adipiscing bibendum id a condimentum risus nec sed
                        malesuada ut etiam egestas. Adipiscing bibendum id a
                        condimentum risus nec.
                      </div>
                      <div className="mt-3">
                        <p className="d-flex align-items-center fw-semibold">
                          <FaUserShield className="me-2" />
                          SSL secured checkout
                        </p>
                        <p className="d-flex align-items-center fw-semibold">
                          <FaBusinessTime className="me-2" />
                          24/7 support available
                        </p>
                        <p className="d-flex align-items-center fw-semibold">
                          <FaCreditCard className="me-2" />
                          Payment option
                        </p>
                      </div>
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
}

export default CheckOut;
