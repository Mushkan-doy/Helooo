import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import * as url from '../Urls/urls';
import '../../assets/css/styles.css';

const ChangeEmail = ({ getSignup }) => {

  //Get LocalStorage data
  const [user, setUser] = useState('');
  //OTP UseState
  const [emailChange, setEmail] = useState({
    email: '',
    otp_type: 1,
    user: '',
    errorMsg: ''
  });
  // const [isLoading, setISLoading] = useState(false);

  useEffect(() => {
    console.log('---------------Change Email------------');
    const data = localStorage.getItem('user');
    setUser(JSON.parse(data));
  }, []);

  useEffect(() => {
    console.log(user);
    if (user !== '') {
      setEmail({
        ...emailChange,
        user: typeof user !== 'undefined' && user !== '' && user !== null ? user.id : ''
      });
    }
  }, [user]);

  //OTP Email HandleChange
  const handleOnChange = (e) => {
    setEmail({ ...emailChange, [e.target.name]: e.target.value })
    console.log("otp_code = ", e.target.value);
}

  const handleChangeEmailSubmit = (event) => {
    event.preventDefault()
    // setISLoading(true)
    console.log("State OTP = ", emailChange);
    axios.post("http://192.168.2.61:8000/auth-api/my-profile/", emailChange)
        .then((response) => {
            console.log(response.data.data)
            console.log("Change Email Successfully")
            // getSignup('email');
        }).catch(error => {
            console.log(error)
            setEmail({ errorMsg: 'Something Went Wrong' })
        });
  }


  return (
    <>
      {/* <!-- Start: Change Email --> */}
      <div className="tab-pane" id="user-registration-step2-change-email" role="tabpanel" aria-labelledby="pills-login-tab">
        <div className="login-form">
          <h2 className="text-center">Verify Email</h2>
          <div className="signup-form-title-spacing">
            <form id="user-registration-step2-change-email-form" onSubmit={handleChangeEmailSubmit}>
              <div className="form-group">
                <label>Email</label>
                <div className="input-with-icon">
                  <input 
                  type="text" 
                  className="form-control" 
                  name="email" 
                  onChange={handleOnChange}/>
                  <i className="ti-email"></i>
                </div>
                <div className="invalid-feedback email"></div>
              </div>
              <div className="form-group">
                <div className="invalid-feedback nonFieldErrors"></div>
              </div>
              <div className="form-group btn-form-group">
                <button type="submit" id="user-registration-step2-change-email-submit-btn" className="btn btn-md full-width pop-login btn-form-green">
                  {/* <div className="spinner-border spinner-border-custom" role="status">
                          </div> */}
                  <span>Go Ahead</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- End: Change Email --> */}
    </>
  )
}
export default ChangeEmail;