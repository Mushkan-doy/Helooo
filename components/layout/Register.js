import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import * as url from '../Urls/urls';
import '../../assets/css/styles.css';

const Register = ({ getSignup }) => {

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const [input, setInput] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    console.log("Erorr",errors);
    const watchShowErrors = watch("agree", false); // you can supply default value as second argument

    // console.log("watchAllFields", watchShowAge);

    const handleRegisterSubmit = (input, event) => {
        // event.preventDefault();
        setIsLoading(true)
        console.log("Add Account = ", input)
        const userData = {
            first_name: input.first_name,
            last_name: input.last_name,
            email: input.email,
            mobile: input.mobile,
            password: input.password,
            confirm_password: input.confirm_password,
        };
        localStorage.removeItem("user");
        // http://192.168.2.61:8000/auth-api/registration/"
        // https://retoolapi.dev/82wBFd/data/
        axios.post("http://192.168.2.61:8000/auth-api/registration/", userData)
            .then((response) => {
                console.log("insert = ", response.data.data)
                setInput(response.data.data)
                reset();
                localStorage.setItem("user", JSON.stringify(response.data.data))
                getSignup('email')
                setIsLoading(false)

            }).catch(error => {
                console.log(error)
                setIsLoading(false)
            });


    }
    // console.log('errors', errors);

    return (
        <>

            <Form className="form" onSubmit={handleSubmit(handleRegisterSubmit)} noValidate >
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <Form.Group className="mb-1" controlId="first_name">
                            <Form.Label className="label">First Name</Form.Label>
                            <div className="input-with-icon">
                                <Form.Control type="text"
                                    name="first_name"
                                    {...register('first_name', { required: true, maxLength: 20 })}
                                    className={`inputbox  ${errors.first_name ? 'is-invalid' : ''}`}
                                />
                                <i className="ti-user"></i>
                            </div>

                            <small className="text-danger" style={{ "fontSize": ".875rem" }}>
                                {watchShowErrors && (errors?.first_name && "This field may not be blank.")}
                            </small>

                        </Form.Group>
                    </div>

                    <div className="form-group col-md-6">
                        <Form.Group className="mb-1" controlId="last_name">
                            <Form.Label className="label">Last Name</Form.Label>
                            <div className="input-with-icon">
                                <Form.Control type="text"
                                    name="last_name"
                                    {...register('last_name', { required: "This field may not be blank.", maxLength: 20 })}
                                    className={`inputbox form-control ${errors.last_name ? 'is-invalid' : ''}`}
                                />
                                <i className="ti-user"></i>
                            </div>
                            <small className="text-danger" style={{ "fontSize": ".875rem" }}>
                                {watchShowErrors && (errors?.last_name && errors.last_name.message)}
                            </small>
                        </Form.Group>
                    </div>

                    <div className="form-group col-md-12">
                        <Form.Group className="mb-1" controlId="email">
                            <Form.Label className="label">Email ID</Form.Label>
                            <div className="input-with-icon">
                                <Form.Control type="text"
                                    name="email"
                                    {...register('email',
                                        {
                                            required: "This field may not be blank.",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid Email Address"
                                            },
                                            maxLength: 20
                                        })}
                                    className={`inputbox form-control ${errors.email ? 'is-invalid' : ''}`}
                                />
                                <i className="ti-email"></i>
                            </div>
                            <small className="text-danger" style={{ "fontSize": ".875rem" }}>
                                {watchShowErrors && (errors?.email && errors.email.message)}
                            </small>
                        </Form.Group>
                    </div>

                    <div className="form-group col-md-12">
                        <Form.Group className="mb-1" controlId="mobile">
                            <Form.Label className="label">Mobile</Form.Label>
                            <div className="input-with-icon">
                                <Form.Control type="text"
                                    name="mobile"
                                    {...register('mobile',
                                        {
                                            required: "This field may not be blank.",
                                            pattern: {
                                                value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. ]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                                                message: "Invalid Mobile No",
                                            }
                                        })}
                                    className={`inputbox form-control ${errors.mobile ? 'is-invalid' : ''}`}
                                />
                                <i className="ti-mobile"></i>
                            </div>
                            <small className="text-danger" style={{ "fontSize": ".875rem" }}>
                                {watchShowErrors && (errors?.mobile && errors.mobile.message)}
                            </small>
                        </Form.Group>
                    </div>

                    <div className="form-group col-md-6">
                        <Form.Group className="mb-1" controlId="password">
                            <Form.Label className="label">Password</Form.Label>
                            <div className="input-with-icon">
                                <Form.Control type="password"
                                    name="password"
                                    {...register('password',
                                        {
                                            required: "This field may not be blank.",
                                            pattern: {
                                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                                message: "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
                                            }
                                        })}
                                    className={`inputbox form-control ${errors.password ? 'is-invalid' : ''}`}
                                />
                                <i className="ti-unlock"></i>
                            </div>
                            <small className="text-danger" style={{ "fontSize": ".875rem" }}>
                                {watchShowErrors && (errors?.password && errors.password.message)}
                            </small>
                        </Form.Group>
                    </div>

                    <div className="form-group col-md-6">
                        <Form.Group className="mb-1" controlId="confirm_password">
                            <Form.Label className="label">Confirm Password</Form.Label>
                            <div className="input-with-icon">
                                <Form.Control type="password"
                                    name="confirm_password"
                                    {...register('confirm_password', { required: "This field may not be blank.", maxLength: 20 })}
                                    className={`inputbox form-control ${errors.confirm_password ? 'is-invalid' : ''}`}
                                />
                                <i className="ti-key"></i>
                            </div>
                            <small className="text-danger" style={{ "fontSize": ".875rem" }}>
                                {watchShowErrors && (errors?.confirm_password && errors.confirm_password.message)}
                            </small>
                        </Form.Group>
                    </div>

                    <div className="form-group col-md-12">
                        <div className="eltio_ol9" style={{ "marginLeft": "20px" }}>
                            <div className="eltio_k1">
                                <span htmlFor="agree" className="checkbox-custom-label checkbox-custom-css">
                                    <label className="checkbox-custom-label-info">
                                        <Form.Check
                                            inline
                                            name="agree"
                                            type="checkbox"
                                            id="agree">
                                            <Form.Check.Input name="agree" type="checkbox"
                                                {...register('agree', { required: "You must agree before submitting." })}
                                                className={`form-check-input ${errors.agree ? 'isInvalid' : ''}`}
                                            /><span className="text-dark fw-bold ms-3">By completing the sign up process and using our website, you agree to the Cleerli</span>
                                            <a href="/" className="font-weight-bold text-success cursor" >
                                                <span> Privacy Policy</span>
                                            </a>
                                            & <a href="/" className="font-weight-bold text-success cursor">
                                                <span> Terms of Use</span>
                                            </a>.


                                        </Form.Check>

                                        <small className="text-danger" style={{ "fontSize": ".875rem" }}>
                                            {errors?.agree && errors.agree.message}
                                        </small>

                                    </label>
                                </span>
                            </div>
                        </div>
                        {/* <div className="invalid-feedback" id="agreeError">
                            You must agree before submitting.
                        </div> */}
                    </div>

                    <div className="form-group col-md-12 btn-form-group mt-5">

                        <Button type="submit" name="btnsubmit" className="btn btn-md full-width pop-register btn-form-green" id="registration-submit">
                            {isLoading ? (
                                <>
                                    <div className="spinner-border spinner-border-custom" role="status"></div>
                                    <span className="">Create Account</span>
                                </>
                            ) : (
                                <span className="">Create Account</span>
                            )}


                        </Button>
                    </div>
                </div>
            </Form>



        </>
    )
}
export default Register;