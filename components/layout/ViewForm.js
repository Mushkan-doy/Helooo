import React, { useState } from "react";
import logo from '../../assets/img/log.jpg';
import '../../assets/css/styles.css';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Register from "./Register";
import Login from "./Login";
import logo1 from "../../assets/img/cleerli.svg";
import Email from "./Email_varification";
import 'bootstrap-icons/font/bootstrap-icons.css';
import MobileVerify from "./MobileVerify";
import ChangeEmail from "./ChangeEmail";
import ChangeMobile from "./ChangeMobile";
import ProfileConfirm from "./profileConfirm";
import ForgotPassword from "./ForgotPassword";
function ViewForm({ closeModal }) {
    const data = JSON.parse(localStorage.getItem('user'))

    const handleCloseModal = () => {
        closeModal();
    }
    const [tab, setTab] = useState({
        login: true,
        signup: true,
        email: false,
        changeEmail: false,
        mobileVerify: false,
        changeMobile: false,
        profileVerify: true,
        forgotPassword: false,
    })
    const [key, setKey] = useState('first')

    const getSignup = (a) => {
        console.log("a = ", a);

        switch (a) {
            case 'login':
                setTab({
                    login: true
                })
                setKey('first')
                break;

            case 'signup':
                setTab({
                    signup: true
                })
                setKey('second')
                break;

            case 'email':
                setTab({
                    signup: false,
                    email: true,
                    mobileVerify: false,
                    profileVerify: false
                })
                setKey('third')
                break;

            case 'changeEmail':
                setTab({
                    signup: false,
                    email: false,
                    changeEmail: true,
                    mobileVerify: false,
                    profileVerify: false
                })
                setKey('forth')
                break;

            case 'mobileVerify':
                setTab({
                    signup: false,
                    email: false,
                    mobileVerify: true,
                    profileVerify: false
                })
                setKey('fifth')
                break;

            case 'changeMobile':
                setTab({
                    signup: false,
                    email: false,
                    mobileVerify: false,
                    changeMobile: true,
                    profileVerify: false
                })
                setKey('sixth')
                break;

            case 'profileVerify':
                setTab({
                    signup: false,
                    email: false,
                    mobileVerify: false,
                    changeMobile: false,
                    profileVerify: true
                })
                setKey('seven')
                break;

            case 'forgotPassword':
                setTab({
                    signup: false,
                    email: false,
                    mobileVerify: false,
                    changeMobile: false,
                    profileVerify: false,
                    forgotPassword: true,
                })
                setKey('eight')
                break;

            default:
                break;
        }
    }


    // style={{ backgroundImage: "url(" + logo + ")" }}
    return (
        <>
            <div className="resp_log_wrap">
                <Tab.Container id="left-tabs-example" activeKey={key} onSelect={(k) => setKey(k)}>

                    <div className="resp_log_thumb">
                        <Col lg={12}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <div className="sign-up-login-inner">
                                        <div className="sign-up-login-logo">
                                            <img src={logo1} /><strong style={{ "fontWeight": "bolder" }}>Log In</strong>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second" >
                                    <div className="sign-up-login">
                                        <div className="sign-up-login-inner">
                                            <div className="sign-up-login-logo">
                                                <img src={logo1} /><strong>Sign Up</strong>
                                            </div>
                                            <div className="signup-form-text">
                                                <span>
                                                    Signing up for Cleerli is a quick four-step process. Let's get you set up.
                                                </span>
                                            </div>
                                            <div className="sign-up-login-step sign-up-desktop">
                                                <ul style={{ "margin": "10px" }}>
                                                    <li className="step1 d-flex p-2"><span>1</span>Create your account</li>
                                                    <li className="step2 d-flex p-2"><span>2</span>Verify your email address</li>
                                                    <li className="step3 d-flex p-2"><span>3</span>Verify your mobile number</li>
                                                    <li className="step4 d-flex p-2"><span>4</span>Create Your Profile</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third" >
                                    <div className="sign-up-login">
                                        <div className="sign-up-login-inner">
                                            {(typeof data !== 'undefined' && data !== '' && data !== null) && (
                                                <>
                                                    <div className="sign-up-login-logo">
                                                        <img src={logo1} /><strong>Sign Up</strong>
                                                    </div>
                                                    <div className="signup-form-text">
                                                        <span>
                                                            Hi ,{(typeof data.first_name !== 'undefined') ? data.first_name : 'Guest'} Let's confirm your email address.
                                                        </span>
                                                    </div>
                                                </>
                                            )}

                                            <div className="sign-up-login-step sign-up-desktop">
                                                <ul style={{ "margin": "10px" }}>
                                                    <li className="step1 d-flex p-2"><span> <i className="bi bi-check text-success" style={{ fontSize: 30 }}></i></span>Create your account</li>
                                                    <li className="step2 d-flex p-2"><span>2</span>Verify your email address</li>
                                                    <li className="step3 d-flex p-2"><span>3</span>Verify your mobile number</li>
                                                    <li className="step4 d-flex p-2"><span>4</span>Create Your Profile</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="forth" >
                                    <div className="sign-up-login">
                                        <div className="sign-up-login-inner">
                                            {(typeof data !== 'undefined' && data !== '' && data !== null) && (
                                                <>
                                                    <div className="sign-up-login-logo">
                                                        <img src={logo1} /><strong>Sign Up</strong>
                                                    </div>
                                                    <div className="signup-form-text">
                                                        <span>
                                                            Hi ,{data.first_name} Let's confirm your email address.
                                                        </span>
                                                    </div>
                                                </>
                                            )}

                                            <div className="sign-up-login-step sign-up-desktop">
                                                <ul style={{ "margin": "10px" }}>
                                                    <li className="step1 d-flex p-2"><span> <i className="bi bi-check text-success" style={{ fontSize: 30 }}></i></span>Create your account</li>
                                                    <li className="step2 d-flex p-2"><span>2</span>Verify your email address</li>
                                                    <li className="step3 d-flex p-2"><span>3</span>Verify your mobile number</li>
                                                    <li className="step4 d-flex p-2"><span>4</span>Create Your Profile</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth" >
                                    <div className="sign-up-login">
                                        <div className="sign-up-login-inner">
                                            {(typeof data !== 'undefined' && data !== '' && data !== null) && (
                                                <>
                                                    <div className="sign-up-login-logo">
                                                        <img src={logo1} /><strong>Sign Up</strong>
                                                    </div>
                                                    <div className="signup-form-text">
                                                        <span>
                                                            Thanks for confirming your email! Now let’s confirm the mobile number you provided.
                                                        </span>
                                                    </div>
                                                </>
                                            )}

                                            <div className="sign-up-login-step sign-up-desktop">
                                                <ul style={{ "margin": "10px" }}>
                                                    <li className="step1 d-flex p-2"><span> <i className="bi bi-check text-success" style={{ fontSize: 30 }}></i></span>Create your account</li>
                                                    <li className="step2 d-flex p-2"><span><i className="bi bi-check text-success" style={{ fontSize: 30 }}></i></span>Verify your email address</li>
                                                    <li className="step3 d-flex p-2"><span>3</span>Verify your mobile number</li>
                                                    <li className="step4 d-flex p-2"><span>4</span>Create Your Profile</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="sixth" >
                                    <div className="sign-up-login">
                                        <div className="sign-up-login-inner">
                                            <div className="sign-up-login-logo">
                                                <img src={logo1} /><strong>Sign Up</strong>
                                            </div>
                                            <div className="signup-form-text">
                                                <span>
                                                    Thanks for confirming your email! Now let’s confirm the mobile number you provided.
                                                </span>
                                            </div>
                                            <div className="sign-up-login-step sign-up-desktop">
                                                <ul style={{ "margin": "10px" }}>
                                                    <li className="step1 d-flex p-2"><span> <i className="bi bi-check text-success" style={{ fontSize: 30 }}></i></span>Create your account</li>
                                                    <li className="step2 d-flex p-2"><span><i className="bi bi-check text-success" style={{ fontSize: 30 }}></i></span>Verify your email address</li>
                                                    <li className="step3 d-flex p-2"><span>3</span>Verify your mobile number</li>
                                                    <li className="step4 d-flex p-2"><span>4</span>Create Your Profile</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="seven" >
                                    <div className="sign-up-login">
                                        <div className="sign-up-login-inner">
                                            <div className="sign-up-login-logo">
                                                <img src={logo1} /><strong>Sign Up</strong>
                                            </div>
                                            <div className="signup-form-text">
                                                <span>
                                                    Mobile number verified! Now let’s complete your profile so you can start using Cleerli.
                                                </span>
                                            </div>
                                            <div className="sign-up-login-step sign-up-desktop">
                                                <ul style={{ "margin": "10px" }}>
                                                    <li className="step1 d-flex p-2"><span> <i className="bi bi-check text-success" style={{ fontSize: 30 }}></i></span>Create your account</li>
                                                    <li className="step2 d-flex p-2"><span><i className="bi bi-check text-success" style={{ fontSize: 30 }}></i></span>Verify your email address</li>
                                                    <li className="step3 d-flex p-2"><span><i className="bi bi-check text-success" style={{ fontSize: 30 }}></i></span>Verify your mobile number</li>
                                                    <li className="step4 d-flex p-2"><span>4</span>Create Your Profile</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="eight" >
                                    <div className="sign-up-login-inner">
                                        <div className="sign-up-login-logo">
                                            <img src={logo1} /><strong style={{ "fontWeight": "bolder" }}>Forgot Password</strong>
                                        </div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </div>
                    <div className="resp_log_caption">
                        <span className="mod-close" data-dismiss="modal" aria-hidden="true" onClick={handleCloseModal}><i className="ti-close"></i></span>
                        <div className="edlio_152">
                            <Row>
                                {(() => {
                                    if (key === "first" || key === "second") {
                                        return (
                                            <>
                                                <Col lg={12} className="mb-3 d-flex">
                                                    <Nav variant="nav-pills">
                                                        <Nav.Item>
                                                            <Nav.Link
                                                                eventKey="first"
                                                                href="#"
                                                                style={{ "padding": "0.3rem 0.1rem" }}
                                                                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                                                            >
                                                                <button className="btn btnLogin ms-5" data-toggle="pill" href="/login" role="tab" aria-controls="pills-login" aria-selected="true"><i className="fas fa-sign-in-alt mr-2"></i>Log In</button>
                                                            </Nav.Link>
                                                        </Nav.Item>
                                                    </Nav>
                                                    <Nav variant="second">
                                                        <Nav.Item>
                                                            <Nav.Link
                                                                eventKey="second"
                                                                href="#"
                                                                style={{ "padding": "0.3rem 0.5rem" }}
                                                                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                                                            >
                                                                <button className="btn btnSignIn me-0" data-toggle="pill" href="/register" role="tab" aria-controls="pills-signup" aria-selected="false"><i className="fas fa-user-plus mr-2"></i>Create an Account</button>
                                                            </Nav.Link>
                                                        </Nav.Item>
                                                    </Nav>
                                                </Col>
                                            </>
                                        )
                                    }
                                })()}

                                <Col lg={12}>
                                    <Tab.Content>
                                        {tab.login === true && (
                                            <>
                                                <Tab.Pane eventKey="first">
                                                    <Login getSignup={(value) => getSignup(value)} />
                                                </Tab.Pane>
                                            </>
                                        )}

                                        {tab.signup === true && (
                                            <Tab.Pane eventKey="second">
                                                <Register getSignup={(value) => getSignup(value)} />
                                                {/* <Email/> */}
                                            </Tab.Pane>
                                        )}

                                        {tab.email === true && (
                                            <>
                                                <Tab.Pane eventKey="third">
                                                    <Email getSignup={(value) => getSignup(value)} />
                                                </Tab.Pane>
                                            </>

                                        )}

                                        {tab.changeEmail === true && (
                                            <>
                                                <Tab.Pane eventKey="forth">
                                                    <ChangeEmail getSignup={(value) => getSignup(value)} />
                                                </Tab.Pane>
                                            </>
                                        )}

                                        {tab.mobileVerify === true && (
                                            <>
                                                <Tab.Pane eventKey="fifth">
                                                    <MobileVerify getSignup={(value) => getSignup(value)} />
                                                </Tab.Pane>
                                            </>

                                        )}

                                        {tab.changeMobile === true && (
                                            <>
                                                <Tab.Pane eventKey="sixth">
                                                    <ChangeMobile getSignup={(value) => getSignup(value)} />
                                                </Tab.Pane>
                                            </>

                                        )}

                                        {tab.profileVerify === true && (
                                            <>
                                                <Tab.Pane eventKey="seven">
                                                    {/* <h1>Profile</h1> */}
                                                    <ProfileConfirm />
                                                </Tab.Pane>
                                            </>

                                        )}

                                        {tab.forgotPassword === true && (
                                            <>
                                                <Tab.Pane eventKey="eight">
                                                    <ForgotPassword getSignup={(value) => getSignup(value)} />
                                                </Tab.Pane>
                                            </>
                                        )}
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Tab.Container>

            </div>

        </>
    )
}
export default ViewForm;