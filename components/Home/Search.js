import React from "react";
import award1 from '../../assets/img/award-1.png';
import award5 from '../../assets/img/award-5.png';
import award2 from '../../assets/img/award-2.png';
function Search () {
    return(
        <>
            {/* <!-- ============================================================== --> */}
			{/* <!-- Top header  --> */}
			{/* <!-- ============================================================== --> */}

			{/* <!-- ============================ Hero Banner  Start================================== --> */}
			<div className="image-cover hero_banner" style={{background:"url(https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_960_720.jpg) no-repeat","dataOverlay":"0"}}>
				<div className="container">
					
					<h1 className="big-header-capt mb-0" style={{'color':'white'}}>Search Your Next Home</h1>
					<p className="text-center mb-4" style={{'color':'white'}}>Find new & featured property located in your local city.</p>
					{/* <!-- Type --> */}
					<div className="row justify-content-center">
						<div className="col-xl-10 col-lg-11 col-md-12">
							<div className="full_search_box nexio_search lightanic_search hero_search-radius modern">
								<div className="search_hero_wrapping">
							
									<div className="row">
										<div className="col-lg-4 col-md-3 col-sm-12">
											<div className="form-group">
												<label>City/Street</label>
												<div className="input-with-icon">
													<select id="location" className="form-control">
														<option value="">&nbsp;</option>
														<option value="1">New York City</option>
														<option value="2">Honolulu, Hawaii</option>
														<option value="3">California</option>
														<option value="4">New Orleans</option>
														<option value="5">Washington</option>
														<option value="6">Charleston</option>
													</select>
												</div>
											</div>
										</div>
										
										<div className="col-lg-3 col-md-3 col-sm-12">
											<div className="form-group">
												<label>Property Type</label>
												<div className="input-with-icon">
													<select id="ptypes" className="form-control">
														<option value="">&nbsp;</option>
														<option value="1">All categories</option>
														<option value="2">Apartment</option>
														<option value="3">Villas</option>
														<option value="4">Commercial</option>
														<option value="5">Offices</option>
														<option value="6">Garage</option>
													</select>
												</div>
											</div>
										</div>
										
										<div className="col-lg-4 col-md-4 col-sm-12">
											<div className="form-group none">
												<label>Price Range</label>
												<div className="input-with-icon">
													<select id="price" className="form-control">
														<option value="">&nbsp;</option>
														<option value="1">From 40,000 To 10m</option>
														<option value="2">From 60,000 To 20m</option>
														<option value="3">From 70,000 To 30m</option>
														<option value="3">From 80,000 To 40m</option>
														<option value="3">From 90,000 To 50m</option>
													</select>
												</div>
											</div>
										</div>
										
										<div className="col-lg-1 col-md-2 col-sm-12 small-padd">
											<div className="form-group none">
												<a href="#" className="btn search-btn"><i className="fa fa-search"></i></a>
											</div>
										</div>
									</div>
									
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
			{/* <!-- ============================ Hero Banner End ================================== --> */}

			{/* <!-- ============================ Our Awards Start ================================== --> */}
			<section className="p-0">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-11 col-lg-11 col-md-12">
						
							<div className="_awards_group">	
								<ul className="_awards_lists">
									{/* <!-- single list --> */}
									<li>
										<div className="_awards_list_wrap">
											<div className="_awards_list_thumb"><img src={award1} className="img-fluid" alt="" /></div>
											<div className="_awards_list_caption">
												<h5 className="theme-cl">2021</h5>
												<span>Annual Awards</span>
											</div>
										</div>
									</li>
									{/* <!-- single list --> */}
									<li>
										<div className="_awards_list_wrap">
											<div className="_awards_list_thumb"><img src={award5} className="img-fluid" alt="" /></div>
											<div className="_awards_list_caption">
												<h5 className="theme-cl-2">2018</h5>
												<span>Filka Vivo Award</span>
											</div>
										</div>
									</li>
									{/*  single lis */}
									<li>
										<div className="_awards_list_wrap">
											<div className="_awards_list_thumb"><img src={award2}className="img-fluid" alt="" /></div>
											<div className="_awards_list_caption">
												<h5 className="text-warning">2017</h5>
												<span>IITCA Green Award</span>
											</div>
										</div>
									</li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
			</section>
			{/* <!-- ============================ Our Awards End ================================== --> */}
			
        </>
    )
}
export default Search;