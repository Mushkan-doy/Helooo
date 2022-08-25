import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const ForgotPassword = ({ getSignup }) => {

//Get LocalStorage data
const [user, setUser] = useState('');
  //Password input
  const [input,setInput] = useState({
    email : '',
  });

//   useEffect(() => {
//       console.log("---------Forgot Password---------");
//       const data = localStorage.getItem('user');
//     console.log("ls Data",JSON.parse(data));
//       setUser(JSON.parse(data));
//   }, []);

//   useEffect(() => {
//     console.log(user);
//     if (user !== '') {
//         setInput({
//             ...input,
//             user: typeof user !== 'undefined' && user !== '' && user !== null ? user.id : ''
//         });
//     }
// }, [user]);


  //Email handleChange
  const handleChange = (e) =>{
    setInput({...input, [e.target.name]: e.target.value})
  }

  const handlePasswordSubmit = (event) => {
    event.preventDefault()
  console.log("forgot password = ",input);
    axios.post("http://192.168.2.61:8000/auth-api/forgetpassword/",input)
      .then((response) => {
        console.log("ForgotPassword = ", response.data.data);
        localStorage.setItem('user',JSON.stringify(response.data.data))
        getSignup('email')
      })
  }
  return (
    <>
      {/* <!-- Start: Forgot Password --> */}
      <div className="tab-pane" id="user-registration-step2-change-email" role="tabpanel" aria-labelledby="pills-login-tab">
        <div className="login-form">
          <h2 className="text-center">Forgot Password</h2>
          <p className="text-center mb-4">Don't worry, Please Enter your registered Email here.</p>
          <div className="signup-form-title-spacing">
            <form id="user-registration-step2-change-email-form" onSubmit={handlePasswordSubmit}>
              <div className="form-group">
                <label>Email</label>
                <div className="input-with-icon">
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    onChange={handleChange} />
                  <i className="ti-email"></i>
                </div>
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
      {/* <!-- End: Forgot Password  --> */}
    </>
  )
}
export default ForgotPassword;