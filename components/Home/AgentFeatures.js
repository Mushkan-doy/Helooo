import React from "react";
import verified from '../../assets/img/verified.svg';
import boy from '../../assets/img/boy.png';
import girl from '../../assets/img/girl.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const AgentFeatures = () => {
    function ArrowCard(props) {
        let className = props.type === "next" ? "nextArrowCard" : "prevArrowCard";
        className += " arrowCard";
        const char = props.type === "next" ? (<i className="bi bi-arrow-right-short"></i>) : (<i className="bi bi-arrow-left-short"></i>);
        return (
          <span className={className} onClick={props.onClick}>
            <span>{char}</span>
          </span>
        );
      }
    return (
        <>
            {/* <!-- ============================ Top Agents ================================== --> */}
            <section className="image-cover min" style={{ "background": "#122947 url(assets/img/pattern.png) no-repeat" }}>
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-8">
                            <div className="sec-heading center light">
                                <h2>Our Featured Agents</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="item-slide space">
                                <Slider
                                nextArrow={<ArrowCard type="next" />}
                                prevArrow={<ArrowCard type="prev" />}
                                dots={false}
                                slidesToShow={3}
                                slidesToScroll={1}
                                autoplay={true}
                                autoplaySpeed={3000}
                                >
                                    {/* <!-- Single Item --> */}
                                    <div className="single_items">
                                        <div className="grid_agents">
                                            <div className="elio_mx_list theme-bg-2">102 Listings</div>
                                            <div className="grid_agents-wrap">

                                                <div className="fr-grid-thumb">
                                                    <a href="agent-page.html">
                                                        <span className="verified"><img src={verified} className="verify mx-auto" alt="" /></span>
                                                        <img src={boy} className="img-fluid mx-auto" alt="" />
                                                    </a>
                                                </div>

                                                <div className="fr-grid-deatil">
                                                    <span><i className="ti-location-pin mr-1"></i>Montreal, USA</span>
                                                    <h5 className="fr-can-name"><a href="agent-page.html">Adam K. Jollio</a></h5>
                                                    <ul className="inline_social">
                                                        <li><a href="#" className="fb"><i className="ti-facebook"></i></a></li>
                                                        <li><a href="#" className="ln"><i className="ti-linkedin"></i></a></li>
                                                        <li><a href="#" className="ins"><i className="ti-instagram"></i></a></li>
                                                        <li><a href="#" className="tw"><i className="ti-twitter"></i></a></li>
                                                    </ul>
                                                </div>

                                                <div className="fr-infos-deatil">
                                                    <a href="#" data-toggle="modal" data-target="#autho-message" className="btn agent-btn theme-bg"><i className="fa fa-envelope mr-2"></i>Message</a>
                                                    <a href="#" className="btn agent-btn theme-black"><i className="fa fa-phone"></i></a>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                    {/* <!-- Single Item --> */}
                                    <div className="single_items">
                                        <div className="grid_agents">
                                            <div className="elio_mx_list theme-bg-2">72 Listings</div>
                                            <div className="grid_agents-wrap">

                                                <div className="fr-grid-thumb">
                                                    <a href="agent-page.html">
                                                        <span className="verified"><img src={verified} className="verify mx-auto" alt="" /></span>
                                                        <img src={girl} className="img-fluid mx-auto" alt="" />
                                                    </a>
                                                </div>

                                                <div className="fr-grid-deatil">
                                                    <span><i className="ti-location-pin mr-1"></i>Liverpool, Canada</span>
                                                    <h5 className="fr-can-name"><a href="agent-page.html">Sargam S. Singh</a></h5>
                                                    <ul className="inline_social">
                                                        <li><a href="#" className="fb"><i className="ti-facebook"></i></a></li>
                                                        <li><a href="#" className="ln"><i className="ti-linkedin"></i></a></li>
                                                        <li><a href="#" className="ins"><i className="ti-instagram"></i></a></li>
                                                        <li><a href="#" className="tw"><i className="ti-twitter"></i></a></li>
                                                    </ul>
                                                </div>

                                                <div className="fr-infos-deatil">
                                                    <a href="#" data-toggle="modal" data-target="#autho-message" className="btn agent-btn theme-bg"><i className="fa fa-envelope mr-2"></i>Message</a>
                                                    <a href="#" className="btn agent-btn theme-black"><i className="fa fa-phone"></i></a>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                    {/* <!-- Single Item --> */}
                                    <div className="single_items">
                                        <div className="grid_agents">
                                            <div className="elio_mx_list theme-bg-2">22 Listings</div>
                                            <div className="grid_agents-wrap">

                                                <div className="fr-grid-thumb">
                                                    <a href="agent-page.html">
                                                        <span className="verified"><img src={verified} className="verify mx-auto" alt="" /></span>
                                                        <img src={boy} className="img-fluid mx-auto" alt="" />
                                                    </a>
                                                </div>

                                                <div className="fr-grid-deatil">
                                                    <span><i className="ti-location-pin mr-1"></i>Montreal, Canada</span>
                                                    <h5 className="fr-can-name"><a href="agent-page.html">Harijeet M. Siller</a></h5>
                                                    <ul className="inline_social">
                                                        <li><a href="#" className="fb"><i className="ti-facebook"></i></a></li>
                                                        <li><a href="#" className="ln"><i className="ti-linkedin"></i></a></li>
                                                        <li><a href="#" className="ins"><i className="ti-instagram"></i></a></li>
                                                        <li><a href="#" className="tw"><i className="ti-twitter"></i></a></li>
                                                    </ul>
                                                </div>

                                                <div className="fr-infos-deatil">
                                                    <a href="#" data-toggle="modal" data-target="#autho-message" className="btn agent-btn theme-bg"><i className="fa fa-envelope mr-2"></i>Message</a>
                                                    <a href="#" className="btn agent-btn theme-black"><i className="fa fa-phone"></i></a>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    {/* <!-- Single Item --> */}
                                    <div className="single_items">
                                        <div className="grid_agents">
                                            <div className="elio_mx_list theme-bg-2">50 Listings</div>
                                            <div className="grid_agents-wrap">

                                                <div className="fr-grid-thumb">
                                                    <a href="agent-page.html">
                                                        <span className="verified"><img src={verified} className="verify mx-auto" alt="" /></span>
                                                        <img src={girl} className="img-fluid mx-auto" alt="" />
                                                    </a>
                                                </div>

                                                <div className="fr-grid-deatil">
                                                    <span><i className="ti-location-pin mr-1"></i>Denever, USA</span>
                                                    <h5 className="fr-can-name"><a href="agent-page.html">Anna K. Young</a></h5>
                                                    <ul className="inline_social">
                                                        <li><a href="#" className="fb"><i className="ti-facebook"></i></a></li>
                                                        <li><a href="#" className="ln"><i className="ti-linkedin"></i></a></li>
                                                        <li><a href="#" className="ins"><i className="ti-instagram"></i></a></li>
                                                        <li><a href="#" className="tw"><i className="ti-twitter"></i></a></li>
                                                    </ul>
                                                </div>

                                                <div className="fr-infos-deatil">
                                                    <a href="#" data-toggle="modal" data-target="#autho-message" className="btn agent-btn theme-bg"><i className="fa fa-envelope mr-2"></i>Message</a>
                                                    <a href="#" className="btn agent-btn theme-black"><i className="fa fa-phone"></i></a>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    {/* <!-- Single Item --> */}
                                    <div className="single_items">
                                        <div className="grid_agents">
                                            <div className="elio_mx_list theme-bg-2">42 Listings</div>
                                            <div className="grid_agents-wrap">

                                                <div className="fr-grid-thumb">
                                                    <a href="agent-page.html">
                                                        <span className="verified"><img src={verified} className="verify mx-auto" alt="" /></span>
                                                        <img src={boy} className="img-fluid mx-auto" alt="" />
                                                    </a>
                                                </div>

                                                <div className="fr-grid-deatil">
                                                    <span><i className="ti-location-pin mr-1"></i>2272 Briarwood Drive</span>
                                                    <h5 className="fr-can-name"><a href="agent-page.html">Michael P. Grimaldo</a></h5>
                                                    <ul className="inline_social">
                                                        <li><a href="#" className="fb"><i className="ti-facebook"></i></a></li>
                                                        <li><a href="#" className="ln"><i className="ti-linkedin"></i></a></li>
                                                        <li><a href="#" className="ins"><i className="ti-instagram"></i></a></li>
                                                        <li><a href="#" className="tw"><i className="ti-twitter"></i></a></li>
                                                    </ul>
                                                </div>

                                                <div className="fr-infos-deatil">
                                                    <a href="#" data-toggle="modal" data-target="#autho-message" className="btn agent-btn theme-bg"><i className="fa fa-envelope mr-2"></i>Message</a>
                                                    <a href="#" className="btn agent-btn theme-black"><i className="fa fa-phone"></i></a>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    {/* <!-- Single Item --> */}
                                    <div className="single_items">
                                        <div className="grid_agents">
                                            <div className="elio_mx_list theme-bg-2">42 Listings</div>
                                            <div className="grid_agents-wrap">

                                                <div className="fr-grid-thumb">
                                                    <a href="agent-page.html">
                                                        <span className="verified"><img src={verified} className="verify mx-auto" alt="" /></span>
                                                        <img src={girl} className="img-fluid mx-auto" alt="" />
                                                    </a>
                                                </div>

                                                <div className="fr-grid-deatil">
                                                    <span><i className="ti-location-pin mr-1"></i>2272 Briarwood Drive</span>
                                                    <h5 className="fr-can-name"><a href="agent-page.html">Michael P. Grimaldo</a></h5>
                                                    <ul className="inline_social">
                                                        <li><a href="#" className="fb"><i className="ti-facebook"></i></a></li>
                                                        <li><a href="#" className="ln"><i className="ti-linkedin"></i></a></li>
                                                        <li><a href="#" className="ins"><i className="ti-instagram"></i></a></li>
                                                        <li><a href="#" className="tw"><i className="ti-twitter"></i></a></li>
                                                    </ul>
                                                </div>

                                                <div className="fr-infos-deatil">
                                                    <a href="#" data-toggle="modal" data-target="#autho-message" className="btn agent-btn theme-bg"><i className="fa fa-envelope mr-2"></i>Message</a>
                                                    <a href="#" className="btn agent-btn theme-black"><i className="fa fa-phone"></i></a>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* <!-- ============================ Top Agents End ================================== --> */}
        </>
    )
}
export default AgentFeatures;