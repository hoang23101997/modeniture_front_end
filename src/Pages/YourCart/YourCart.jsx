import React, { useContext, useEffect } from "react";
import { Context } from "../../Context/Context";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import "./YourCart.css";

function YourCart() {
  const heig = "50px";
  const heiganh = "90px";
  const heicheck = "325px";

  //Scroll to top each Page
  useEffect(() => {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 0);
  }, []);
  const {
    cartItem,
    removeFromCart,
    cartSubTotal,
    totalItem,
    cartTotal,
    shippingFee,
    handleIncrease,
    handleDecrease,
  } = useContext(Context);

  const cartEmpty = totalItem === 0;

  return (
    <div className="bg-body-tertiary " style={{ paddingTop: "100px" }}>
      <div className="container ">
        <div className="navigator d-flex mb-5">
          <div>
            <Link to="/" className="nav-link active">
              Home&nbsp;/&nbsp;
            </Link>
          </div>
          <div className="fw-semibold"> Cart</div>
        </div>

        <div style={{ backgroundColor: "white", paddingTop: "30px" }}>
          <div
            style={{
              paddingBottom: "50px",
              fontSize: "45px",
              marginLeft: "30px",
            }}
          >
            {" "}
            Your Cart
          </div>

          {cartEmpty ? (
            <div
              style={{
                paddingBottom: "80px",
                fontSize: "20px",
                marginLeft: "30px",
              }}
            >
              <div className="d-flex justify-content-start mt-3 mb-3">
                Your cart is currently empty. Come and see our products...
              </div>
              <div>
                <Link to="/all-products" className="nav-link active">
                  <button className="btn btn-dark mt-3"> Return to shop</button>
                </Link>
              </div>
            </div>
          ) : (
            <div>
              {/* h1 */}
              <div
                className="col-12 d-flex align-items-center justify-content-center"
                style={{ flexWrap: "wrap" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center border"
                  style={{ width: "85%" }}
                >
                  <div className="col-5 d-flex" style={{ height: `${heig}` }}>
                    <div className="col-md-3 col-sm-1"></div>

                    <div className="col-md-1 col-sm-0 d-flex align-items-center justify-content-center fw-bold res_text_t">
                      Product
                    </div>

                    <div className="col-6"></div>
                  </div>
                  {/*  backgroundColor: "red", */}
                  <div
                    className="d-sm-none d-md-block col-md-2 d-md-flex align-items-center justify-content-center fw-bold res_text_t"
                    style={{ height: `${heig}` }}
                  >
                    Price
                  </div>
                  {/*  backgroundColor: "yellow", */}

                  <div
                    id="quantity-in-cart"
                    className="col-md-3 col-sm-4 d-flex align-items-center justify-content-center fw-bold res_text_t"
                    style={{ textAlign: "center", height: `${heig}` }}
                  >
                    Quantity
                  </div>
                  {/*  backgroundColor: "red", */}
                  <div
                    id="subtotal-in-cart"
                    className="col-md-2 d-flex align-items-center justify-content-center fw-bold res_text_t"
                    style={{ textAlign: "center", height: `${heig}` }}
                  >
                    Subtotal
                  </div>
                </div>
              </div>
              {/* h1 */}

              {/* h2 */}

              {cartItem.map((item) => {
                console.log(cartItem);
                return (
                  <div key={item.product.id}>
                    <div
                      className=" col-12 d-flex align-items-center justify-content-center"
                      style={{ flexWrap: "wrap", backgroundColor: "white" }}
                    >
                      {/*  backgroundColor: "blue", */}
                      <div
                        className="wrapper-product-in-cart d-flex justify-content-between border"
                        style={{ width: "85%" }}
                      >
                        <div
                          className="col-md-5 col-sm-5 d-flex"
                          style={{
                            backgroundColor: "white",
                            height: `${heiganh}`,
                          }}
                        >
                          {/* style={{ backgroundColor: "blue" }} */}
                          <div className="trash-can col-md-2 col-sm-2 d-flex align-items-center justify-content-center">
                            <FaTrashAlt
                              type="button"
                              onClick={() => removeFromCart(item.product.id)}
                            />

                            {/* style={{ backgroundColor: "yellow" }} */}
                          </div>
                          <div className="col-md-3 col-sm-3 d-flex align-items-center justify-content-center">
                            {/* Product */}

                            <img
                              className="img-in-cart"
                              style={{ width: "80%", height: "auto" }}
                              src={item.product.img}
                            />
                          </div>
                          {/*  style={{ backgroundColor: "green" }} */}
                          <div className="col-md-6 col-sm-9 d-flex align-items-center ">
                            <div className="css_product_name">
                              {item.product.name}
                            </div>
                          </div>
                        </div>
                        {/*  backgroundColor: "red", */}
                        <div
                          className="product-price-in-cart d-sm-none d-md-block col-md-2 d-md-flex align-items-center justify-content-center"
                          style={{ height: `${heiganh}` }}
                        >
                          {/* Price */}
                          <div className="css_product_price_cart">
                            ${item.product.price}.00
                          </div>
                        </div>

                        {/*  backgroundColor: "yellow", */}
                        <div
                          className="col-md-3 d-flex align-items-center justify-content-center"
                          style={{ textAlign: "center", height: `${heiganh}` }}
                        >
                          {/* Quantity */}

                          <div className="d-flex align-items-center justify-content-center quantity-container">
                            <div className="d-flex align-items-center justify-content-center res_congtru">
                              <button
                                className="btn btn-light d-flex align-items-center justify-content-center"
                                onClick={() => handleDecrease(item.product.id)}
                                style={{ width: "100%", height: "100%" }}
                              >
                                -
                              </button>
                            </div>

                            <div className="res_so" key={item.product.id}>
                              {item.amount}
                            </div>

                            <div className="d-flex align-items-center justify-content-center res_congtru">
                              <button
                                className="btn btn-light d-flex align-items-center justify-content-center"
                                onClick={() => handleIncrease(item.product.id)}
                                style={{ width: "100%", height: "100%" }}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* backgroundColor: "red", */}
                        <div
                          className="col-md-2 ms-md-4 col-sm-2 d-flex align-items-center justify-content-start subtotal_css"
                          style={{ textAlign: "center", height: `${heiganh}` }}
                        >
                          <div className="subtotal-price">
                            ${item.amount * item.product.price}.00
                          </div>
                          {/* Subtotal */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* h2 */}

              {/* tổng */}
              <div
                className="col-12 d-flex align-items-center justify-content-center"
                style={{ flexWrap: "wrap", backgroundColor: "white" }}
              >
                <div
                  id="total-cart-container"
                  className="d-flex align-items-center justify-content-center border"
                  style={{ width: "85%" }}
                >
                  <div className="col-5 d-flex" style={{ height: `${heig}` }}>
                    <div className="col-3"></div>
                    <div
                      className="col-md-2 col-sm-4 d-flex align-items-center justify-content-center fw-bold subtotal_css"
                      style={{ color: "black" }}
                    >
                      Total
                    </div>
                  </div>

                  <div
                    className="col-2 d-flex align-items-center justify-content-center"
                    style={{ height: `${heig}` }}
                  ></div>

                  {/* backgroundColor: "yellow",  */}
                  <div
                    className="col-md-3 col-sm-2 ms-sm-2 d-flex align-items-center justify-content-center"
                    style={{ textAlign: "center", height: `${heig}` }}
                  >
                    <div className="fw-bold subtotal_css">{totalItem}</div>

                    {/* Quantity */}
                  </div>
                  <div
                    className="col-md-2 col-sm-4 ms-sm-1  d-flex align-items-center justify-content-center"
                    style={{ textAlign: "center", height: `${heig}` }}
                  >
                    <div className="fw-bold subtotal_css">
                      ${cartSubTotal}.00
                    </div>
                    {/* Subtotal */}
                  </div>
                </div>
              </div>
              {/* tổng */}

              {/* continue */}
              <div
                className="col-12 d-flex align-items-center justify-content-center mt-4"
                style={{ flexWrap: "wrap" }}
              >
                {/*  backgroundColor: "blue", */}
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ width: "85%" }}
                >
                  <div className="col-5 d-flex" style={{ height: `${heig}` }}>
                    {/* style={{ backgroundColor: "blue" }} */}
                    <div className="col-3"></div>
                    {/* style={{ backgroundColor: "yellow" }} */}
                    <div className="col-3 d-flex align-items-center justify-content-center">
                      {/* Product */}
                    </div>
                    {/* style={{ backgroundColor: "green" }} */}
                    <div className="col-6"></div>
                  </div>

                  <div
                    className="col-2 d-flex align-items-center justify-content-center"
                    style={{ height: `${heig}` }}
                  >
                    {/* Price */}
                  </div>

                  <div
                    className="col-3 d-flex align-items-center justify-content-center"
                    style={{ textAlign: "center", height: `${heig}` }}
                  >
                    {/* Quantity */}
                  </div>
                  <div
                    className="col-2 d-flex align-items-center justify-content-end"
                    style={{ textAlign: "center", height: `${heig}` }}
                  >
                    <div
                      className="d-flex align-items-center"
                      style={{ height: "50px" }}
                    >
                      <Link
                        to="/all-products"
                        className="nav-link  justify-content-end"
                        style={{ width: "200px" }}
                      >
                        <div className="d-flex justify-content-end ">
                          <button
                            // style={{ width: "100%" }}
                            className="btn btn-dark "
                          >
                            {/* font_continue */}
                            <div className="">Continue To Shop</div>
                          </button>
                        </div>
                      </Link>
                    </div>

                    {/* Subtotal */}
                  </div>
                </div>
              </div>
              {/* continue */}

              {/* Proceed To Checkout */}
              {/* h1 */}
              <div
                className="col-12 d-flex align-items-center justify-content-center mt-5"
                style={{ flexWrap: "wrap" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ width: "85%" }}
                >
                  <div
                    className="col-5 d-flex "
                    style={{ height: `${heicheck}` }}
                  >
                    <div className="col-3"></div>
                    <div className="col-3 d-flex align-items-center justify-content-center">
                      {/* Product */}
                    </div>

                    <div className="col-6"></div>
                  </div>
                  {/* backgroundColor: "red", */}
                  <div
                    className="col-2 d-flex align-items-center justify-content-center"
                    style={{ height: `${heicheck}` }}
                  >
                    {/* Price */}
                  </div>

                  <div
                    className="col-5 d-flex justify-content-end mb-5"
                    id="cart-total-container"
                    style={{
                      textAlign: "center",

                      height: `${heicheck}`,
                    }}
                  >
                    {/* Quantity */}

                    <div className="d-flex cartol">
                      <div className="card cartol">
                        <div className="card-body">
                          <h5 className="card-title fs-2 ">Cart Totals</h5>
                          <table className="table mt-3">
                            <tbody>
                              <tr>
                                <th scope="row" className="fw-semibold fs-5">
                                  Subtotal
                                </th>
                                <td>${cartSubTotal}.00</td>
                              </tr>
                              <tr>
                                <th scope="row" className="fw-semibold fs-5">
                                  Shipping
                                </th>
                                <td>${shippingFee}.00</td>
                              </tr>
                              <tr>
                                <th scope="row" className="fw-semibold fs-5">
                                  Total
                                </th>
                                <td className="fw-semibold fs-5">
                                  ${cartTotal}.00
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <Link to="/checkout">
                          <button className="btn btn-dark fs-5 p-3 w-100">
                            Proceed To Checkout
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* h1 */}
              {/* Proceed To Checkout */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default YourCart;
