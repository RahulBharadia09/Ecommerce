import React from 'react';
import Reactstars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import HeadIMG from '../images/headphone.jpg';
import WishSvg from '../images/wish.svg'
import AddCart from '../images/add-cart.svg'
import ViewSvg from '../images/view.svg'
import ProdCompare from '../images/prodcompare.svg'

const CardOfProductFeature = () => {
  return (
    <div>
      <div className="card productfeature ">
            <img
              src={HeadIMG}
              className="card-img-top rounded-top"
              alt="Headphone image"
            />
            <div className="wishlisticon position-absolute">
              <Link>
                <img src={WishSvg} alt="" />
              </Link>
            </div>
            <Reactstars
              classNames="mx-3"
              count={5}
              size={29}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />

            <div className="card-body ">
              <h5 className="card-title brandname">Havels</h5>
              <p className="card-text prodes">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p className="productprice">$100</p>
              <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-10">
                  <Link>
                    <img src={AddCart} alt="" />
                  </Link>
                  <Link>
                    <img src={ViewSvg} alt="" />
                  </Link>
                  <Link>
                    <img src={ProdCompare} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default CardOfProductFeature
