import React from "react";
const MainPage = () => {
    return (
        <>
            {/* <section className="gray main-wrapper-element" style={{"paddingTop": "40px"}}> */}
                <div className="container">
                    <div className="dashboard-title-main">
                        <h3>My Dashboard</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="dashboard-body">
                                {/* <div className="row mobile-add-property">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="_prt_filt_dash" style={{"display": "block", "padding": "0.8rem 0.9rem"}}>
                                            <div className="_prt_filt_dash_last">
                                                <div className="_prt_filt_add_new">
                                                    <a href="/submit-property/">
                                                        <button className="btn btn-theme-orange follow-property-btn-mobile" style={{"width": "100%"}} type="button"><em className="fas fa-plus-circle"></em><span> Follow a New Property</span></button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="dashboard_property">
                                            <div className="table-responsive">
                                                <table className="table" id="property-list-table">
                                                    <thead className="thead-dark">
                                                        <tr>
                                                            {/* <th className="table-title text-center" scope="col">Property title</th> */}
                                                            <th scope="col" className=""><a href="/submit-property/">
                                                                <button className="btn btn-theme-orange follow-property-btn-desktop" type="button"><em className="fas fa-plus-circle"></em><span> Follow a New Property</span></button>
                                                            </a>
                                                            </th>
                                                            <th scope="col" className="m2_hide text-center highest-offer-btn-desktop" >Highest Offer</th>
                                                            <th scope="col" className="m2_hide text-center">Total Offers</th>
                                                            <th scope="col" className="m2_hide text-center">Followers</th>
                                                            <th scope="col" className="">Last Updated</th>

                                                            <th scope="col" className="text-center"></th>
                                                        </tr>
                                                        <tr className="text-center">
                                                            <td>
                                                                Helooo
                                                            </td>
                                                            <td>NA</td>
                                                            <td>0</td>
                                                            <td>2</td>
                                                            <td>10Aug-6:27PM</td>
                                                            <td>
                                                                <div>
                                                                    <button className="btn btn-theme" style={{"fontSize":"14px"}}><em className="fas fa-plus-circle me-2"></em>Your Offer</button>
                                                                    <button className="btn btn-theme" style={{"fontSize":"14px"}}><em className="fas fa-info-circle me-2"></em>More Details</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </thead>
                                                </table>
                                            </div>
                                        </div>

                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            {/* </section> */}
        </>
    )
}
export default MainPage;