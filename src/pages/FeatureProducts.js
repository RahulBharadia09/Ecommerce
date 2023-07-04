import React from "react";
import Reactstars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import CardOfProductFeature from "./CardOfProductFeature";

const FeatureProducts = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <div className="container py-4">
      <div className="row">
        <h4 className="py-3">Our Feature Products...</h4>
        <div
          className={`${
            location.pathname === "/store"
              ? `col-${grid}`
              : "col-12 col-md-6 col-lg-3 col-xl-3"
          } `}
        >
          <Link to="/product/:id">
            <CardOfProductFeature />
          </Link>
        </div>

        <div className="col-12 col-md-6 col-lg-3 col-xl-3">
          <Link to="/product/:id">
            <CardOfProductFeature />
          </Link>
        </div>

        <div className="col-12 col-md-6 col-lg-3 col-xl-3">
          <Link to="/product/:id">
            <CardOfProductFeature />
          </Link>
        </div>
        <div className="col-12 col-md-6 col-lg-3 col-xl-3">
          <Link to="/product/:id">
            <CardOfProductFeature />
          </Link>
        </div>
        
        
        
      </div>
    </div>
  );
};

export default FeatureProducts;
