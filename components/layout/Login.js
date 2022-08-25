import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { event } from "jquery";

const Login = ({ getSignup }) => {
    const navigate = useNavigate()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    //Login SetState
    const [input, setInput] = useState([])

    //Error SetState
    const [error, setErrors] = useState([])

    //Set Loader 
    const [isLoading, SetIsLoading] = useState(false);

    //call forgot password component
    const handlePassword = (event) => {
        event.preventDefault();
        getSignup('forgotPassword')
    }
    const handleLoginSubmit = (input, event) => {
        SetIsLoading(true)
        console.log("Login = ", input)
        const userData = {
            email: input.email,
            password: input.password
        }
        axios.post("http://192.168.2.61:8000/auth-api/login/", userData)
            .then((response) => {
                console.log("Response Login", response.data.data.user);
                console.log("Login Successfully")
                localStorage.setItem("user", JSON.stringify(response.data.data.user))
                localStorage.setItem("token", JSON.stringify(response.data.data.token))
                navigate('/my-property/')
            })
            .catch((error) => {
                // console.log("-------",response.response.data.error.email);

                if (error.response) {
                    console.log("Erorr Backend", error.response.data.error.non_field_errors);
                    setErrors(error.response.data.error.non_field_errors)
                }
            })
        console.log("Submit")

    }



    return (
        <>
            <div className="login-form">
                <Form className="form Loginform" onSubmit={handleSubmit(handleLoginSubmit)} noValidate>
                    <Form.Group className="form-group">
                        <Form.Label className="lable">Email</Form.Label>
                        <div className="input-with-icon">
                            <FormControl
                                type="email"
                                name="email"
                                {...register('email', { required: true, maxLength: 20 })}
                                className={`inputbox  ${errors.email ? 'is-invalid' : ''}`} />
                            <i className="ti-user"></i>
                        </div>
                        <small className="text-danger" style={{ "fontSize": ".875rem" }}>
                            {errors?.email && "This field may not be blank."}
                        </small>
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Form.Label className="lable">Password</Form.Label>
                        <div className="input-with-icon">
                            <FormControl
                                type="password"
                                name="password"
                                {...register('password', { required: true, maxLength: 20 })}
                                className={`inputbox  ${errors.password ? 'is-invalid' : ''}`} />
                            <i className="ti-unlock"></i>
                        </div>
                        <small className="text-danger" style={{ "fontSize": ".875rem" }}>
                            {errors?.password && "This field may not be blank."}
                        </small>
                        <div className="text-danger" style={{ "fontSize": ".875rem" }}>
                            {
                                error.length > 0 && (
                                    <div className="error">
                                        <p>{error}</p>
                                    </div>
                                )}
                        </div>
                    </Form.Group>

                    <div className="form-group">
                        <div className="eltio_ol9">
                            <div className="eltio_k1">
                                <input id="dd" className="checkbox-custom" name="dd" type="checkbox" />
                                <Form.Label htmlFor="dd" className="checkbox-custom-label">Remember Me</Form.Label>
                            </div>
                            <div className="eltio_k2">
                                <a href="/" onClick={handlePassword} >Lost Your Password?</a>
                            </div>
                        </div>
                    </div>



                    <div className="form-group">
                        <Button type="submit" className="btn btn-md full-width pop-login">
                            {isLoading ? (
                                <>
                                    <div className="spinner-border spinner-border-custom" role="status"></div>
                                    <span className="">Log In</span>
                                </>
                            ) : (
                                <span className="">Log In</span>
                            )}
                        </Button>
                    </div>

                </Form>
            </div>
        </>
    )
}
export default Login;