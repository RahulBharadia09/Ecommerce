import React from "react";
import ColorComponent from "./ColorComponent";
import CompareProductCardDesign from "./CompareProductCardDesign";

const CompareProducts = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3 py-4 ">
            <CompareProductCardDesign/>
          </div>
          <div className="col-3 py-4">
            <CompareProductCardDesign/>
          </div>
          <div className="col-3 py-4">
            <CompareProductCardDesign/>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProducts;
