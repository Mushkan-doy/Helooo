import React, { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import * as url from '../Urls/urls';
import '../../assets/css/styles.css';

const ProfileConfirm = ({getSignup}) => {

   //Get LocalStorage data
    const data = JSON.parse(localStorage.getItem('user'))

    const handleSubmit = ( event) => {
        event.preventDefault()
        alert("Profile Confirm successfully")
    }



    return (
        <>
            {/* <!-- Email OTP Verification --> */}
            <div className="tab-pane" id="pills-email-otp" role="tabpanel" aria-labelledby="pills-email-verification-tab">
                <div className="email-verification-form">
                    <form id="registrationEmailOtpVerification">
                        <div className="d-flex justify-content-center align-items-center container">
                            <div className="card py-5 px-3 mobile-pad-less" style={{"border":"none"}}>
                                <h2 className="m-0 text-center">Profile Confirm</h2>
                                <div className="mobile-verification-form">
                                    <p className="content p-4">You will need to complete your profile before you can upload any offers and see competing offer details.</p>
                                    <div className="info-bottom-right text-right">
                                        <a className="d-block mobile-text custom-label-title margin-left-rmv">What do we do this ?</a>
                                       
                                        <p className="font-weight-bold text-success cursor success-msg"></p>
                                    </div>
                                    <div className="invalid-feedback" id="resentOTPTypeError"></div>
                                    <div className="invalid-feedback" id="resentOTPUserError"></div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group btn-form-group">
                            <button type="submit" onClick={handleSubmit} className="btn btn-md full-width pop-verify-pro btn-form-green" id="verifyMailOTP">
                                {/* <div className="spinner-border spinner-border-custom" role="status"></div> */}
                                <span>Let's Go</span>
                            </button>
                            <p className="text-center">I’ll do this later. Take me to <b className="text-success"><a href="/my-property" className="text-success">My Dashboard</a></b></p>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
export default ProfileConfirm;