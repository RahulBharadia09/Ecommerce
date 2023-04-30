import React from "react";
import { AiOutlineHome } from "react-icons/ai";

const FormContact = () => {
  return (
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-5  py-2 contactbg">
          <h4>Contact Us</h4>

          <form className="py-3">
            <div className="mb-3">
              <input
                type="email"
                className="form-control py-2 "
                id="exampleInputEmail1"
                placeholder="Enter Your Name"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control py-2 "
                id="exampleInputEmail1"
                placeholder="Enter Your Mail Id"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <input
                type="number"
                className="form-control py-2 "
                id="exampleInputEmail1"
                placeholder="Enter Your Mobile Number"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <input
                type="textarea"
                className="form-control py-2 "
                id="exampleInputEmail1"
                placeholder="Comment"
                aria-describedby="emailHelp"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        <div className="col-5 contactlist ps-0">
          <h4>Get in Touch With Us </h4>
          <ul className="ps-0">
            <li>
              <AiOutlineHome />
              <span className="p-2 fs-5">
                C/03 Shri Nikten Apt Shri Padnagar Ichalkaranji
              </span>
            </li>
            <li>
              <AiOutlineHome />
              <span className="p-2 fs-5 ">
                C/03 Shri Nikten Apt Shri Padnagar Ichalkaranji
              </span>
            </li>
            <li>
              <AiOutlineHome />
              <span className="p-2 fs-5">
                C/03 Shri Nikten Apt Shri Padnagar Ichalkaranji
              </span>
            </li>
            <li>
              <AiOutlineHome />
              <span className="p-2 fs-5">
                C/03 Shri Nikten Apt Shri Padnagar Ichalkaranji
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FormContact;
