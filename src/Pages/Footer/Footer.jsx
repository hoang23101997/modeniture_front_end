import Footer_inf from "./Footer_inf";
import Aboutus from "../AboutUs/Aboutus";

import img_home1 from "../../home_img/wc-img-1.png";
import img_home2 from "../../home_img/blog-img-5.png";
import img_home3 from "../../home_img/blog-img-3-1.png";

export default function Footer() {
  return (
    <div
      className="d-flex bg-dark footer pt-5"
      style={{ alignItems: "center" }}
    >
      <div className="container mt-5">
        <div className="row">
          <div
            className="row d-flex justify-content-center"
          >
            <div className="footer_css_m col-lg-4 col-md p-3 ps-5">
              <Aboutus />
            </div>

            <div className="footer_css_m col-lg-4 col-md-5 p-3 ps-5">
              <h3 style={{ color: "white" }}>Latest News</h3>
              <p style={{ color: "gray" }}>_______</p>
              <Footer_inf
                tex_prop={"How I Started My eCommerce Shop"}
                date_prop={"July 4, 2022"}
                img_prop={img_home1}
              />

              <Footer_inf
                tex_prop={"Quitting My Corporate Job for My Startup"}
                date_prop={"July 4, 2022"}
                img_prop={img_home2}
              />

              <Footer_inf
                tex_prop={"The Most Important Skills In Life"}
                date_prop={"July 1, 2022 "}
                img_prop={img_home3}
              />
            </div>

            <div className="footer_css_m col-lg-4 col-md-5 p-3 ps-5">
              <h3 style={{ color: "white" }}>Join Our Newsletter</h3>
              <p style={{ color: "gray" }}>_______</p>

              <div className="d-flex" >
                <input
                  placeholder="name@example.com"
                  style={{height: "40px" , width: "160px" }}
                  type="text"
                />
                <button
                className="btn btn-primary"
                  style={{ width: "90px", height: "40px", marginLeft: "10px" }}
                >
                  Subscribe
                </button>
              </div>
              <p style={{ marginTop: "30px", color: "white" }}>
                We only send newsletters out a few times a year, we won't ever
                spam you.
              </p>
            </div>
          </div>
        </div>
        <p
          className="img_full"
          style={{ paddingTop: "10px", overflow: "hidden", color: "gray" }}
        >
          ______________________________________________________________________________________________________________________________________________________________________________________________________
        </p>
        <p style={{ textAlign: "center", color: "white" }}>
          ©2023 Moderniture eCommerce{" "}
        </p>
      </div>
    </div>
  );
}
