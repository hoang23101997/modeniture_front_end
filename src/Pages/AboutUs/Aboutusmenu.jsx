import Card_text_but_img from "./Card_text_but_img";
import Car_text_img from "./Car_text_img";
import Car_text_text from "./Car_text_text";
import { useEffect } from "react";
import "./Aboutusmenu.css";
export default function Aboutusmenu() {
    //Scroll to top each Page
    useEffect(() => {
       window.scrollTo(0, 0)
     }, [])
  return (
    <div>
      {/* cartext_img_but */}
      <div
        className="position-relative d-flex align-items-center justify-content-center"
        style={{ backgroundColor: "#ebe9eb", paddingTop: "100px", paddingBottom: "100px" }}
      >
        <Card_text_but_img />
      </div>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
      >
        <Car_text_img />
      </div>
      {/* cartext_text */}
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ backgroundColor: "#ebe9eb", paddingTop: "100px", paddingBottom: "100px" }}
      >
        <Car_text_text />
      </div>
    </div>
  );
}
