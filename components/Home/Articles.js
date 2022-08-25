import React from "react";

const Articles = () => {
    return (
        <>
            {/* <!-- ============================ article Start ================================== --> */}
            <section className="min">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-8">
                            <div className="sec-heading center">
                                <h2>Latest News & Articles</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">

                        {/* <!-- Single blog Grid --> */}
                        <div className="col-lg-4 col-md-6">
                            <div className="grid_blog_box">

                                <div className="gtid_blog_thumb">
                                    <a href="blog-detail.html"><img src="https://via.placeholder.com/1200x740" className="img-fluid" alt="" /></a>
                                    <div className="gtid_blog_info"><span>12</span>Sep 2021</div>
                                </div>

                                <div className="blog-body">
                                    <h4 className="bl-title"><a href="blog-detail.html">Creative Designs</a><span className="latest_new_post">New</span></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
                                </div>

                                <div className="modern_property_footer">
                                    <div className="property-author">
                                        <div className="path-img"><a href="agent-page.html" tabIndex="-1"><img src="https://via.placeholder.com/500x500" className="img-fluid" alt="" /></a></div>
                                        <h5><a href="agent-page.html" tabIndex="-1">Shaurya Preet</a></h5>
                                    </div>
                                    <span className="article-pulish-date"><i className="ti-comment-alt mr-2"></i>202</span>
                                </div>

                            </div>
                        </div>

                        {/* <!-- Single blog Grid --> */}
                        <div className="col-lg-4 col-md-6">
                            <div className="grid_blog_box">

                                <div className="gtid_blog_thumb">
                                    <a href="blog-detail.html"><img src="https://via.placeholder.com/1200x740" className="img-fluid" alt="" /></a>
                                    <div className="gtid_blog_info"><span>15</span>Aug 2021</div>
                                </div>

                                <div className="blog-body">
                                    <h4 className="bl-title"><a href="blog-detail.html">UX/UI Developer</a><span className="latest_new_post hot">Hot</span></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
                                </div>

                                <div className="modern_property_footer">
                                    <div className="property-author">
                                        <div className="path-img"><a href="agent-page.html" tabIndex="-1"><img src="https://via.placeholder.com/500x500" className="img-fluid" alt="" /></a></div>
                                        <h5><a href="agent-page.html" tabIndex="-1">Nirgam Singh</a></h5>
                                    </div>
                                    <span className="article-pulish-date"><i className="ti-comment-alt mr-2"></i>407</span>
                                </div>

                            </div>
                        </div>

                        {/* <!-- Single blog Grid --> */}
                        <div className="col-lg-4 col-md-6">
                            <div className="grid_blog_box">

                                <div className="gtid_blog_thumb">
                                    <a href="blog-detail.html"><img src="https://via.placeholder.com/1200x740" className="img-fluid" alt="" /></a>
                                    <div className="gtid_blog_info"><span>27</span>Nov 2021</div>
                                </div>

                                <div className="blog-body">
                                    <h4 className="bl-title"><a href="blog-detail.html">WordPress Developer & UI</a><span className="latest_new_post">New</span></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
                                </div>

                                <div className="modern_property_footer">
                                    <div className="property-author">
                                        <div className="path-img"><a href="agent-page.html" tabIndex="-1"><img src="https://via.placeholder.com/500x500" className="img-fluid" alt="" /></a></div>
                                        <h5><a href="agent-page.html" tabIndex="-1">Dhananjay Singh</a></h5>
                                    </div>
                                    <span className="article-pulish-date"><i className="ti-comment-alt mr-2"></i>410</span>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <div className="clearfix"></div>
            {/* <!-- ============================ article End ================================== --> */}
        </>
    )
}
export default Articles;