import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";

export default function PopularProducts(props) {
  // const handle_pro = function (event) {
  //   event.preventDefault();
  //   console.log(props.keys);
  // };
  const { StarRating, ItemPopular } = useContext(Context);

  return (
    <div className="container-product">
      <div className="row popular-product">
        {/* products_home  ItemPopular*/}
        {ItemPopular.map((product) => (
          <div className="col-lg-4 col-sm-6 mb-4 mt-4" key={product.id}>
            <div className="popular-product-description" key={product.id}>
              <Link className="nav-link" to={`/products/${product.id}`}>
                <img
                  className="product-img"
                  style={{ height: "100%", width: "100%" }}
                  src={product.img}
                ></img>

                <div
                  className="product-name mt-4"
                  style={{
                    fontSize: "20px",
                    color: "black",
                    fontWeight: "700",
                  }}
                >
                  {`${product.name}`}
                </div>

                <StarRating className="star-rating" value={product.rating} />

                <div className="d-flex mt-2 align-items-center">
                  <div className="text-decoration-line-through me-2 text-body-tertiary">
                    ${product.originPrice}.00
                  </div>
                  <div
                    className="price-product"
                    style={{
                      fontSize: "19px",
                      color: "black",
                      fontWeight: "600",
                    }}
                  >
                    {" "}
                    ${product.price}.00{" "}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
