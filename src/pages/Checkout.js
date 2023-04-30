import React from "react";
import { Link } from "react-router-dom";
import WatchIMG from "../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";

const Checkout = () => {
  return (
    <>
      <div className="checkout-wrapper py-5 smokebg">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="checkout-left-side">
                <h3 className="website-name">Handmade Uphaar</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item total-price">
                      <a href="#">Home</a>
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item total-price active" aria-current="page">
                      Shipping Information
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item total-price active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>

                <h4 className="title total">Contact Us</h4>
                <p className="user-details total">
                  Rahul Bharadia (rahulbhradia917@gmail.com)
                </p>
                <h5 className="mb-3">Shipping Address</h5>

                <form
                  action=""
                  className="d-flex gap-15 flex-wrap justify-content-between"
                  method="post"
                >
                  <div className="w-100">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Apt/bulding/Flat Number"
                      className="form-control"
                    />
                  </div>

                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Select city
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Zip Code"
                      className="form-control"
                    />
                  </div>
                </form>
                <div className="d-flex py-3 align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <Link to="/cart" className="text-dark">
                      {" "}
                      <span className="fs-5">&larr;</span>Return to Cart
                    </Link>
                  </div>
                  <div className="d-flex align-items-center justify-content-end">
                    <Link to="./Checkout" className="btn btn-outline-danger">
                      Continue to Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-4">
                <div className="d-flex gap-15">
                  <div className="w-75 d-flex gap-15">
                    <div className="w-25 position-relative">
                      <span
                        style={{ top: "-10px", right: "2px" }}
                        className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                      >
                        1
                      </span>
                      <img src={WatchIMG} className="img-fluid" alt="" />
                    </div>
                    <div>
                      <h5 className="total-price">Lorem, ipsum.</h5>
                      <p className="total-price">Lorem, ipsum dolor.</p>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="total">$ 1000</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom mb-2">
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <p className="mb-0 total">Subtotal</p>
                    <p className="mb-0 total-price">$ 10000</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="total">Shipping</p>
                    <p className="total-price">$ 10000</p>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <h5 className="total">Total</h5>
                <h6 className="total-price">$ 10000</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
