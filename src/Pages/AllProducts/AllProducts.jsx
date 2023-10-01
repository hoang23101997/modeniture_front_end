import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useEffect, useContext } from "react";
import "./AllProducts.css";
import { products } from "./data";
import { Context } from "../../Context/Context";
import productImg3 from "../../productimg/wc-12-300x300.png";
import productImg4 from "../../productimg/wc-18-300x300.png";
import productImg6 from "../../productimg/wc-img-1-300x300.png";
import allProduct from "../AllProducts//All_Products_Img_Page/all-category.jpg";
function AllProducts() {
  //Scroll to top each Page
  useEffect(() => {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 0);
  }, []);
  const {
    addToCart,
    FaStar,
    StarRating,
    onChangeSort,
    displayPage,
    ItemDeco,
    ItemFrame,
    ItemFuniture,
  } = useContext(Context);
  return (
    <div className="all-product-container bg-body-tertiary">
      <div className="d-flex container pb-3 css_res_contain">
        <div className="css_res_contain_allpro mt-4 pe-lg-5 pb-lg-5 ">
          <div className="navigator d-flex">
            <div>
              <Link to="/" className="nav-link active">
                Home&nbsp;/&nbsp;
              </Link>
            </div>
            <div className="fw-semibold"> All Products</div>
          </div>
          <h1 className="page-title mt-sm-3">All Products</h1>
          <div className="sorting d-flex">
            <form className="woocommerce-ordering" method="get">
              <select
                onChange={(value) => onChangeSort(value)}
                name="orderby"
                className="form-select"
                aria-label="Shop order"
                fdprocessedid="h8ennj"
              >
                <option value="default">No sorting</option>
                <option value="low-price">Sort by price: low to high</option>
                <option value="high-price">Sort by price: high to low</option>
                <option value="rating">Sort by rating: highest</option>
                <option value="ASC">Sort by name: A to Z</option>
                <option value="DSC">Sort by name: Z to A</option>
              </select>
              <input type="hidden" name="paged" value="1"></input>
            </form>
          </div>

          <div>
            <div className="row all-products">
              {displayPage.map((product) => (
                <div
                  className="all-grid-product-container col-sm-6 col-lg-4 g-4"
                  key={product.id}
                >
                  <Link to={`/products/${product.id}`}>
                    {" "}
                    <img className="product-img mt-3" src={product.img}></img>
                  </Link>

                  <Link
                    to={`/products/${product.id}`}
                    className="product-name text-decoration-none fw-bold"
                  >
                    <div className="mt-3 mb-1 res_css_tex">{product.name}</div>
                  </Link>

                  <StarRating value={product.rating} />
                  <div className="d-flex css_product_price">
                    <div className="text-decoration-line-through me-2 text-body-tertiary">
                      ${product.originPrice}.00
                    </div>{" "}
                    <div className="fw-semibold"> ${product.price}.00 </div>
                  </div>

                  <div
                    onClick={() => addToCart(product.id)}
                    className="btn btn-dark mt-3"
                  >
                    Add to Cart
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <aside className="css_res_contain_allphai h-50 p-4 mt-5 bg-body">
          <h4 className="categories-title"> Categories</h4>
          {/* Link to <AllProducts /> */}
          <Link to="/all-products" className="nav-link">
            <div
              style={{ cursor: "pointer" }}
              className="d-flex align-items-center mt-4 border-bottom pb-3"
            >
              <img className="w-25" src={allProduct}></img>
              {/* Hover category semibold in aside */}
              <p style={{ fontSize: 17 }} className="fw-semibold ms-3 mt-2">
                {" "}
                ALL ({products.length}){" "}
              </p>
            </div>
          </Link>
          {/* Link to <DecorationCategory /> */}
          <Link to="/all-products/decoration" className="nav-link">
            <div
              style={{ cursor: "pointer" }}
              className="d-flex align-items-center mt-3 border-bottom pb-3"
            >
              <img className="w-25" src={productImg6}></img>
              <p style={{ fontSize: 17 }} className="ms-3 mt-2">
                {" "}
                Decoration ({ItemDeco.length}){" "}
              </p>
            </div>
          </Link>

          {/* Link to <FramePosterCategory /> */}
          <Link to="/all-products/frame&poster" className="nav-link">
            <div
              style={{ cursor: "pointer" }}
              className="d-flex align-items-center mt-3 border-bottom pb-3"
            >
              <img className="w-25" src={productImg4}></img>

              <p style={{ fontSize: 17 }} className="ms-3 mt-2">
                {" "}
                Frames & Posters ({ItemFrame.length}){" "}
              </p>
            </div>
          </Link>

          {/* Link to <FurnitureCategory /> */}
          <Link to="/all-products/furniture" className="nav-link">
            <div
              style={{ cursor: "pointer" }}
              className="d-flex align-items-center mt-3 border-bottom pb-3"
            >
              <img className="w-25" src={productImg3}></img>
              <p style={{ fontSize: 17 }} className="ms-3 mt-2">
                {" "}
                Furniture ({ItemFuniture.length}){" "}
              </p>
            </div>
          </Link>

          <h5 className="form-label mt-4">Most Popular Products</h5>

          <Link className="nav-link" to="/products/3">
            <div className="d-flex align-items-center flex-column mt-4 border-bottom">
              <img className="w-50" src={productImg3}></img>
              <h5 style={{ fontSize: 17 }} className="d-flex mt-2">
                {" "}
                Modern Wooden Chair
              </h5>
              <p style={{ fontSize: 17 }}>
                <FaStar style={{ color: "orange" }} />
                <FaStar style={{ color: "orange" }} />
                <FaStar style={{ color: "orange" }} />
                <FaStar style={{ color: "orange" }} />
                <FaStar style={{ color: "orange" }} />
              </p>
              <p>$14.00</p>
            </div>
          </Link>

          <Link className="nav-link" to="/products/4">
            <div className="d-flex align-items-center flex-column mt-4 pb-3">
              <img className="w-50" src={productImg4}></img>
              <h5 style={{ fontSize: 17 }} className="d-flex mt-2">
                Simple Frame
              </h5>
              <p style={{ fontSize: 17 }}>
                <FaStar style={{ color: "orange" }} />
                <FaStar style={{ color: "orange" }} />
                <FaStar style={{ color: "orange" }} />
                <FaStar style={{ color: "orange" }} />
                <FaStar style={{ color: "orange" }} />
              </p>
              <div>$19.00</div>
            </div>
          </Link>
        </aside>
      </div>
    </div>
  );
}

export default AllProducts;
