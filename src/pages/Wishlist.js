import React from "react";
import WishlistDesign from "./WishlistDesign";

const Wishlist = () => {
  return (
    <div>
      <div className="wishlist-wrapper home-wrapper py-5">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <WishlistDesign/>
            </div>
            <div className="col-3">
              <WishlistDesign/>
            </div>
            <div className="col-3">
              <WishlistDesign/>
            </div>
            <div className="col-3">
              <WishlistDesign/>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
