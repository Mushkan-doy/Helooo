import React from "react";

const NavbarMenu = () => {
    const HomeSubmenu = () => {
        return (
            <>
                <ul className="nav-dropdown nav-submenu">
                    <li><a href="index.html">Home 1</a></li>
                    <li><a href="home-2.html">Home 2</a></li>
                    <li><a href="home-3.html">Home 3</a></li>
                    <li><a href="home-4.html">Home 4</a></li>
                    <li><a href="home-5.html">Home 5</a></li>
                    <li><a href="home-6.html">Home 6</a></li>
                    <li><a href="home-7.html">Home 7</a></li>
                    <li><a href="map.html">Map Home</a></li>
                </ul>
            </>
        )
    }
    const PageSubmenu = () => {
        return (
            <>
                <ul className="nav-dropdown nav-submenu">
                    <li><a href="blog.html">Blog Style</a></li>
                    <li><a href="about-us.html">About Us</a></li>
                    <li><a href="pricing.html">Pricing</a></li>
                    <li><a href="404.html">404 Page</a></li>
                    <li><a href="checkout.html">Checkout</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="component.html">Elements</a></li>
                    <li><a href="privacy.html">Privacy Policy</a></li>
                    <li><a href="faq.html">FAQs</a></li>
                </ul>
            </>
        )
    }
    const PropertySubmenu = () => {
        return (
            <>
                <ul className="nav-dropdown nav-submenu">
                    <li className="user-menu">
                        <a href="#">User Admin
                            <span className="submenu-indicator"></span>
                            <span className="submenu-indicator">
                                <span className="submenu-indicator-chevron"></span>
                            </span>
                        </a>
                        <PropertyMiniMenu1 />
                    </li>
                    <li className="single-property">
                        <a href="#">Single Property
                            <span className="submenu-indicator"></span>
                            <span className="submenu-indicator">
                                <span className="submenu-indicator-chevron"></span>
                            </span>
                        </a>
                        <PropertyMiniMenu2 />
                    </li>
                    <li><a href="compare-property.html">Compare Property</a></li>
                </ul>
            </>
        )
    }
    const PropertyMiniMenu1 = () => {
        return (
            <>
                <ul className="nav-dropdown nav-submenu1">
                    <li><a href="dashboard.html">User Dashboard</a></li>
                    <li><a href="my-profile.html">My Profile</a></li>
                    <li><a href="my-property.html">My Property</a></li>
                    <li><a href="messages.html">Messages</a></li>
                    <li><a href="bookmark-list.html">Bookmark Property</a></li>
                    <li><a href="submit-property.html">Submit Property</a></li>
                </ul>
            </>
        )
    }
    const PropertyMiniMenu2 = () => {
        return (
            <>
                <ul className="nav-dropdown nav-submenu2">
                    <li><a href="single-property-1.html">Single Property 1</a></li>
                    <li><a href="single-property-2.html">Single Property 2</a></li>
                    <li><a href="single-property-3.html">Single Property 3</a></li>
                    <li><a href="single-property-4.html">Single Property 4</a></li>
                </ul>
            </>
        )
    }
    const ListingSubmenu = () => {
        return (
            <>
                <ul className="nav-dropdown nav-submenu">
                    <li className="listing-minimenu">
                        <a href="#">Listing Grid
                            <span className="submenu-indicator">
                                <span className="submenu-indicator-chevron"></span>
                            </span>
                        </a>
                        <ul className="nav-dropdown nav-submenu1">
                            <li><a href="grid-layout-with-sidebar.html">Grid Style 1</a></li>
                            <li><a href="grid-layout-2.html">Grid Style 2</a></li>
                            <li><a href="grid-layout-3.html">Grid Style 3</a></li>
                        </ul>
                    </li>
                    <li className="listing-minimenu">
                        <a href="#">Listing List
                            <span className="submenu-indicator">
                                <span className="submenu-indicator-chevron"></span>
                            </span>
                        </a>
                        <ul className="nav-dropdown nav-submenu2">
                            <li><a href="list-layout-with-sidebar.html">List Style 1</a></li>
                            <li><a href="list-layout-with-map-2.html">List Style 2</a></li>
                        </ul>
                    </li>
                    <li className="listing-minimenu">
                        <a href="#">Listing Map
                            <span className="submenu-indicator">
                                <span className="submenu-indicator-chevron"></span>
                            </span>
                        </a>
                        <ul className="nav-dropdown nav-submenu3">
                            <li><a href="half-map.html">Half Map</a></li>
                            <li><a href="half-map-2.html">Half Map 2</a></li>
                            <li><a href="classNameical-layout-with-map.html">classNameical With Sidebar</a></li>
                            <li><a href="list-layout-with-map.html">List Sidebar Map</a></li>
                            <li><a href="grid-layout-with-map.html">Grid Sidebar Map</a></li>
                        </ul>
                    </li>
                    <li className="listing-minimenu">
                        <a href="#">Agents View
                            <span className="submenu-indicator">
                                <span className="submenu-indicator-chevron"></span>
                            </span>
                        </a>
                        <ul className="nav-dropdown nav-submenu4">
                            <li><a href="agents.html">Agent Grid Style</a></li>
                            <li><a href="agents-2.html">Agent Grid 2</a></li>
                            <li><a href="agent-page.html">Agent Detail Page</a></li>
                        </ul>
                    </li>
                    <li className="listing-minimenu">
                        <a href="#">Agency View
                            <span className="submenu-indicator">
                                <span className="submenu-indicator-chevron"></span>
                            </span>
                        </a>
                        <ul className="nav-dropdown nav-submenu5">
                            <li><a href="agencies.html">Agency Grid Style</a></li>
                            <li><a href="agency-page.html">Agency Detail Page</a></li>
                        </ul>
                    </li>
                </ul>
            </>
        )
    }
    return (
        <>
            <ul className="nav-menu">

                <li className="active home-menu">
                    <a href="#">Home
                        {/* <span className="submenu-indicator"></span> */}
                        <span className="submenu-indicator">
                            <span className="submenu-indicator-chevron"></span>
                        </span>
                    </a>
                    <HomeSubmenu />
                </li>

                <li className="listing-menu">
                    <a href="#">Listings
                        <span className="submenu-indicator"></span>
                        <span className="submenu-indicator">
                            <span className="submenu-indicator-chevron"></span>
                        </span>
                    </a>
                    <ListingSubmenu/>
                </li>

                <li className="property-menu">
                    <a href="#">Property
                        <span className="submenu-indicator"></span>
                        <span className="submenu-indicator">
                            <span className="submenu-indicator-chevron"></span>
                        </span>
                    </a>
                    <PropertySubmenu />
                </li>

                <li className="page-menu">
                    <a href="#">Pages
                        <span className="submenu-indicator"></span>
                        <span className="submenu-indicator">
                            <span className="submenu-indicator-chevron"></span>
                        </span>
                    </a>
                    <PageSubmenu />
                </li>

            </ul>
        </>
    )
}
export default NavbarMenu;