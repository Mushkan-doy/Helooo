import React from "react";
import Dashboard from "../Dashboard";
import DashboardFooter from "../DashboardFooter";

const EditProfile = () => {
    return (
        <>
        {/* <Dashboard/> */}
        {/* <!-- ============================ Edit User Profile Start ================================== --> */}
            {/* <section className="gray"> */}
                <div className="container container-eye-retina">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12">
                            <div className="dashboard-body">

                                <div className="dashboard-wraper custom-page-form-1">

                                    {/* <!-- Basic Information --> */}
                                    <div className="frm_submit_block">
                                        <h4>My Account</h4>
                                        <form method="post" id="myprofileForm">
                                            <input type="hidden" name="csrfmiddlewaretoken" value="rxOIUxYM7U35s8nK1SxMGiLUb1vUr1dUnCEfXiHvAENa2F4CUaLPtw6iyi94iaNq" />
                                            <div className="frm_submit_wrap">
                                                <div className="form-row">

                                                    <div className="form-group col-md-6">
                                                        <label>First Name</label>
                                                        <input type="text" className="form-control" name="first_name" id="first_name" />
                                                        <div className="invalid-feedback" id="firstnameError"></div>
                                                    </div>

                                                    <div className="form-group col-md-6">
                                                        <label>Last Name</label>
                                                        <input type="text" className="form-control" name="last_name" id="last_name" />
                                                        <div className="invalid-feedback" id="lastnameError"></div>
                                                    </div>

                                                    <div className="form-group col-md-6">
                                                        <label>Username</label>
                                                        <input type="text" className="form-control" name="username" id="username" readOnly />
                                                        <div className="invalid-feedback" id="unameError"></div>
                                                    </div>

                                                    <div className="form-group col-md-6">
                                                        <label>Email</label>
                                                        <input type="email" className="form-control" name="email" id="email" readOnly />
                                                        <div className="invalid-feedback" id="emailError"></div>
                                                    </div>

                                                    <div className="form-group col-md-6">
                                                        <label>Mobile</label>
                                                        <input type="text" className="form-control" name="mobile" id="mobile" readOnly />
                                                        <div className="invalid-feedback" id="mobileError"></div>
                                                    </div>

                                                    <div className="form-group col-md-6">
                                                        <label>Add a Profile Image</label>
                                                        <input type="file" className="form-control profileImgUploadLink" name="profileImage" />
                                                        <div className="invalid-feedback idImgError"></div>
                                                    </div>


                                                    <div className="form-group col-md-12 myprofile-title-section">
                                                        <h4>My Profile
                                                            <a className="custom-label-title">Why do we ask this information?</a>
                                                            <a data-toggle="tooltip" data-placement="right" className="custom-tooltip"
                                                                title="We use this information as part of our security checks to validate users and their offers on the platform.  We also use this information to share relevant promotional and educational information with you.">
                                                                <em className="ti-help"></em>
                                                            </a>
                                                        </h4>
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                        <label>Your Current Address</label>
                                                        <input type="text" id="streetAddress1" className="form-control" name="streetAddress1" />
                                                        <div className="invalid-feedback" id="streetAddress1Error"></div>
                                                    </div>

                                                    <div className="form-group col-md-6">
                                                        <label>Apartment, Suite, Unit</label>
                                                        <input type="text" id="streetAddress2" className="form-control" name="streetAddress2" />
                                                        <div className="invalid-feedback" id="streetAddress2Error"></div>
                                                    </div>

                                                    <div className="form-group col-md-6">
                                                        <label>City</label>
                                                        <input type="text" id="city" className="form-control" name="city" />
                                                        <div className="invalid-feedback" id="cityError"></div>
                                                    </div>

                                                    <div className="form-group col-md-6">
                                                        <label>Province</label>
                                                        <input type="text" id="state" className="form-control" name="state" />
                                                        <div className="invalid-feedback" id="stateError"></div>
                                                    </div>

                                                    <div className="form-group col-md-6" hidden>
                                                        <label>Country</label>
                                                        <input type="text" id="country" className="form-control" name="country" />
                                                        <div className="invalid-feedback" id="countryError"></div>
                                                    </div>

                                                    <div className="form-group col-md-6">
                                                        <label>Postal Code</label>
                                                        <input type="text" id="postalCode" className="form-control" name="postalCode" />
                                                        <div className="invalid-feedback" id="postalCodeError"></div>
                                                    </div>

                                                    <div className="form-group col-md-6">
                                                        <label>Date of Birth</label>
                                                        <input type="text" id="birthdate" name="birth_date" className="form-control" placeholder="yyyy-mm-dd" />
                                                        <div className="invalid-feedback" id="birthdateError"></div>
                                                    </div>

                                                    <div className="form-group col-md-6">
                                                        <label>Marital Status</label>
                                                        <select className="form-control" name="marital_status" id="marital_status">
                                                            <option className="form-control" value="">--Select--</option>

                                                            <option className="form-control" value="1">Single</option>

                                                            <option className="form-control" value="2">Married</option>

                                                            <option className="form-control" value="3">Common Law</option>

                                                            <option className="form-control" value="4">Divorced</option>

                                                            <option className="form-control" value="5">Separated</option>

                                                        </select>
                                                        <div className="invalid-feedback marital_status"></div>
                                                    </div>

                                                    <div className="form-group col-md-6">
                                                        <label>Employment</label>
                                                        <select className="form-control" name="employment" id="employment">
                                                            <option className="form-control" value="">--Select--</option>

                                                            <option className="form-control" value="1">Salaried</option>

                                                            <option className="form-control" value="2">Self Employed</option>

                                                            <option className="form-control" value="3">Retired</option>

                                                            <option className="form-control" value="4">Unemployed</option>

                                                        </select>
                                                        <div className="invalid-feedback" id="empError"></div>
                                                    </div>

                                                    <div className="form-group col-md-6">
                                                        <label>Do you currently own or rent?</label>
                                                        <select className="form-control" name="ownership" id="ownership">
                                                            <option className="form-control" value="">--Select--</option>

                                                            <option className="form-control" value="1">Own</option>

                                                            <option className="form-control" value="2">Rent</option>

                                                        </select>
                                                        <div className="invalid-feedback" id="ownError"></div>
                                                    </div>


                                                    <div className="form-group col-md-6">
                                                        <label>What is your annual household income?</label>
                                                        <input type="text" className="form-control" name="household_income" id="household_income"
                                                            placeholder="$" />
                                                        <div className="invalid-feedback" id="householdError"></div>
                                                    </div>



                                                    <div className="form-group col-md-6">
                                                        <label>What’s your credit grade?</label>
                                                        <select className="form-control" name="creditGrade" id="creditGrade">
                                                            <option className="form-control" value="">--Select--</option>

                                                            <option className="form-control" value="1">Excellent</option>

                                                            <option className="form-control" value="2">Average</option>

                                                            <option className="form-control" value="3">Poor</option>

                                                        </select>
                                                        <div className="invalid-feedback" id="creditError"></div>
                                                    </div>

                                                    <div className="form-group col-md-6">
                                                        <label>How do you plan to buy?</label>
                                                        <select className="form-control" name="buymethod" id="buymethod">
                                                            <option className="form-control" value="">--Select--</option>

                                                            <option className="form-control" value="1">Cash</option>

                                                            <option className="form-control" value="2">Mortgage</option>

                                                        </select>
                                                        <div className="invalid-feedback" id="buyError"></div>
                                                    </div>

                                                    <div className="form-group col-md-12 mt-2 myprofile-title-section">
                                                        <h4>Preferences</h4>
                                                        <label style={{"marginRight":"15px"}}>Receive important updates as an SMS message
                                                            <a data-toggle="tooltip" data-placement="right" className="custom-tooltip"
                                                                title="For example, we'll send you a notification when an offer has been uploaded on a property you're following.">
                                                                <em className="ti-help"></em>
                                                            </a>
                                                        </label>
                                                        <input type="checkbox" id="notification_allow" data-toggle="toggle" name="is_mobile_notification_on" data-onstyle="success" data-size="medium" />
                                                    </div>
                                                    <div className="form-group col-md-12 mt-2 myprofile-title-section">
                                                        <label style={{"marginRight":"15px"}}>Receive new follower notifications by SMS/Email
                                                            <a data-toggle="tooltip" data-placement="right" className="custom-tooltip"
                                                                title="For example, we'll send you a notification when an offer has been uploaded on a property you're following.">
                                                                <em className="ti-help"></em>
                                                            </a>
                                                        </label>
                                                        <input type="checkbox" id="notification_to_holders" data-toggle="toggle" data-onstyle="success" name="email_notification_on" data-size="medium" />
                                                    </div>

                                                    <div className="form-group col-lg-12 col-md-12 mt-4">
                                                        <button className="btn btn-theme" type="button" id="my_profile_submit">
                                                            {/* <div className="spinner-border spinner-border-custom" role="status"></div> */}
                                                            <span>Save Changes</span>
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            {/* </section> */}
        {/* <!-- ============================ Edit User Profile End ================================== --> */}
        {/* <DashboardFooter/> */}
        </>
    )
}

export default EditProfile;