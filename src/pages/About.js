import React from 'react'
import BlogCard from './BlogCard';
import FeatureProducts from "./FeatureProducts";


const About = () => {
  return (
    <>
      <div className="blog-wrapper home-wrapper py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-2 col-xl-3">
            <div className="mb-3 StoreFilterCate">
              <h6 className="filter-title">Find By Category</h6>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            </div>
            <div className="col-9">
              <BlogCard/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
