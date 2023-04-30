import React from "react";
import { Link } from "react-router-dom";
import Reactstars from "react-rating-stars-component";
import CameraIMG from '../images/camera.jpg'

const AdvanceProduct = () => {
  return (
    <div className="container py-2">
      <div className="row ">
        <h4>Special Products</h4>
        <div className="col-12 col-md-12 col-lg-4 col-xl-4 py-2 d-flex justify-content-between mb-3 gap-15 advproducts">
          <div>
            <img src={CameraIMG} alt="" />
          </div>
          <div className="card-body">
            <h5 className="card-title brandname">Havels</h5>
            <Reactstars
              classNames="mx-1 "
              count={5}
              size={22}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="card-text advprodes">
              Some quick example text to build on the card title and make up
            </p>
            <div>
              <span className="red-p">$100</span> &nbsp;<strike>$200</strike>
            </div>
            <div className="d-flex align-items-center ">
              <p className="py-1 fw-bold px-2 mb-0">5 Days</p>
              <div className="d-flex gap-10">
                <span className="badge rounded-circle bg-danger p-2">1</span>:
                <span className="badge rounded-circle bg-danger p-2">1</span>:
                <span className="badge rounded-circle bg-danger p-2">1</span>
              </div>
            </div>
            <div className="product-progress">
              <p>500 products</p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-bar" style={{ width: "75%" }}></div>
              </div>
            </div>
            <Link>
              <button type="button" className="mt-2 btn btn-success ">
                Success
              </button>
            </Link>
            
          </div>
        </div>


        <div className="col-12 col-md-12 col-lg-4 col-xl-4 py-2 d-flex justify-content-between mb-3 gap-15 advproducts">
          <div>
            <img src={CameraIMG} alt="" />
          </div>
          <div className="card-body">
            <h5 className="card-title brandname">Havels</h5>
            <Reactstars
              classNames="mx-1 "
              count={5}
              size={22}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="card-text advprodes">
              Some quick example text to build on the card title and make up
            </p>
            <div>
              <span className="red-p">$100</span> &nbsp;<strike>$200</strike>
            </div>
            <div className="d-flex align-items-center ">
              <p className="py-1 fw-bold px-2 mb-0">5 Days</p>
              <div className="d-flex gap-10">
                <span className="badge rounded-circle bg-danger p-2">1</span>:
                <span className="badge rounded-circle bg-danger p-2">1</span>:
                <span className="badge rounded-circle bg-danger p-2">1</span>
              </div>
            </div>
            <div className="product-progress">
              <p>500 products</p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-bar" style={{ width: "75%" }}></div>
              </div>
            </div>
            <Link>
              <button type="button" className="mt-2 btn btn-success ">
                Success
              </button>
            </Link>
           
          </div>
        </div>

        <div className="col-12 col-md-12 col-lg-4 col-xl-4 py-2 d-flex justify-content-between mb-3 gap-15 advproducts">
          <div>
            <img src={CameraIMG} alt="" />
          </div>
          <div className="card-body">
            <h5 className="card-title brandname">Havels</h5>
            <Reactstars
              classNames="mx-1 "
              count={5}
              size={22}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="card-text advprodes">
              Some quick example text to build on the card title and make up
            </p>
            <div>
              <span className="red-p">$100</span> &nbsp;<strike>$200</strike>
            </div>
            <div className="d-flex align-items-center ">
              <p className="py-1 fw-bold px-2 mb-0">5 Days</p>
              <div className="d-flex gap-10">
                <span className="badge rounded-circle bg-danger p-2">1</span>:
                <span className="badge rounded-circle bg-danger p-2">1</span>:
                <span className="badge rounded-circle bg-danger p-2">1</span>
              </div>
            </div>
            <div className="product-progress">
              <p>500 products</p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-bar" style={{ width: "75%" }}></div>
              </div>
            </div>
            <Link>
              <button type="button" className="mt-2 btn btn-success ">
                Success
              </button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceProduct;
