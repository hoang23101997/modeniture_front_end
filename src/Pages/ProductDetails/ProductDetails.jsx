import React, { useContext, useEffect } from "react";
import { Context } from "../../Context/Context";
import { Link, useParams } from "react-router-dom";
import { products } from "../AllProducts/data";
import "./ProductDetail.css";

function ProductDetails() {
  //Scroll to top each Page
  useEffect(() => {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 0);
  }, []);
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  const { addToCart, handleChangeTab, showTab, StarRating, handleClickScroll } =
    useContext(Context);

  const {
    name,
    img,
    subImg,
    subImg1,
    subImg2,
    subImg3,
    price,
    category,
    SKU,
    originPrice,
  } = product;

  return (
    <div className="bg-body-tertiary">
      <div className="container pb-5">
        <div className="d-flex pb-3">
          <div className="d-flex mt-5">
            <div>
              <Link to="/" className="nav-link active fs-5">
                Home&nbsp;
              </Link>
            </div>

            <div className="fw-semibold fs-5">/ {name} </div>
          </div>
        </div>
        <div className="mt-5 row">
          <div className="img-product col-md">
            {" "}
            <img
              className="product-detail w-100"
              style={{ height: "auto" }}
              src={img}
            ></img>
            <div className="img-container d-flex img-fluid d-none d-md-block">
              <img
                style={{ height: "auto" }}
                className="product-detail-img w-25 "
                src={subImg}
              ></img>
              <img
                style={{ height: "auto" }}
                className="product-detail-img w-25"
                src={subImg1}
              ></img>
              <img
                style={{ height: "auto" }}
                className="product-detail-img w-25"
                src={subImg2}
              ></img>
              <img
                style={{ height: "auto" }}
                className="product-detail-img w-25"
                src={subImg3}
              ></img>
            </div>
          </div>
          <div className="product-info ms-3 col">
            <h1 className="">{name} </h1>
            <div className="d-flex mt-3">
              <StarRating value={product.rating} />
              &nbsp;{" "}
              <div
                onClick={handleClickScroll}
                style={{ cursor: "pointer" }}
                className="mt-1 text-decoration-underline"
              >
                (1 customer review)
              </div>
            </div>
            <div className="mt-4">
              <div className="fs-4 d-flex">
                {" "}
                <div className="text-decoration-line-through me-2 text-body-tertiary">
                  ${originPrice}.00
                </div>{" "}
                <div className="fw-semibold">${price}.00</div>{" "}
              </div>
            </div>
            <div className="mt-3">
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse eget dictum dolor. In dapibus nibh at fermentum
                congue. Nulla dictum est a fermentum volutpat. Praesent odio
                ipsum
              </p>
            </div>
            <div className="d-flex mt-3">
              <div
                onClick={() => addToCart(product.id)}
                className="btn btn-dark"
              >
                Add to Cart
              </div>
              <Link to="/checkout">
                <button className="btn btn-dark ms-2">Checkout</button>
              </Link>
            </div>
            <div className="mt-3">
              <p className="">SKU: {SKU}</p>
              <p className="">Category: {category}</p>
            </div>
            {/* Add button return to shop */}
            <Link to="/all-products" className="nav-link">
              <div className="d-flex w-100">
                <button className="btn btn-dark p-3 mb-2 mt-3 w-100 fs-5">
                  Continue To Shop
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div className="mt-5 description">
          <div className="border-bottom">
            <button
              onClick={() => handleChangeTab(1)}
              className={
                showTab === 1
                  ? "button bg-body-tertiary active fw-semibold fs-5 ms-2 mb-2"
                  : "button bg-body-tertiary fs-5 ms-1 mb-2"
              }
            >
              Description
            </button>
            <button
              onClick={() => handleChangeTab(2)}
              className={
                showTab === 2
                  ? "button bg-body-tertiary ms-2 active fw-semibold fs-5 mb-2"
                  : "button ms-1 bg-body-tertiary fs-5 mb-2"
              }
            >
              Additional information{" "}
            </button>
            <button
              onClick={() => handleChangeTab(3)}
              className={
                showTab === 3
                  ? "button bg-body-tertiary ms-2 active fw-semibold fs-5"
                  : "button ms-1 bg-body-tertiary fs-5"
              }
            >
              Reviews (1)
            </button>
          </div>
          <div className="mt-4 d-flex flex-column">
            <div
              className={showTab === 1 ? "tab-pane active" : "tab-pane hide"}
            >
              <h2>Description</h2>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse eget dictum dolor. In dapibus nibh at fermentum
                congue. Nulla dictum est a fermentum volutpat.
              </p>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse eget dictum dolor. In dapibus nibh at fermentum
                congue. Nulla dictum est a fermentum volutpat.
              </p>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse eget dictum dolor. In dapibus nibh at fermentum
                congue. Nulla dictum est a fermentum volutpat.
              </p>
            </div>
            <div
              className={showTab === 2 ? "tab-pane active" : "tab-pane hide"}
            >
              <h2>Additional information</h2>
              <table className="table table-striped  table-hover mt-4">
                <tbody>
                  <tr>
                    <th scope="row">Weight</th>
                    <td className="fst-italic"> 30 kg</td>
                  </tr>
                  <tr>
                    <th scope="row">Dimensions</th>
                    <td className="fst-italic"> 20 × 30 × 40 cm</td>
                  </tr>
                  <tr>
                    <th scope="row">Size</th>
                    <td className="fst-italic">Large, Medium, Small</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className={showTab === 3 ? "tab-pane active" : "tab-pane hide"}
              id="user-review"
            >
              <h2>1 review for {name}</h2>
              <div className="card mt-4">
                <div className="card-header d-flex justify-content-between align-items-center pb-3">
                  <div className="d-flex pt-2">
                    <div className="fw-semibold">Jennifer Aliston</div>
                    <div className="ms-1 fw-light me-4">– July 18, 2022</div>
                  </div>
                  <StarRating value={product.rating} />
                </div>

                <div className="card-body">
                  <blockquote className=" mb-0">
                    <p>A must-have decoration for every modern house</p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
