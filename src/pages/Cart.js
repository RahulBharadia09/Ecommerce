import React from "react";
import { Link } from "react-router-dom";
import WatchIMG from "../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  return (
    <div>
      <section className="cart-wrapper">
        <div className="container  ">
          <div className="row smokebg py-5">
            <div className="col-12">
              <div className="header-cart p-2 d-flex align-items-center justify-content-between">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data mb-2 py-2 d-flex align-items-center justify-content-between">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img
                      src={WatchIMG}
                      className="img-fluid"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="w-65">
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Size :- </p>
                    <p>Color :- </p>
                  </div>
                </div>

                <div className="cart-col-2">
                  <h5 className="price">$100</h5>
                </div>

                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      type="number"
                      min={1}
                      max={5}
                      className="form-contol"
                      name="cartquantity"
                      id="cartquantity"
                    />
                  </div>
                  <div>
                    <AiFillDelete className="text-danger fs-5" />
                  </div>
                </div>

                <div className="cart-col-4">
                  <h5 className="price">$100</h5>
                </div>
              </div>
            </div>

            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <div>
                  <Link to="./product" className="btn btn-outline-danger">
                    Continue to Shopping
                  </Link>
                </div>
                <div className="d-flex flex-column align-item-end ">
                  <h5>Subtotal : $100</h5>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <Link to="/Checkout" className="btn btn-outline-danger">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
