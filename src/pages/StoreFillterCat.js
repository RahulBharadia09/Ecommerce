import React from "react";
import Reactstars from "react-rating-stars-component";
import { useState } from "react";
import FeatureProducts from "./FeatureProducts";
import CardOfProductFeature from "./CardOfProductFeature";
import {Link} from 'react-router-dom'

const StoreFillterCat = (props) => {
  const [grid, setGrid] = useState(4);

  return (
    <div className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3 col-xl-3">
            <div className="mb-3 StoreFilterCate">
              <h6 className="filter-title">Shop By Category</h6>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>

            <div className="mb-3 StoreFilterCate">
              <h6 className="filter-title">Filter By </h6>
              <div>
                <h5 className="sub-title">Availability</h5>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value=""
                    name=""
                    id=""
                  />
                  <label htmlFor="instock" className="form-check-label">
                    In stock [2]
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value=""
                    name=""
                    id=""
                  />
                  <label htmlFor="" className="form-check-label">
                    Out of Stock [0]
                  </label>
                </div>

                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-10 ">
                  <div class="form-floating mb-2">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="From"
                    />
                    <label for="floatingInput">From</label>
                  </div>
                  <div class="form-floating mb-2">
                    <input
                      type="password"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="To"
                    />
                    <label for="floatingPassword">To</label>
                  </div>
                </div>

                <h6 className="filter-title">Color</h6>
                <div>
                  <div className="d-flex flex-wrap    ">
                    <ul className="colors ps-0">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>

                <h6 className="filter-title">Product Prize</h6>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value=""
                    name=""
                    id=""
                  />
                  <label htmlFor="instock" className="form-check-label">
                    S
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value=""
                    name=""
                    id=""
                  />
                  <label htmlFor="instock" className="form-check-label">
                    M
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value=""
                    name=""
                    id=""
                  />
                  <label htmlFor="instock" className="form-check-label">
                    L
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value=""
                    name=""
                    id=""
                  />
                  <label htmlFor="instock" className="form-check-label">
                    XL
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value=""
                    name=""
                    id=""
                  />
                  <label htmlFor="instock" className="form-check-label">
                    XXL
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-3 StoreFilterCate">
              <h6 className="filter-title">Product Tag </h6>
              <div className="d-flex flex-wrap gap-10">
                <span class="badge text-bg-secondary">Headphone</span>
                <span class="badge text-bg-secondary">Laptop</span>
                <span class="badge text-bg-secondary">Mobile</span>
                <span class="badge text-bg-secondary">Speaker</span>
                <span class="badge text-bg-secondary">Tablet</span>
                <span class="badge text-bg-secondary">VIVO</span>
                <span class="badge text-bg-secondary">Oppo</span>
              </div>
            </div>

            <div className="mb-3 StoreFilterCate">
              <h6 className="filter-title">Random Products</h6>
              <div class="d-flex align-items-center border-bottom mb-3">
                <div class="flex-shrink-0">
                  <img src="images/headphone.jpg" alt="..." />
                </div>
                <div class="flex-grow-1 ms-3">
                  <h6 className="mb-0">
                    Kid Headphone Bulk 10 Pack Multi Colored
                  </h6>
                  <Reactstars
                    classNames="mb-0"
                    count={5}
                    size={20}
                    value={3}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <div>
                    <h6>$100</h6>
                  </div>
                </div>
              </div>

              <div class="d-flex align-items-center  border-bottom">
                <div class="flex-shrink-0">
                  <img src="images/headphone.jpg" alt="..." />
                </div>
                <div class="flex-grow-1 ms-3">
                  <h6 className="mb-0">
                    Kid Headphone Bulk 10 Pack Multi Colored
                  </h6>
                  <Reactstars
                    classNames="mb-0"
                    count={5}
                    size={20}
                    value={3}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <div>
                    <h6>$100</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="filter-sort-grid">
              <div className="d-flex justify-content-between align-items-center gap-10">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 " style={{ width: "100px" }}>
                   
                    Sort By :
                  </p>
                  <select name="" id="" className="form-control form-select">
                    <option value="manual">Featured</option>
                    <option value="best-selling">Best Selling</option>
                    <option value="title-ascending">Alphabetically A-Z</option>
                    <option value="title-descending">Alphabetically Z-A</option>
                    <option value="price-ascending">Price ,Low-High</option>
                    <option value="price-descending">Price ,High-Low</option>
                    <option value="created-descending">
                      Date , old to new
                    </option>
                    <option value="created-descending">
                      Date , new to old{" "}
                    </option>
                  </select>
                </div>

                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">21 Products</p>
                  <div className="d-flex align-items-center gap-10 grid">
                    <img
                      src="images/gr4.svg"
                      onClick={() => {
                        setGrid(3);
                      }}
                      className="d-block img-fluid"
                      alt=""
                    />
                    <img
                      src="images/gr3.svg"
                      onClick={() => {
                        setGrid(4);
                      }}
                      className="d-block img-fluid"
                      alt=""
                    />
                    <img
                      src="images/gr2.svg"
                      onClick={() => {
                        setGrid(6);
                      }}
                      className="d-block img-fluid"
                      alt=""
                    />
                    <img
                      src="images/gr.svg"
                      onClick={() => {
                        setGrid(12);
                      }}
                      className="d-block img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="container mp-featureProduct">
        <div className="row">
          <div className="col-12 col-xl-4 col-lg-4 col-md-4">
          <Link to="/product/:id">
            <CardOfProductFeature />
          </Link>
          </div>
          <div className="col-12 col-xl-4 col-lg-4 col-md-4">
          <Link to="/product/:id">
            <CardOfProductFeature />
          </Link>
          </div>
          <div className="col-12 col-xl-4 col-lg-4 col-md-4">
          <Link to="/product/:id">
            <CardOfProductFeature />
          </Link>
          </div>
          <div className="col-12 col-xl-4 col-lg-4 col-md-4">
          <Link to="/product/:id">
            <CardOfProductFeature />
          </Link>
          </div>
          <div className="col-12 col-xl-4 col-lg-4 col-md-4">
          <Link to="/product/:id">
            <CardOfProductFeature />
          </Link>
          </div>
          <div className="col-12 col-xl-4 col-lg-4 col-md-4">
          <Link to="/product/:id">
            <CardOfProductFeature />
          </Link>
          </div>
          <div className="col-12 col-xl-4 col-lg-4 col-md-4">
          <Link to="/product/:id">
            <CardOfProductFeature />
          </Link>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreFillterCat;
