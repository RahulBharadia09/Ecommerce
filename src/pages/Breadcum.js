import React from "react";
import { Link } from "react-router-dom";

const Breadcum = (props) => {
  const { title } = props;
  return (
    <div className="breadcrumb mb-0 py-3">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p>
              <Link to="/" className="text-dark">Home</Link> / {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcum;
