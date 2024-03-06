import React from "react";
import "./Body.css";
import g from "../Body/g.jpg";
function Body() {
  return (
    <div >
      <div>
        <img src={g} alt="" className="img" />
      </div>
      <div>
        <h5 id="subhead">Cool Girls Style Upto 40% OFF</h5>
        <h3 id="heading">
          <strong>
            SUMMER
            <br />
          </strong>{" "}
          COLLECTION
        </h3>
      </div>
    </div>
  );
}

export default Body;
