import React from "react";
import CameraIMG from "../images/camera.jpg";
import AccIMG from '../images/acc.jpg'
import HeadphoneIMG from '../images/headphone.jpg'
import HomeApp from '../images/homeapp.jpg'
import LaptopIMG from '../images/laptop.jpg'
import SpeakerIMG from '../images/speaker.jpg'
import TVIMG from '../images/tv.jpg'
const Category = () => {
  return (
    <div className="container">
      <div className="row py-4">
        <div className="col-12 col-md-12 col-lg-12 col-xl-12 categories flex-wrap justify-content-between d-flex  align-items-center">
          <div className="d-flex align-items-center">
            <div>
              <h5>Camera</h5>
              <p>100 Items</p>
            </div>
            <img src={CameraIMG} alt="Camera-Image" />
          </div>
          <div className="d-flex align-items-center">
            <div>
              <h5>Camera</h5>
              <p>100 Items</p>
            </div>
            <img src={AccIMG} alt="" />
          </div>
          <div className="d-flex align-items-center">
            <div>
              <h5>Camera</h5>
              <p>100 Items</p>
            </div>
            <img src={HeadphoneIMG} alt="" />
          </div>
          <div className="d-flex align-items-center">
            <div>
              <h5>Camera</h5>
              <p>100 Items</p>
            </div>
            <img src={HomeApp} alt="" />
          </div>
          <div className="d-flex align-items-center">
            <div>
              <h5>Camera</h5>
              <p>100 Items</p>
            </div>
            <img src={LaptopIMG}alt="" />
          </div>

          <div className="d-flex align-items-center">
            <div>
              <h5>Camera</h5>
              <p>100 Items</p>
            </div>
            <img src={SpeakerIMG} alt="" />
          </div>
          <div className="d-flex align-items-center">
            <div>
              <h5>Camera</h5>
              <p>100 Items</p>
            </div>
            <img src={TVIMG} alt="" />
          </div>
          <div className="d-flex align-items-center">
            <div>
              <h5>Camera</h5>
              <p>100 Items</p>
            </div>
            <img src={TVIMG} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
