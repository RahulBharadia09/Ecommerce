import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";

const SingleBlogPage = () => {
  return (
    <div>
      <div className="singelblog smokebg">
        <div className="container">
          <div className="row">
            <div className="col-2 py-4">
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
            </div>

            <div className="col-9 py-4  ">
              <div className="single-blog-page whitebg">
                <h3 className="title pb-3 ">A Beautiful sunday Morning</h3>
                <div className="pb-3">
                  <img src="images/blog-1.jpg" className="img-fluid w-100" alt="" />
                </div>

                <p className="singleinfo" >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  alias maxime sint, debitis quibusdam velit laboriosam sequi
                  rerum nisi quod iusto facere, quaerat tempore excepturi quam
                  id. Itaque laborum nesciunt natus, velit debitis illum sint
                  recusandae voluptates ad quidem quis eligendi officia, ab
                  facere aliquid. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Commodi officiis dolores consequuntur harum
                  suscipit temporibus ipsum, quod voluptates ullam quibusdam
                  laborum tenetur earum asperiores nobis.
                </p>

                <div className="d-flex gap-15">
                  <p>11 June 2002</p>
                  <p>Rahul kumar</p>
                </div>
              </div>

              <div className=" d-flex justify-content-between  border-top border-bottom py-2">
                <Link to="/about"><p className="text-dark py-1">&larr; Back to Blog</p></Link>
                <div className="d-flex align-items-center gap-10">
               <Link to="/">
                  <i className=" text-dark fa-brands fa-instagram"></i>
               </Link>
               <Link to="/">
                  <i className=" text-dark fa-brands fa-twitter"></i>
               </Link>
               <Link to="/">
                  <i className=" text-dark fa-brands fa-facebook"></i>
               </Link>
               <Link to="/">
                  <i className=" text-dark fa-brands fa-youtube"></i>
               </Link>
               <Link to="/">
                  <i className=" text-dark fa-brands fa-pinterest"></i>
               </Link>
                
              </div>   



              </div>
              <div className="leave-a-comment py-4 whitebgx">
                <h4>Leave a Comment</h4>
                <div className="">

                <form className="">
  <div class="mb-3 ">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
                </div>           
              

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
