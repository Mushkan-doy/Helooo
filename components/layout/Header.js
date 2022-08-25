import React, { useState } from "react";
import '../../assets/css/styles.css';
import '../../assets/css/style1.css';
import logo from '../../assets/img/logo-light.png';
import logo1 from '../../assets/img/cleerli.svg';
import ViewForm from "./ViewForm";
import LgModal from "./LgModel";
import NavbarMenu from "./ NavbarMenu";
function Header() {
	const renderSidebar = (closeModal) => {
		return (
			<>
				<ViewForm closeModal={closeModal} />
			</>
		)
	}
	
	return (
		<>

			{/* <!-- Start Navigation --> */}
			<div className="header header-transparent change-logo">
				<div className="container">
					<nav id="navigation" className="navigation navigation-landscape">
						<div className="nav-header">
							<a className="nav-brand static-logo" href="/"><img src={logo} className="logo" alt="" /></a>
							<a className="nav-brand fixed-logo" href="/"><img src={logo1} className="logo" alt="" /></a>
							<div className="nav-toggle"></div>
							<div className="mobile_nav">
								<ul>
									<li className="_my_prt_list"><a href="#"><span>2</span>My List</a></li>
									<li><a href="#" data-toggle="modal" data-target="#login"><i className="fas fa-user-circle fa-lg"></i></a></li>
								</ul>
							</div>
						</div>
						<div className="nav-menus-wrapper" style={{ "transitionProperty": "none" }}>
							
							<NavbarMenu/>
							<ul className="nav-menu nav-menu-social align-to-right">

								<li>
									<LgModal renderContent={(closeModal) => renderSidebar(closeModal)} />
								</li>
								<li className="add-listing">
									<a href="submit-property.html" className="theme-cl">
										<i className="fas fa-plus-circle mr-1"></i>Add Property
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
			{/* <!-- End Navigation --> */}

			<div className="clearfix"></div>


		</>
	)

}
export default Header