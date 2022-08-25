import React, { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import * as url from '../Urls/urls';
import '../../assets/css/styles.css';

const ChangeMobile = ({getSignup}) => {

   //Get LocalStorage data
    const data = JSON.parse(localStorage.getItem('user'))
    
    const handleMobileSubmit = (event) => {
      event.preventDefault()
      alert("Hii")
      getSignup('mobileVerify')
    }


    return (
        <>
              {/* <!-- Start: Change Phone --> */}
              <div className="tab-pane" id="user-registration-step2-change-mobile" role="tabpanel" aria-labelledby="pills-login-tab">
              <div className="login-form">
                <h2 className="text-center">Verify Mobile</h2>
                  <div className="signup-form-title-spacing">
                    <form id="user-registration-step2-change-email-form">
                      <div className="form-group">
                        <label>Mobile</label>
                        <div className="input-with-icon">
                          <input type="text" className="form-control" name="mobile"/>
                          <i className="ti-mobile"></i>
                        </div>
                        <div className="invalid-feedback mobile"></div>
                      </div>
                      <div className="form-group">
                        <div className="invalid-feedback nonFieldErrors"></div>
                      </div>
                      <div className="form-group btn-form-group">
                        <button type="submit" onClick={handleMobileSubmit} id="user-registration-step2-change-email-submit-btn"
                                className="btn btn-md full-width pop-login btn-form-green">
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
export default ChangeMobile;