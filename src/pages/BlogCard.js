import React from "react";
import { Link } from "react-router-dom";
import blog1 from '../images/blog-1.jpg'

const BlogCard = () => {
  return (
    <div className="container   py-4">
      <div className="row">
        <h4 className="pb-2"> Blogs...</h4>
        <div className=" col-6 col-md-3 col-lg-3 col-xl-3">
          <div className="card">
            <img src={blog1} className="card-img-top rounded-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/blog:id" className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>

        <div className="  col-6 col-md-3 col-lg-3 col-xl-3">
          <div className="card">
            <img src={blog1} className="card-img-top rounded-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/" className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>

        <div className="  col-6 col-md-3 col-lg-3 col-xl-3">
          <div className="card">
            <img src={blog1} className="card-img-top rounded-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/" className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>

        <div className=" col-6 col-md-3 col-lg-3 col-xl-3">
          <div className="card">
            <img src={blog1} className="card-img-top rounded-top p-2" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/" className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
