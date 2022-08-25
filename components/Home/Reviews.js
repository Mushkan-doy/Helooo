import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Reviews = () => {
    function Arrow(props) {
        let className = props.type === "next" ? "nextArrow" : "prevArrow";
        className += " arrow";
        const char = props.type === "next" ?  (<i className="bi bi-arrow-right-short"></i>) : (<i className="bi bi-arrow-left-short"></i>);
        return (
          <span className={className} onClick={props.onClick}>
            <span>{char}</span>
          </span>
        );
      }


    return (
        <>
            {/* <!-- ============================ Smart Testimonials ================================== --> */}
            <section className="gray-simple">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-8">
                            <div className="sec-heading center">
                                <h2>Good Reviews By Clients</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="item-slide space">
                                <Slider
                                    nextArrow={<Arrow type="next" />}
                                    prevArrow={<Arrow type="prev" />}
                                    dots={false}
                                    slidesToShow={3}
                                    slidesToScroll={1}
                                    autoplay={true}
                                    autoplaySpeed={3000}
                                >
                                    {/* {renderSlides()} */}
                                

                                    {/* <!-- Single Item --> */}
                                    <div className="single_items">
                                        <div className="_testimonial_wrios">
                                            <div className="_testimonial_flex">
                                                <div className="_testimonial_flex_first">
                                                    <div className="_tsl_flex_thumb">
                                                        <img src="https://via.placeholder.com/500x500" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="_tsl_flex_capst">
                                                        <h5>Susan D. Murphy</h5>
                                                        <div className="_ovr_posts"><span>CEO, Leader</span></div>
                                                        <div className="_ovr_rates"><span><i className="fa fa-star"></i></span>4.7</div>
                                                    </div>
                                                </div>
                                                <div className="_testimonial_flex_first_last">
                                                    <div className="_tsl_flex_thumb">
                                                        <img src="https://via.placeholder.com/120x120" className="img-fluid" alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="facts-detail">
                                                <p>Faucibus tristique felis potenti ultrices ornare rhoncus semper hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in dui.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Single Item --> */}
                                    <div className="single_items">
                                        <div className="_testimonial_wrios">
                                            <div className="_testimonial_flex">
                                                <div className="_testimonial_flex_first">
                                                    <div className="_tsl_flex_thumb">
                                                        <img src="https://via.placeholder.com/500x500" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="_tsl_flex_capst">
                                                        <h5>Maxine E. Gagliardi</h5>
                                                        <div className="_ovr_posts"><span>Apple CEO</span></div>
                                                        <div className="_ovr_rates"><span><i className="fa fa-star"></i></span>4.5</div>
                                                    </div>
                                                </div>
                                                <div className="_testimonial_flex_first_last">
                                                    <div className="_tsl_flex_thumb">
                                                        <img src="https://via.placeholder.com/120x120" className="img-fluid" alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="facts-detail">
                                                <p>Faucibus tristique felis potenti ultrices ornare rhoncus semper hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in dui.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Single Item --> */}
                                    <div className="single_items">
                                        <div className="_testimonial_wrios">
                                            <div className="_testimonial_flex">
                                                <div className="_testimonial_flex_first">
                                                    <div className="_tsl_flex_thumb">
                                                        <img src="https://via.placeholder.com/500x500" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="_tsl_flex_capst">
                                                        <h5>Roy M. Cardona</h5>
                                                        <div className="_ovr_posts"><span>Google Founder</span></div>
                                                        <div className="_ovr_rates"><span><i className="fa fa-star"></i></span>4.9</div>
                                                    </div>
                                                </div>
                                                <div className="_testimonial_flex_first_last">
                                                    <div className="_tsl_flex_thumb">
                                                        <img src="https://via.placeholder.com/120x120" className="img-fluid" alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="facts-detail">
                                                <p>Faucibus tristique felis potenti ultrices ornare rhoncus semper hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in dui.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Single Item --> */}
                                    <div className="single_items">
                                        <div className="_testimonial_wrios">
                                            <div className="_testimonial_flex">
                                                <div className="_testimonial_flex_first">
                                                    <div className="_tsl_flex_thumb">
                                                        <img src="https://via.placeholder.com/500x500" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="_tsl_flex_capst">
                                                        <h5>Dorothy K. Shipton</h5>
                                                        <div className="_ovr_posts"><span>Linkedin Leader</span></div>
                                                        <div className="_ovr_rates"><span><i className="fa fa-star"></i></span>4.7</div>
                                                    </div>
                                                </div>
                                                <div className="_testimonial_flex_first_last">
                                                    <div className="_tsl_flex_thumb">
                                                        <img src="https://via.placeholder.com/120x120" className="img-fluid" alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="facts-detail">
                                                <p>Faucibus tristique felis potenti ultrices ornare rhoncus semper hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in dui.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Single Item --> */}
                                    <div className="single_items">
                                        <div className="_testimonial_wrios">
                                            <div className="_testimonial_flex">
                                                <div className="_testimonial_flex_first">
                                                    <div className="_tsl_flex_thumb">
                                                        <img src="https://via.placeholder.com/500x500" className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="_tsl_flex_capst">
                                                        <h5>Robert P. McKissack</h5>
                                                        <div className="_ovr_posts"><span>CEO, Leader</span></div>
                                                        <div className="_ovr_rates"><span><i className="fa fa-star"></i></span>4.7</div>
                                                    </div>
                                                </div>
                                                <div className="_testimonial_flex_first_last">
                                                    <div className="_tsl_flex_thumb">
                                                        <img src="https://via.placeholder.com/120x120" className="img-fluid" alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="facts-detail">
                                                <p>Faucibus tristique felis potenti ultrices ornare rhoncus semper hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in dui.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
			{/* <!-- ============================ Smart Testimonials End ================================== --> */ }
        </>
    )
}
export default Reviews;