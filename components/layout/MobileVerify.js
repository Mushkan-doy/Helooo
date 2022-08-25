import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import * as url from '../Urls/urls';
import '../../assets/css/styles.css';
import { data } from "jquery";

const MobileVerify = ({ getSignup }) => {

    //Get LocalStorage data
    const [user, setUser] = useState('');
    //Set Loader
    const [isLoading, setIsLoading] = useState(false);
    //SetOPT
    const [otp, setOtp] = useState({
        otp_code: '',
        otp_type: 2,
        user: '',
        errorMsg: ''
    });
    //OTP Resend UseState
    const [otpResend, setOtpResend] = useState({
        otp_type: 2,
        user: '',
        errorMsg: ''
    });

    //useEffect Localstorage
    useEffect(() => {
        console.log('---------------Mobile----------');
        const data = localStorage.getItem('user');
        setUser(JSON.parse(data))
    }, []);

    //useEffect Update User Data
    useEffect(() => {
        console.log("Mobile Page", user);
        if (user !== '') {
            setOtp({
                ...otp,
                user: typeof user !== 'undefined' && user !== '' && user !== null ? user.id : ''
            });
            setOtpResend({
                ...otpResend,
                user: typeof user !== 'undefined' && user !== '' && user !== null ? user.id : ''
            })
        }
    }, [user]);


    //OnFocus and OnKeyUp Event
    // const handleOnFocusEventClick = (event) => {
    //     setState(event.key);
    //     console.log(event.key)
    //     console.log('button clicked');
    // };
    // const handleOnKeyUpEventClick = (event) => {
    //     setState(event.key);
    //     console.log(event.key)
    //     console.log('button clicked');
    // };

    //HandleChange Event Mobile OTP Code
    const handleOnChange = (e) => {
        setOtp({ ...otp, [e.target.name]: e.target.value })
        console.log("target", e.target.value);
    }
    const changeMobile = () => {
        getSignup('changeMobile')
    }

    //Handle submit of Mobile OTP Verified
    const handleSubmit = (event) => {
        event.preventDefault()
        setIsLoading(true)
        console.log("State OTP = ", otp);
        axios.post("http://192.168.2.61:8000/auth-api/otp/verify/", otp)
            .then((response) => {
                console.log(response.data.data);
                console.log("Mobile OTP Verified Successfully")
                getSignup('profileVerify')
            })

    }

    //Resend OTP Code HandleSubmit
    const handleResendOTP = (event) => {
        event.preventDefault()
        setIsLoading(true)
        console.log("State Resend OTP = ", otpResend);
        axios.post("http://192.168.2.61:8000/auth-api/otp/resend/", otpResend)
            .then((response) => {
                console.log("Resend OTP Successfully");
                getSignup('mobileVerify')
                setIsLoading(false)
            }).catch(error => {
                console.log(error)
                setOtp({ errorMsg: 'Something Went Wrong' })
            });
    }

    return (
        <>
            {/* <!-- Email OTP Verification --> */}
            <div className="tab-pane" id="pills-email-otp" role="tabpanel" aria-labelledby="pills-email-verification-tab">
                <div className="email-verification-form">
                    <form id="registrationEmailOtpVerification" onSubmit={handleSubmit}>
                        <div className="d-flex justify-content-center align-items-center container">
                            <div className="card py-5 px-3 mobile-pad-less">
                                <h2 className="m-0 text-center">Mobile Phone Verification</h2>
                                <div className="mobile-verification-form">
                                    {(typeof data !== 'undefined' && data !== '' && data !== null) && (
                                        <p className="content p-4">Enter the code we just send you on given phone nubmer <b className="text-success">{data.mobile !== 'undefined' ? data.mobile : 'Guest'}</b>. Check your phone and enter the code below.</p>
                                    )}
                                    <div className="d-flex flex-row mt-4 less-mobile-margin-top">
                                        <input id="otpBox1" name="otp_code" type="text" onChange={handleOnChange} className="form-control mr-3 text-center otp-block index1" maxLength="4" />
                                        {/* <input id="otpBox1" type="text" className="form-control mr-3 text-center otp-block index1" maxLength="1" onKeyUp={event => handleOnKeyUpEventClick(event)} onFocus={event => handleOnFocusEventClick(event)}/>
                                        <input id="otpBox2" type="text" className="form-control mr-3 text-center otp-block index2" maxLength="1" onKeyUp={event => handleOnKeyUpEventClick(event)} onFocus={event => handleOnFocusEventClick(event)}/>
                                        <input id="otpBox3" type="text" className="form-control mr-3 text-center otp-block index3" maxLength="1" onKeyUp={event => handleOnKeyUpEventClick(event)} onFocus={event => handleOnFocusEventClick(event)}/>
                                        <input id="otpBox4" type="text" className="form-control mr-3 text-center otp-block index4" maxLength="1" onKeyUp={event => handleOnKeyUpEventClick(event)} onFocus={event => handleOnFocusEventClick(event)}/> */}
                                    </div>
                                    <div className="invalid-feedback" id="OTPCodeError"></div>
                                    <div className="invalid-feedback" id="OTPTypeError"></div>
                                    <div className="invalid-feedback" id="OTPUserError"></div>
                                    <div className="text-center mt-5 less-mobile-margin-top">
                                        <span className="d-block mobile-text">Didn't receive the code?</span>
                                        <a href="#" onClick={handleResendOTP} className="font-weight-bold text-success cursor" id="resendOTP">
                                            {/* <div className="spinner-border spinner-border-custom" role="status">
                              </div> */}
                                            <span> Resend </span>
                                        </a>
                                        |
                                        <a href="#" onClick={changeMobile} className="font-weight-bold text-success cursor" id="changeEmailAddress">
                                            {/* <div className="spinner-border spinner-border-custom" role="status">
                              </div> */}
                                            <span>Change Mobile Number</span>
                                        </a>
                                        <p className="font-weight-bold text-success cursor success-msg"></p>
                                    </div>
                                    <div className="invalid-feedback" id="resentOTPTypeError"></div>
                                    <div className="invalid-feedback" id="resentOTPUserError"></div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group btn-form-group">
                            <button type="submit" className="btn btn-md full-width pop-verify btn-form-green" id="verifyMailOTP">
                                {isLoading ? (
                                    <>
                                        <div className="spinner-border spinner-border-custom" role="status"></div>
                                        <span>Verify OTP</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Verify OTP</span>
                                    </>
                                )}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
export default MobileVerify;