import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer-signnnup d-flex justify-content-end">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex align-items-center  gap-15 py-3">
              <img src="images/newsletter.png" alt="" />
              <span>
                <h5 className="text-white">Sign Up for News Letter</h5>
              </span>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 py-3">
              <div>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control py-2"
                    placeholder="Your Email Id"
                    aria-label="Your Email Id"
                    aria-describedby="basic-addon2"
                  />
                  <span className="input-group-text py-2" id="basic-addon2">
                   Subscribe 
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="footer-info p-3">
        <div className="container-xxl d-flex justify-content-center">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 col-xl-3 text-white">
              <h5 className="text-center">Contact Us</h5>
              <p>C/03 Shri Nikten Apt Shri Padnagar Ichalakranji , 416115</p>
              <p>+91 9172185204</p>
              
              <p>rahulbharadia917@gmail.com</p>
              <div className="d-flex align-items-center gap-10">
               <Link to="/">
                  <i className=" text-white fa-brands fa-instagram"></i>
               </Link>
               <Link to="/">
                  <i className=" text-white fa-brands fa-twitter"></i>
               </Link>
               <Link to="/">
                  <i className=" text-white fa-brands fa-facebook"></i>
               </Link>
               <Link to="/">
                  <i className=" text-white fa-brands fa-youtube"></i>
               </Link>
               <Link to="/">
                  <i className=" text-white fa-brands fa-pinterest"></i>
               </Link>
                
              </div>
            </div>
           
            <div className="col-12 col-md-6 col-lg-2 col-xl-2 text-white">
              <h5 className="text-center">Information</h5>
            <div className="footer-Links d-flex flex-column">
              <Link to="privacypolicy" className="text-white">
              <p>Privacy Policy</p>
              </Link>
              <Link to="refundpolicy" className="text-white">
              <p>Refund Policy</p>
              </Link >
              <Link to="shippingpolicy" className="text-white">
              <p>Shipping Policy</p>
              </Link>
              <Link to="termofservices" className="text-white">
              <p>Terms Of Services</p>
              </Link>
              <Link to="about" className="text-white">
              <p>Blogs</p>
              </Link>
              </div>
              
            </div>
            
            <div className="col-12 col-md-6 col-lg-2 col-xl-2 text-white">
            <h5 className="text-center">Account</h5>
            <div className="footer-Links d-flex flex-column">
              <Link className="text-white">
              <p>Search</p>
              </Link>
              <Link className="text-white">
              <p>About Us</p>
              </Link>
              <Link className="text-white">
              <p>FAQ</p>
              </Link>
              <Link className="text-white">
              <p>Contact</p>
              </Link>
              <Link className="text-white">
              <p>Size Chart</p>
              </Link>
              </div>
            </div>
            
            <div className="col-12 col-md-6 col-lg-2 col-xl-2 text-white">
            <h5 className="text-center">Quick Links</h5>
            <div className="footer-Links d-flex flex-column">
              <Link className="text-white ">
              <p>Accessories</p>
              </Link>
              <Link className="text-white ">
              <p>Laptops</p>
              </Link>
              <Link className="text-white ">
              <p>Headphone</p>
              </Link>
              <Link className="text-white ">
              <p>Smart Watches</p>
              </Link>
              <Link className="text-white ">
              <p>Tablets</p>
              </Link>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-2 col-xl-2 text-white">
          <h5 className="text-center">Our App</h5>
              <p>Download our app and get 15% discount on yout first order</p>
              <span>
                <img src="images/" alt="" />
              </span>
          </div>
          </div>

         

        </div>
      </footer>


      <footer className="footer-info3">
          <div className="col-12 text-white p-2 text-center">
            <p>&copy;  {new Date().getFullYear()} : Designed By Rahul Bharadia</p>
          </div>
      </footer>
    </>
  );
};

export default Footer;
