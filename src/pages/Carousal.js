import React from "react";
import MainBanner1 from '../images/main-banner.jpg'
import MainBanner2 from '../images/main-banner-1.jpg'
import CatBanner from '../images/catbanner-01.jpg'
import CatBanner2 from '../images/catbanner-02.jpg'
import CatBanner3 from '../images/catbanner-03.jpg'
import CatBanner4 from '../images/catbanner-04.jpg'

const Carousal = () => {
  return (
    <div className="container py-4 d-flex  justify-content-center">
      <div className="row">
        <div className=" col-12 col-md-12 col-sm-12 col-lg-6 col-xl-6">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={MainBanner1}
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousal-item1 position-absolute">
                  <h4>SuperCharged For Pros</h4>
                  <h5>Ipad S13+ Pro</h5>
                  <p>From $9999 or $41.62/mon.</p>
                  <button>Buy now</button>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={MainBanner2}
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousal-item1 position-absolute">
                  <h4>SuperCharged For Pros</h4>
                  <h5>Ipad S13+ Pro</h5>
                  <p>From $9999 or $41.62/mon.</p>
                  <button>Buy now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" col-12 col-md-12 col-sm-12 col-lg-6 col-xl-6">
          <div className="d-flex flex-wrap justify-content-between">
            <div className="small-banner position-relative p-1">
              <img
                src={CatBanner}
                className="img-fluid rounded-3"
                alt="Banner2"
              />
              <div className="small-banner-content position-absolute">
                <h4>Best Sale</h4>
                <h5>IPAD S13+ PRO</h5>
                <p>From $9999 or $41.02/mon</p>
              </div>
            </div>

            <div className="small-banner position-relative p-1">
              <img
                src={CatBanner2}
                className="img-fluid rounded-3"
                alt=""
              />
              <div className="small-banner-content position-absolute">
                <h4>New Arrival</h4>
                <h5>But IPAD AIR</h5>
                <p>From $9999 or $41.02/mon</p>
              </div>
            </div>

            <div className="small-banner position-relative p-1">
              <img
                src={CatBanner3}
                className="img-fluid rounded-3"
                alt=""
              />
              <div className="small-banner-content position-absolute">
                <h4>New Arrival</h4>
                <h5>But IPAD AIR</h5>
                <p>From $9999 or $41.02/mon</p>
              </div>
            </div>

            <div className="small-banner position-relative p-1">
              <img
                src={CatBanner4}
                className="img-fluid rounded-3"
                alt=""
              />
              <div className="small-banner-content position-absolute">
                <h4>New Arrival</h4>
                <h5>But IPAD AIR</h5>
                <p>From $9999 or $41.02/mon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
