import React from 'react';
import CrossSVG from '../images/cross.svg';
import WatchImage from '../images/watch.jpg'

const WishlistDesign = () => {
  return (
    <div>
      <div className="wishlist-card position-relative ">
                <img
                  src={CrossSVG}
                  alt=""
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image ">
                  <img
                    src={WatchImage}
                    className="w-100 img-fluid"
                    alt="watch"
                  />
                </div>

                <h6 className="title">Lorem ipsum dolor sit amet consectetur adipisicing.</h6>
                <h5 className="price">$100</h5>
              </div>
    </div>
  )
}

export default WishlistDesign
