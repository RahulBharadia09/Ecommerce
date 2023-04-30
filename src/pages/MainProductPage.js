import React from "react";
import ReactStars from "react-rating-stars-component";
import FeatureProducts from "./FeatureProducts";
import { Link } from "react-router-dom";
import { useState } from "react";
import ReactImageZoom from "react-image-zoom";
import ColorComponent from "./ColorComponent";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Watch11 from '../images/watch11.jfif'

const MainProductPage = () => {
  const [orderedProduct, setorderedProduct] = useState(true);

  // const props = {
  //   width: 400,
  //   height: 300,
  //   zoomWidth: 600,

  //   img: "../images/watch11.jfif",
  // };

  const copytoclipboard = (text) => {
    console.log("text", text);
    var textfield = document.createElement("textarea");
    textfield.innerText = text;
    document.body.appendChild(textfield);
    textfield.select();
    document.execommand("Copy");
    textfield.remove();
  };

  return (
    <>
      <div className="main-product-wrapper">
        <div className="container mt-5 smokebg">
          <div className="row py-2 ">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <img src={Watch11} alt="" srcset="" />
                </div>
              </div>

              <div className="other-product-img d-flex flex-wrap gap-15">
                <div>
                  <img
                    src={Watch11}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src={Watch11}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="main-product-details whitebg">
                <div className="main-product-title border-bottom">
                  <h4>Lorem ipsum dolor sit amet, consectetur adipisicing.</h4>
                </div>

                <div className="border-bottom main-product-price py-3">
                  <p>$100</p>
                  <div className="d-flex align-items-center gap-15">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className=" mb-0 t-review">(2 review)</p>
                  </div>
                  <a className="linkreview" href="#reviewform">
                    Write a Review
                  </a>
                </div>

                <div className="border-bottom py-3 product-data-details">
                  <div className="d-flex align-items-center    my-2 gap-15">
                    <h4 className="product-heading">Type :- </h4>
                    <p className="product-data">Headset</p>
                  </div>
                  <div className="d-flex align-items-center    my-2 gap-15">
                    <h4 className="product-heading">Brand :- </h4>
                    <p className="product-data">Havells</p>
                  </div>
                  <div className="d-flex align-items-center    my-2 gap-15">
                    <h4 className="product-heading">Category :- </h4>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex align-items-center    my-2 gap-15">
                    <h4 className="product-heading">Tags :- </h4>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex align-items-center    my-2 gap-15">
                    <h4 className="product-heading">SKU :- </h4>
                    <p className="product-data">MNSQUARD</p>
                  </div>
                  <div className="d-flex align-items-center  my-2 gap-15">
                    <h4 className="product-heading">Avaibility :- </h4>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex flex-column mt-2 mb-3 gap-15">
                    <h4 className="product-heading">Size :- </h4>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge text-dark border-1 bg-white border-secondary  border ">
                        S
                      </span>
                      <span className="badge text-dark border-1 bg-white border-secondary border  ">
                        M
                      </span>
                      <span className="badge text-dark border-1 bg-white border-secondary border  ">
                        L
                      </span>
                    </div>
                  </div>

                  <div className="d-flex flex-column mt-2 mb-3 gap-15">
                    <h4 className="product-heading">Color</h4>
                    <ColorComponent />
                  </div>

                  <div className="d-flex flex-row mt-2 mb--3  align-items-center gap-15">
                    <h4 className="product-heading">Quantity</h4>
                    <div className="">
                      <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        style={{ width: "65px" }}
                        className="form-control"
                        min="1"
                        max={5}
                      />
                    </div>
                    <div className=" d-flex align-items-center gap-15">
                      <button
                        type="button"
                        className="gap-15 signup btn btn-outline-success"
                      >
                        Add to Cart
                      </button>
                      <button
                        type="button"
                        className="gap-15 signup btn btn-outline-success"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>

                  <div className="d-flex mt-3 align-items-center gap-15">
                    <div>
                      <a href="">
                        <TbGitCompare className="fs-5" /> Add to Compare
                      </a>
                    </div>
                    <div>
                      <a href="">
                        {" "}
                        <AiOutlineHeart className="fs-5" /> Add to Wishlist
                      </a>
                    </div>
                  </div>

                  <div className="main-product-collapse mt-3">
                    <div
                      className="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                          >
                            Shiiping & Return Policy{" "}
                          </button>
                        </h2>
                        <div
                          id="flush-collapseOne"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingOne"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            Free Shipping and Returns are available on all order{" "}
                            <br />
                            we ship US domestic orders within{" "}
                            <b>5-10 Business Day</b>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                          >
                            Material
                          </button>
                        </h2>
                        <div
                          id="flush-collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingTwo"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nulla fuga perspiciatis dolore nostrum
                            eligendi repellat enim labore possimus provident
                            perferendis iste, tempora, mollitia maxime.
                            Laudantium ducimus fugiat odio adipisci impedit.
                          </div>
                        </div>
                      </div>


                      

                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="flush-headingThree"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                          >
                            Copy Product Link
                          </button>
                        </h2>
                        <div
                          id="flush-collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingThree"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <a
                              href="javascript:void{0};"
                              onClick={() => {
                                copytoclipboard("../images/watch11.jfif");
                              }}
                            >
                              Copy Product Link
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Product Page Description */}
      <div className="MPDescription  pt-4 mb-3">
        <div className="container">
          <div className="row pt-2 smokebg">
            <div className="col-12">
              <h5 className="pb-4">Description</h5>
              <p className="whitebg p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                neque non libero ut tempora voluptate accusamus est excepturi!
                Vel, architecto iure obcaecati distinctio magnam rem deserunt,
                eligendi aperiam, ducimus at libero repudiandae. Fugit
                blanditiis temporibus aperiam totam laborum, reprehenderit
                debitis facilis, at ullam, eius illo? Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Porro dignissimos iusto fuga
                facilis, doloribus rem doloremque et optio maiores provident
                cumque adipisci nesciunt officia tempore eius vel consectetur
                earum at.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Review Comment */}
      <div className="review-section pb-5 pt-2 ">
        <div className="container smokebg py-4">
          <div className="row">
            <div className="col-12">
              <h4 className="mb-3">Reviews</h4>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-15">
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 review</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <Link className="text-dark text-decoration-underline">
                        write a review
                      </Link>
                    </div>
                  )}
                </div>

                {/* Review Form */}
                <div id="reviewform" className="review-form">
                  <h4 className="pt-3">Write a Review</h4>
                  <form className="py-3">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control py-2 "
                        id="exampleInputName"
                        placeholder="Enter Your Name"
                        aria-describedby="NameHelp"
                      />
                    </div>

                    <div className="mb-3">
                      <textarea
                        name="commentarea"
                        id=" commentarea"
                        className="w-100 px-2 form-control"
                        cols="30"
                        rows="5"
                        placeholder="Comment...."
                      ></textarea>
                    </div>
                    <div className="d-flex align-items-center pb-2 gap-15">
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div className="d-flex justify-content-end">
                      <button
                        type="submit"
                        className="btn btn-outline-secondary"
                      >
                        Submit Review
                      </button>
                    </div>
                  </form>
                </div>

                {/* review comments */}
                <div className="reviews mt-1">
                  <div className="review ">
                    <div className="d-flex align-items-center gap-15">
                      <h6 className="mb-0">Rahul Bharadia</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-1">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde vero placeat distinctio similique. Recusandae ullam
                      doloremque repellendus temporibus molestias quasi. Lorem
                      ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                      tempore fuga ab praesentium tenetur nostrum recusandae
                      sint earum exercitationem minima!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main product page feature product */}
      <div className="container mp-featureProduct">
        <div className="row">
          <div className="col-12">
            <FeatureProducts />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainProductPage;
