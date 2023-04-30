import React from 'react'
import ColorComponent from './ColorComponent';
import CrossSVG from '../images/cross.svg';
import WatchImage from '../images/watch.jpg'

const CompareProductCardDesign = () => {
  return (
    <div>
        <div className="compare-product-card position-relative">
              <img
                src={CrossSVG}
                alt=""
                className="position-absolute cross img-fluid"
              />
              <div className="compareproductimg">
                <img src={WatchImage} alt="" />
              </div>

              <div className="product-details">
                <h4 className="title">Lorem ipsum dolor sit.</h4>
                <h6 className="price">$100</h6>

                <div>
                    <div className="product-brand-details">
                        <h5>Brand</h5>
                        <p>Havels</p>
                    </div>
                    <div className="product-brand-details">
                        <h5>Type</h5>
                        <p>Tablet Computers</p>
                    </div>
                    <div className="product-brand-details">
                        <h5>SKU</h5>
                        <p>SKU033</p>
                    </div>
                    <div className="product-brand-details">
                        <h5>Availibilty</h5>
                        <p>In stock</p>
                    </div>
                    <div className="product-brand-details">
                        <h5>Color</h5>
                        <ColorComponent/>
                    </div>
                    <div className="product-brand-details">
                        <h5>Size</h5>
                        <div className="d-flex gap-15">
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
      
    </div>
  )
}

export default CompareProductCardDesign
