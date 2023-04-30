import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import CompareIMG from '../images/compare.svg'
import WishlistIMG from '../images/wishlist.svg'
import USERIMG from '../images/user.svg'
import CartIMG from '../images/cart.svg'
import MENUIMG from '../images/menu.svg'

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-2">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-6 col-lg-6 col-xl-6 ">
              <p className="text-white mb-0">Free Shipping All Over India</p>
            </div>
            <div className="col-6 col-md-6 col-lg-6 col-xl-6 ">
              <p className="text-end mb-0 text-white">
                Hepline :
                <Link className="text-white" href="tel:+91 9172185204">
                  +91 9172185204
                </Link>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper py-2">
        <div className="container">
          <div className="row align-item-center">
            <div className="col-12 col-md-6 col-md-3 col-lg-2">
              <h3>
                <Link className="text-white">Handmade Uphaar</Link>
              </h3>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Products"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  <BsSearch />
                </span>
              </div>
            </div>

            <div className="col-5 col-md-12 col-lg-5 col-xl-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between text-white">
                <div>
                  <Link
                    to="./compareproducts"
                    className="d-flex align-items-center   text-white gap-10"
                  >
                    <img src={CompareIMG} alt="compare" />
                    <p className=" mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>

                <div>
                  <Link
                    to="./Wishlist"
                    className="d-flex align-items-center  text-white gap-10"
                  >
                    <img src={WishlistIMG} alt="" />
                    <p className=" mb-0">
                      Favourite <br /> WishList
                    </p>
                  </Link>
                </div>

                <div>
                  <Link
                    to="./loginpage"
                    className="d-flex align-items-center   text-white gap-10"
                  >
                    <img src={USERIMG} alt="" />
                    <p className=" mb-0">
                      LogIn
                      <br />
                      MyAccount
                    </p>
                  </Link>
                </div>

                <div>
                  <Link to="./cart" className="d-flex align-items-center gap-10 text-white">
                    <img src={CartIMG} alt="" />
                    <div className="d-flex flex-column mx-2">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$12323</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-2 col-xl-4">
              <div className="menu-bottom d-flex align-items-center gap-35 ">
                <div>
                  <div className="dropdown ">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0  gap-10 d-flex align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={MENUIMG} alt="" />
                      <span className="me-5 md-inline-block">
                        Shop Categories
                      </span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-8 col-xl-8">
                  <div className="menu-Links ">
                    <div className="d-flex align-items-center gap-15 ">
                      <NavLink to="/">Home</NavLink>
                      <NavLink to="/OurStore">Our Store</NavLink>
                      <NavLink to="/about">Blog</NavLink>
                      <NavLink to="/contact">Contact</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
