import React from "react";

const PropertyList = () =>{
    return(
        <>
        {/* <!-- ============================ Property By Location ================================== --> */}
			<section className="min">
				<div className="container">
				
					<div className="row justify-content-center">
						<div className="col-lg-7 col-md-8">
							<div className="sec-heading center">
								<h2>Top Property Places</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
							</div>
						</div>
					</div>
					
					<div className="row justify-content-center">
						<div className="col-lg-4 col-md-4 col-sm-6">
							<a href="grid-layout-with-sidebar.html" className="img-wrap">
									<div className="location_wrap_content visible">
										<div className="location_wrap_content_first">
											<h4>California, USA</h4>
											<span>48 Properties</span>
										</div>
										<div className="location_btn"><i className="fa fa-arrow-right"></i></div>
									</div>
								<div className="img-wrap-background" style={{"backgroundImage": "url(https://via.placeholder.com/1200x740)"}}></div>
							</a>
						</div>
						
						<div className="col-lg-4 col-md-4 col-sm-6">
							<a href="grid-layout-with-sidebar.html" className="img-wrap">
									<div className="location_wrap_content visible">
										<div className="location_wrap_content_first">
											<h4>Barbingham, USA</h4>
											<span>73 Properties</span>
										</div>
										<div className="location_btn"><i className="fa fa-arrow-right"></i></div>
									</div>
								<div className="img-wrap-background" style={{"backgroundImage": "url(https://via.placeholder.com/1200x740)"}}></div>
							</a>
						</div>
						
						<div className="col-lg-4 col-md-4 col-sm-6">
							<a href="grid-layout-with-sidebar.html" className="img-wrap">
									<div className="location_wrap_content visible">
										<div className="location_wrap_content_first">
											<h4>Denever, USA</h4>
											<span>40 Properties</span>
										</div>
										<div className="location_btn"><i className="fa fa-arrow-right"></i></div>
									</div>
								<div className="img-wrap-background" style={{"backgroundImage": "url(https://via.placeholder.com/1200x740)"}}></div>
							</a>
						</div>
						
						<div className="col-lg-6 col-md-6 col-sm-6">
							<a href="grid-layout-with-sidebar.html" className="img-wrap">
									<div className="location_wrap_content visible">
										<div className="location_wrap_content_first">
											<h4>Liverpool, London</h4>
											<span>35 Properties</span>
										</div>
										<div className="location_btn"><i className="fa fa-arrow-right"></i></div>
									</div>
								<div className="img-wrap-background" style={{"backgroundImage": "url(https://via.placeholder.com/1200x740)"}}></div>
							</a>
						</div>
						
						<div className="col-lg-6 col-md-6 col-sm-6">
							<a href="grid-layout-with-sidebar.html" className="img-wrap">
									<div className="location_wrap_content visible">
										<div className="location_wrap_content_first">
											<h4>New Orleans, Louisiana</h4>
											<span>10 Properties</span>
										</div>
										<div className="location_btn"><i className="fa fa-arrow-right"></i></div>
									</div>
								<div className="img-wrap-background" style={{"backgroundImage": "url(https://via.placeholder.com/1200x740)"}}></div>
							</a>
						</div>
						
					</div>
					
				</div>
			</section>
			{/* <!-- ============================ Property By Location End ================================== --> */}
        </>
    )
}
export default PropertyList;