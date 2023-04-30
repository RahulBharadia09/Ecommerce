import React from 'react'
import IphoneImg from '../images/iphone14.jfif'

const LatestProduct = () => {
  return (
    <div className="container py-2">
        <div className="row ">
            <h4 className='pb-2'>Our New Arrival</h4>
            <div className="col-6 col-md-6 col-lg-3  whitebg mb-4 border-end   py-1">
                <div className='pb-4'>
                    <img src={IphoneImg}  width={"100%"}alt="" />
                </div>
                <p className='text-dark'>Lorem ipsu</p>
                <h4 className='text-dark'>Smart Watch Series 7</h4>
                <p className='text-dark'>Lorem ipsum </p>
            </div>
            <div className="col-6 col-md-6 col-lg-3  whitebg mb-4 border-end py-1">
                <div className='pb-4'>
                    <img src={IphoneImg}  width={"100%"}alt="" />
                </div>
                <p className='text-dark'>Lorem ipsu</p>
                <h4 className='text-dark'>Smart Watch Series 7</h4>
                <p className='text-dark'>Lorem ipsum </p>
            </div>
            <div className="col-6 col-md-6 col-lg-3  whitebg mb-4 border-end py-1">
                <div className='pb-4'>
                    <img src={IphoneImg}  width={"100%"}alt="" />
                </div>
                <p className='text-dark'>Lorem ipsu</p>
                <h4 className='text-dark'>Smart Watch Series 7</h4>
                <p className='text-dark'>Lorem ipsum </p>
            </div>
            <div className="col-6 col-md-6 col-lg-3  whitebg mb-4 border-end py-1">
                <div className='pb-4'>
                    <img src={IphoneImg}  width={"100%"}alt="" />
                </div>
                <p className='text-dark'>Lorem ipsu</p>
                <h4 className='text-dark'>Smart Watch Series 7</h4>
                <p className='text-dark'>Lorem ipsum </p>
            </div>
        </div>
    </div>
  )
}

export default LatestProduct
