import React from "react";
import { Carousel } from "react-responsive-carousel";
import img1 from '../../assets/img/hoime.jpeg';
import img2 from '../../assets/img/download.jpeg';
import img3 from '../../assets/img/Home.jpeg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
const Featured = () => {
    return (
        <>
            {/* <!-- ============================ Properties Start ================================== --> */}
            <section className="pt-0 min">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-8">
                            <div className="sec-heading center">
                                <h2>Featured Listed Property</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        {/* <!-- Single Property --> */}
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="property-listing property-2">

                                <div className="listing-img-wrapper">
                                    <div className="_exlio_125">For Rent</div>
                                    <div className="list-img-slide">
                                        <div className="click">
                                            <Slider
                                            dots={true}
                                            autoplay={true}
                                            autoplaySpeed={3000}
                                            slidesToShow={1}
                                            slidesToScroll={1}
                                            prevArrow={false}
                                            nextArrow={false}>                                                
                                                <div><a href="single-property-1.html"><img src={img1} className="img-fluid mx-auto" alt="" /></a></div>
                                                <div><a href="single-property-1.html"><img src={img2} className="img-fluid mx-auto" alt="" /></a></div>
                                                <div><a href="single-property-1.html"><img src={img3} className="img-fluid mx-auto" alt="" /></a></div>
                                            </Slider>
                                        </div>
                                    </div>
                                </div>

                                <div className="listing-detail-wrapper">
                                    <div className="listing-short-detail-wrap">
                                        <div className="_card_list_flex mb-2">
                                            <div className="_card_flex_01">
                                                <span className="_list_blickes _netork">4 Network</span>
                                                <span className="_list_blickes types">Condos</span>
                                            </div>
                                            <div className="_card_flex_last">
                                                <h6 className="listing-card-info-price mb-0">$6,700</h6>
                                            </div>
                                        </div>
                                        <div className="_card_list_flex">
                                            <div className="_card_flex_01">
                                                <h4 className="listing-name verified"><a href="single-property-1.html" className="prt-link-detail">7012 Shine Sehu Street, Liverpool London, LC345AC</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="price-features-wrapper">
                                    <div className="list-fx-features">
                                        <div className="listing-card-info-icon">
                                            <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width="13" alt="" /></div>4 Beds
                                        </div>
                                        <div className="listing-card-info-icon">
                                            <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width="13" alt="" /></div>2 Bath
                                        </div>
                                        <div className="listing-card-info-icon">
                                            <div className="inc-fleat-icon"><img src="assets/img/move.svg" width="13" alt="" /></div>820 sqft
                                        </div>
                                    </div>
                                </div>

                                <div className="listing-detail-footer">
                                    <div className="footer-first">
                                        <div className="foot-location"><img src="assets/img/pin.svg" width="18" alt="" />Montreal, Canada</div>
                                    </div>
                                    <div className="footer-flex">
                                        <ul className="selio_style">
                                            <li>
                                                <div className="prt_saveed_12lk">
                                                    <label className="toggler toggler-danger" data-toggle="tooltip" data-placement="top" data-original-title="Save property"><input type="checkbox" /><i className="ti-heart"></i></label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="prt_saveed_12lk">
                                                    <a href="compare-property.html" data-toggle="tooltip" data-placement="top" data-original-title="Compare property"><i className="ti-control-shuffle"></i></a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="prt_saveed_12lk">
                                                    <a href="single-property-1.html" data-toggle="tooltip" data-placement="top" data-original-title="View Property"><i className="ti-arrow-right"></i></a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* <!-- End Single Property --> */}

                        {/* <!-- Single Property --> */}
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="property-listing property-2">

                                <div className="listing-img-wrapper">
                                    <div className="_exlio_125">For Sale</div>
                                    <div className="list-img-slide">
                                        <div className="click">
                                        <Slider
                                            dots={true}
                                            autoplay={true}
                                            autoplaySpeed={3000}
                                            slidesToShow={1}
                                            slidesToScroll={1}
                                            prevArrow={false}
                                            nextArrow={false}>                                                
                                                <div><a href="single-property-1.html"><img src={img1} className="img-fluid mx-auto" alt="" /></a></div>
                                                <div><a href="single-property-1.html"><img src={img2} className="img-fluid mx-auto" alt="" /></a></div>
                                                <div><a href="single-property-1.html"><img src={img3} className="img-fluid mx-auto" alt="" /></a></div>
                                            </Slider>
                                        </div>
                                    </div>
                                </div>

                                <div className="listing-detail-wrapper">
                                    <div className="listing-short-detail-wrap">
                                        <div className="_card_list_flex mb-2">
                                            <div className="_card_flex_01">
                                                <span className="_list_blickes _netork">5 Network</span>
                                                <span className="_list_blickes types">Apartment</span>
                                            </div>
                                            <div className="_card_flex_last">
                                                <h6 className="listing-card-info-price mb-0">$6,900</h6>
                                            </div>
                                        </div>
                                        <div className="_card_list_flex">
                                            <div className="_card_flex_01">
                                                <h4 className="listing-name verified"><a href="single-property-1.html" className="prt-link-detail">425 Vine 012 Street, Montreal Canada, UHW45Q</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="price-features-wrapper">
                                    <div className="list-fx-features">
                                        <div className="listing-card-info-icon">
                                            <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width="13" alt="" /></div>4 Beds
                                        </div>
                                        <div className="listing-card-info-icon">
                                            <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width="13" alt="" /></div>2 Bath
                                        </div>
                                        <div className="listing-card-info-icon">
                                            <div className="inc-fleat-icon"><img src="assets/img/move.svg" width="13" alt="" /></div>700 sqft
                                        </div>
                                    </div>
                                </div>

                                <div className="listing-detail-footer">
                                    <div className="footer-first">
                                        <div className="foot-location"><img src="assets/img/pin.svg" width="18" alt="" />Montreal, Canada</div>
                                    </div>
                                    <div className="footer-flex">
                                        <ul className="selio_style">
                                            <li>
                                                <div className="prt_saveed_12lk">
                                                    <label className="toggler toggler-danger" data-toggle="tooltip" data-placement="top" data-original-title="Save property"><input type="checkbox" /><i className="ti-heart"></i></label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="prt_saveed_12lk">
                                                    <a href="compare-property.html" data-toggle="tooltip" data-placement="top" data-original-title="Compare property"><i className="ti-control-shuffle"></i></a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="prt_saveed_12lk">
                                                    <a href="single-property-1.html" data-toggle="tooltip" data-placement="top" data-original-title="View Property"><i className="ti-arrow-right"></i></a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* <!-- End Single Property --> */}

                        {/* <!-- Single Property --> */}
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="property-listing property-2">

                                <div className="listing-img-wrapper">
                                    <div className="_exlio_125">For Rent</div>
                                    <div className="list-img-slide">
                                        <div className="click">
                                            <Slider
                                            dots={true}
                                            autoplay={true}
                                            autoplaySpeed={3000}
                                            slidesToShow={1}
                                            slidesToScroll={1}
                                            prevArrow={false}
                                            nextArrow={false}>                                                
                                                <div><a href="single-property-1.html"><img src={img1} className="img-fluid mx-auto" alt="" /></a></div>
                                                <div><a href="single-property-1.html"><img src={img2} className="img-fluid mx-auto" alt="" /></a></div>
                                                <div><a href="single-property-1.html"><img src={img3} className="img-fluid mx-auto" alt="" /></a></div>
                                            </Slider>
                                        </div>
                                    </div>
                                </div>

                                <div className="listing-detail-wrapper">
                                    <div className="listing-short-detail-wrap">
                                        <div className="_card_list_flex mb-2">
                                            <div className="_card_flex_01">
                                                <span className="_list_blickes _netork">4 Network</span>
                                                <span className="_list_blickes types">Villas</span>
                                            </div>
                                            <div className="_card_flex_last">
                                                <h6 className="listing-card-info-price mb-0">$8,500</h6>
                                            </div>
                                        </div>
                                        <div className="_card_list_flex">
                                            <div className="_card_flex_01">
                                                <h4 className="listing-name verified"><a href="single-property-1.html" className="prt-link-detail">1244 Vansh Market, Mise Mizkel Australia, AU456HA</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="price-features-wrapper">
                                    <div className="list-fx-features">
                                        <div className="listing-card-info-icon">
                                            <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width="13" alt="" /></div>3 Beds
                                        </div>
                                        <div className="listing-card-info-icon">
                                            <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width="13" alt="" /></div>2 Bath
                                        </div>
                                        <div className="listing-card-info-icon">
                                            <div className="inc-fleat-icon"><img src="assets/img/move.svg" width="13" alt="" /></div>800 sqft
                                        </div>
                                    </div>
                                </div>

                                <div className="listing-detail-footer">
                                    <div className="footer-first">
                                        <div className="foot-location"><img src="assets/img/pin.svg" width="18" alt="" />Montreal, Canada</div>
                                    </div>
                                    <div className="footer-flex">
                                        <ul className="selio_style">
                                            <li>
                                                <div className="prt_saveed_12lk">
                                                    <label className="toggler toggler-danger" data-toggle="tooltip" data-placement="top" data-original-title="Save property"><input type="checkbox" /><i className="ti-heart"></i></label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="prt_saveed_12lk">
                                                    <a href="compare-property.html" data-toggle="tooltip" data-placement="top" data-original-title="Compare property"><i className="ti-control-shuffle"></i></a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="prt_saveed_12lk">
                                                    <a href="single-property-1.html" data-toggle="tooltip" data-placement="top" data-original-title="View Property"><i className="ti-arrow-right"></i></a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* <!-- End Single Property -->						 */}
                    </div>

                </div>
            </section>
            {/* <!-- ============================ Properties End ================================== --> */}
        </>
    )
}
export default Featured;