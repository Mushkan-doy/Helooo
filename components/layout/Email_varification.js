import React, { useEffect, useState } from "react";
import axios from "axios";
import * as url from '../Urls/urls';
import '../../assets/css/styles.css';
import logo1 from "../../assets/img/cleerli.svg";

const Email = ({ getSignup }) => {

    //Get LocalStorage data
    const [user, setUser] = useState('');
    //OTP UseState
    const [otp, setOtp] = useState({
        otp_code: '',
        otp_type: 1,
        user: '',
        errorMsg: ''
    });
    //OTP Resend UseState
    const [otpResend, setOtpResend] = useState({
        otp_type: 1,
        user: '',
        errorMsg: ''
    });
    const [isLoading, setISLoading] = useState(false);

    useEffect(() => {
        console.log('---------------Email------------');
        const data = localStorage.getItem('user');
        setUser(JSON.parse(data));
    }, []);

    useEffect(() => {
        console.log(user);
        if (user !== '') {
            setOtp({
                ...otp,
                user: typeof user !== 'undefined' && user !== '' && user !== null ? user.id : ''
            });
            setOtpResend({
                ...otpResend,
                user: typeof user !== 'undefined' && user !== '' && user !== null ? user.id : ''
            });
        }
    }, [user]);

    //OTP Code HandleChange
    const handleOnChange = (e) => {
        setOtp({ ...otp, [e.target.name]: e.target.value })
        // console.log("otp_code = ", e.target.value);
    }

    //ChangeEmail Function
    const changeEmail = () => {
        getSignup('changeEmail')
    }

    //OTP HandleSubmit
    const handleOTPSubmit = (event) => {
        event.preventDefault()
        setISLoading(true)
        console.log("State OTP = ", otp);
        axios.post("http://192.168.2.61:8000/auth-api/otp/verify/", otp)
            .then((response) => {
                console.log(response.data.data)
                console.log("OTP Verified Successfully")
                getSignup('mobileVerify');
            }).catch(error => {
                console.log(error)
                setOtp({ errorMsg: 'Something Went Wrong' })
            });
    }

    //Resend OTP Code HandleSubmit
    const handleResendOTP = (event) => {
        event.preventDefault()
        setISLoading(true)
        console.log("State Resend OTP = ", otpResend);
        axios.post("http://192.168.2.61:8000/auth-api/otp/resend/", otpResend)
            .then((response) => {
                console.log("Resend OTP Successfully");
                setISLoading(false)
                getSignup('email')
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
                    <form id="registrationEmailOtpVerification" onSubmit={handleOTPSubmit} noValidate>
                        <div className="d-flex justify-content-center align-items-center container">
                            <div className="card py-5 px-3 mobile-pad-less">
                                <h2 className="m-0 text-center">Email Verification</h2>
                                <div className="mobile-verification-form">
                                    {(typeof user !== 'undefined' && user !== '' & user !== null) && (
                                        <p className="content p-4">We just sent an email with a 4 digit code to <br></br> <b className="text-success" id="sentOtpMail">{(typeof user.email !== 'undefined') ? user.email : 'Guest'}</b>. Check your email for the code and enter it below.</p>
                                    )}

                                    <div className="d-flex flex-row mt-4 less-mobile-margin-top">
                                        {/* <Form.Group>
                                            <Form.Control  
                                            id="otpBox1" 
                                            name="otp_code" 
                                            type="text" 
                                            {...register('otp_code', { required: true, maxLength: 4 })}
                                            className={`form-control mr-3 text-center otp-block index1  ${errors.otp_code ? 'is-invalid' : ''}`}
                                            />
                                             <small className="text-danger" style={{ "fontSize": ".875rem" }}>
                                                {errors?.first_name && "This field may not be blank."}
                                            </small>
                                        </Form.Group> */}
                                        <input id="otpBox1" name="otp_code" type="text" onChange={handleOnChange} className="form-control mr-3 text-center otp-block index1" maxLength="4" />


                                        {/* <input id="otpBox2" name="otp_code" type="text" onChange={handleOnChange} className="form-control mr-3 text-center otp-block index2" maxLength="1"/>
                                        <input id="otpBox3" name="otp_code" type="text" onChange={handleOnChange} className="form-control mr-3 text-center otp-block index3" maxLength="1"/>
                                        <input id="otpBox4" name="otp_code" type="text" onChange={handleOnChange} className="form-control mr-3 text-center otp-block index4" maxLength="1"/> */}
                                        {/* <input id="otpBox1" type="text" className="form-control mr-3 text-center otp-block index1" maxLength="1" onKeyUp={event => handleOnKeyUpEventClick(event)} onFocus={event => handleOnFocusEventClick(event)} />
                                        <input id="otpBox2" type="text" className="form-control mr-3 text-center otp-block index2" maxLength="1" onKeyUp={event => handleOnKeyUpEventClick(event)} onFocus={event => handleOnFocusEventClick(event)} />
                                        <input id="otpBox3" type="text" className="form-control mr-3 text-center otp-block index3" maxLength="1" onKeyUp={event => handleOnKeyUpEventClick(event)} onFocus={event => handleOnFocusEventClick(event)} />
                                        <input id="otpBox4" type="text" className="form-control mr-3 text-center otp-block index4" maxLength="1" onKeyUp={event => handleOnKeyUpEventClick(event)} onFocus={event => handleOnFocusEventClick(event)} /> */}
                                    </div>
                                    <small className="text-danger" style={{ "fontSize": ".875rem" }}>
                                        {otp.errorMsg && <span className="error"> {otp.errorMsg} </span>}
                                    </small>
                                    {/* <div className="invalid-feedback" id="OTPCodeError"></div>
                                    <div className="invalid-feedback" id="OTPTypeError"></div>
                                    <div className="invalid-feedback" id="OTPUserError"></div> */}
                                    <div className="text-center mt-5 less-mobile-margin-top">
                                        <span className="d-block mobile-text">Didn't receive the code?</span>
                                        <a href="#" onClick={handleResendOTP} className="font-weight-bold text-success cursor" id="resendOTP">
                                            {isLoading && <div className="spinner-border spinner-border-custom me-0" role="status"></div>}
                                            <span> Resend </span>
                                        </a>
                                        |
                                        <a href="#" onClick={changeEmail} className="font-weight-bold text-success cursor" id="changeEmailAddress">
                                            {isLoading && <div className="spinner-border spinner-border-custom me-0" role="status"></div>}
                                            <span>Change Email Address</span>
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
                                        <span>Verify Email</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Verify Email</span>
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
export default Email;