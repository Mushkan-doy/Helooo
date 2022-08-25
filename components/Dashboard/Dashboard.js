import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/img/cleerli.svg';
import '../../assets/css/styles.css';
const Dashboard = () => {

    //Store Locastorage Data
    const data = JSON.parse(localStorage.getItem('user'));
    const token = JSON.parse(localStorage.getItem('token'));

    //Navigate
    const navigate = useNavigate()
    console.log("data", data);

    //first Character Print
    const profile = data.first_name + data.last_name;
    const toInitials = (str) =>
        str
            // strip off capital letters (example: "First Last" ==> "FL")
            .replace(/[^A-Z]/g, "")
            // append the second character of the first word to end of this new string  (example: "FL" ==> "FLI")
            .concat(str.charAt(0).toUpperCase())
            // limit this new string to 2 characters (example: "FLI" ==> "FL")
            .substring(0, 2);

    [profile].forEach(w => {
        console.log("-----", `${toInitials(w)}`)
    });

    //Show DropDown Menu
    const ProfileMenu = () => {
        return (
            <>
                <div className="dropdown-menu pull-right animated flipInX" x-placement="bottom-start"
                    style={{ "position": "absolute", "transform": "translate3d(15px, 58px, 0px)", "top": "0px", "left": "0px", "willChange": "transform" }}>
                    <div className="drp_menu_headr">
                     <h4 className="user-name">Hi, {data.first_name}</h4>

                        {/* {(() => {
                            if (data.token || data.token === '') {
                                // console.log(data.user.first_name);
                                return <h4 className="user-name">Hi, {data.first_name}</h4>

                            }
                            else {
                                return <h4 className="user-name">Hi, {data.first_name}</h4>

                            }
                        })()} */}
                    </div>
                    <ul>
                        <li><a href="my-profile"><em className="fa fa-edit mr-2"></em> Edit My Profile</a></li>
                        <li><a href="change-password"><em className="fa fa-lock mr-2"></em> Change Password</a></li>
                        <li><a href="/" onClick={handleLogout}  className="logout-submit"><em className="fas fa-sign-out-alt mr-2"></em> Sign Out</a></li>
                    </ul>
                </div>
            </>
        )
    }
    const NotificationMenu = () => {
        return (
            <>
                <div className="dropdown-menu pull-right animated flipInX" x-placement="bottom-start"
                    style={{ "position": "absolute", "transform": "translate3d(15px, 58px, 0px)", "top": "0px", "left": "0px", "willChange": "transform", "width": "300px" }}>
                    <div className="drp_menu_headr">
                        <h4 className="notification-heading">Notifications</h4>
                        <span className="notification-head-counter">3</span>
                    </div>
                    <div className="card" style={{ "marginBottom": "0px" }}>
                        <div className="ground-list ground-list-hove">

                            <div className="notification-list-container-dropdown">
                            </div>

                            <div className="ground-content show-more" id="show-more">
                                <h6 style={{ "textAlign": "center" }}><a href="/notification/"><strong>Show More</strong></a></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    
    //handle Logout
    const handleLogout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        navigate('/')
        // axios.post("http://192.168.2.61:8000/auth-api/logout/",data)
        // .then((response) =>{
        //     localStorage.removeItem('user')
        //     navigate('/')
        // })
    }
    return (
        <>
            <div id="main-wrapper">

                <div className="header header-light bg-white">
                    <div className="container">
                        <nav id="navigation" className="navigation navigation-landscape bg-white">
                            <div className="nav-header">
                                <a className="nav-brand fixed-logo d-flex" href="/"
                                    style={{ "fontSize": "31px", "color": "#144273" }}>
                                    <img src={logo} className="logo1" alt="" /><span style={{ "marginTop": "10px" }}>Cleerli</span></a>
                                <div className="nav-toggle"></div>

                                {/* <!-- Mobile Navigation : START --> */}
                                <div className="mobile_nav">
                                    <ul>
                                        {/* <!-- Mobile Nav Page Right Side navigation --> */}



                                        {/* <!--&lt;!&ndash; Full Page Right Side navigation &ndash;&gt;--> */}
                                        {/* <li className="sign-in-menu-nav">
                                            <a href="#" className="alio_green signin-link" data-toggle="modal" data-target="#login">
                                                <i className="fas fa-sign-in-alt mr-1"></i><span className="dn-lg">Log In</span>
                                            </a>
                                        </li>

                                        <li className="add-listing menu signup-org">
                                            <a href="#" className="theme-cl signup-link" data-toggle="modal" data-target="#login">
                                                <i className="fas fa-user-plus mr-1"></i><span className="desktop_nav">Sign Up for Free</span>
                                            </a>
                                        </li> */}

                                        <li className="user-profile-menu-nav">
                                            <div className="btn-group account-drop">
                                                <button type="button" className="btn btn-order-by-filt" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                    <img src="" id="profile-img-menu" className="img-fluid avater-menu profile-img-menu" alt="" />
                                                    <div className="user-avtar-initials">{data.first_name}</div>
                                                </button>
                                                <div className="dropdown-menu pull-right animated flipInX" x-placement="bottom-start"
                                                    style={{ "position": "absolute", "transform": "translate3d(15px, 58px, 0px)", "top": "0px", "left": "0px", "willChange": "transform" }}>
                                                    <div className="drp_menu_headr">
                                                        <h4 className="user-name">Hi, Daniel</h4>
                                                    </div>
                                                    <ul>
                                                        <li><a href="/my-profile/"><em className="fa fa-edit mr-2"></em> Edit My Profile</a></li>
                                                        <li><a href="/change-password/"><em className="fa fa-lock mr-2"></em> Change Password</a></li>
                                                        <li><a href="#" className="logout-submit"><em className="fas fa-sign-out-alt mr-2"></em> Sign Out</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="notification-menu-nav">
                                            <div className="btn-group account-drop">
                                                <div className="bell-notification bell-notification-btn-desktop"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fas fa-solid fa-bell mr-1"></i>
                                                    <span className="notification-counter">3</span>
                                                </div>
                                                <div className="dropdown-menu pull-right animated flipInX" x-placement="bottom-start"
                                                    style={{ "position": "absolute", "transform": "translate3d(15px, 58px, 0px)", "top": "0px", "left": "0px", "willChange": "transform", "width": "300px" }}>
                                                    <div className="drp_menu_headr">
                                                        <h4 className="notification-heading">Notifications</h4>
                                                        <span className="notification-head-counter">3</span>
                                                    </div>
                                                    <div className="card" style={{ "marginBottom": "0px" }}>
                                                        <div className="ground-list ground-list-hove">

                                                            <div className="notification-list-container-dropdown">
                                                            </div>

                                                            <div className="ground-content show-more" id="show-more">
                                                                <h6 style={{ "textAlign": "center" }}><a href="/notification/"><strong>Show More</strong></a></h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </li>

                                    </ul>
                                </div>
                                {/* <!-- Mobile Navigation : END --> */}

                            </div>
                            <div className="nav-menus-wrapper" style={{ "transitionProperty": "none" }}>
                                <ul className="nav-menu" style={{ "marginLeft": "20%", "marginTop": "10px" }}>

                                    {/* <!-- User Avtar --> */}
                                    <div className="dash_user_avater mobile_nav">
                                        <div className="dash_user_avater_inner">
                                            <a href="/my-profile/">
                                                <img src="" className="img-fluid avater idProfileImg" alt="" />
                                                <div id="profile_initials" className="user-avtar-initials profile">CI</div>
                                            </a>
                                        </div>
                                        <div className="invalid-feedback idImgError" ></div>
                                        <h4 className="user-full-name-sidebar">User</h4>
                                    </div>
                                    {/* <!-- --> */}

                                    <li className=" active "><a href="/my-property/">Home<span className="submenu-indicator"></span></a></li>
                                    <li className="mydashboardpage "><a href="/my-property/">My Dashboard</a></li>
                                    <li className=""><a href="/blind-bidding/">What is Blind Bidding</a></li>
                                    <li className=""><a href="/about-us/">About Us</a></li>
                                    <li className=""><a href="/faq/">FAQ</a></li>


                                </ul>

                                <ul className="nav-menu nav-menu-social align-to-right dhsbrd">

                                    {/* <!-- Mobile Nav Page Right Side navigation --> */}



                                    {/* <!--&lt;!&ndash; Full Page Right Side navigation &ndash;&gt;--> */}
                                    <li className="sign-in-menu-nav">
                                        <a href="" onClick={handleLogout} className="alio_green signin-link" data-toggle="modal" data-target="#login">
                                            <i className="fas fa-sign-in-alt mr-1"></i><span className="dn-lg">Log Out</span>
                                        </a>
                                    </li>

                                    {/* <li className="add-listing menu signup-org">
                                        <a href="#" className="theme-cl signup-link" data-toggle="modal" data-target="#login">
                                            <i className="fas fa-user-plus mr-1"></i><span className="desktop_nav">Sign Up for Free</span>
                                        </a>
                                    </li> */}

                                    <li className="user-profile-menu-nav">
                                        <div className="btn-group account-drop">
                                            <button type="button" className="btn btn-order-by-filt" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false">
                                                {/* <img src="" id="profile-img-menu" className="img-fluid avater-menu profile-img-menu" alt="" /> */}
                                                <div className="user-avtar-initials text-white" id="user-avtar" initials={toInitials(profile)}>{toInitials(profile)}</div>
                                            </button>
                                            <ProfileMenu />
                                        </div>
                                    </li>

                                    <li className="notification-menu-nav">
                                        <div className="btn-group account-drop">
                                            <div className="bell-notification bell-notification-btn-desktop"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fas fa-solid fa-bell mr-1"></i>
                                                <span className="notification-counter">3</span>
                                            </div>
                                            <NotificationMenu/>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                {/* <!-- End Navigation --> */}
                <div className="clearfix"></div>
                {/* <!-- ============================================================== --> */}
                {/* <!-- Top header  --> */}
                {/* <!-- ============================================================== --></div> */}




            </div>
        </>
    )
}
export default Dashboard;