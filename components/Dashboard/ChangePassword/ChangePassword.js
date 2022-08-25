import React from "react";

const ChangeProfilePassword = () => {
    return (
        <>
            {/* <section class="gray main-wrapper-element"> */}
                <div class="container container-eye-retina">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="dashboard-body">

                                <div class="dashboard-wraper custom-page-form-1">

                                    {/* <!-- Basic Information --> */}
                                    <div class="frm_submit_block">
                                        <h4>Change Your Password</h4>
                                        <form method="post" id="changePasswordForm">
                                            <div class="frm_submit_wrap">
                                                <div class="form-row">

                                                    <div class="form-group col-lg-12 col-md-6">
                                                        <label>Old Password</label>
                                                        <input type="password" class="form-control" id="old_password" name="old_password"/>
                                                            <div class="invalid-feedback" id="oldPasswordError"></div>
                                                    </div>

                                                    <div class="form-group col-md-6">
                                                        <label>New Password</label>
                                                        <input type="password" class="form-control" id="password" name="password"/>
                                                            <div class="invalid-feedback" id="passwordError"></div>
                                                    </div>

                                                    <div class="form-group col-md-6">
                                                        <label>Confirm password</label>
                                                        <input type="password" class="form-control" id="confirm_password" name="confirm_password"/>
                                                            <div class="invalid-feedback" id="confirmPasswordError"></div>
                                                    </div>

                                                    <div class="form-group col-lg-12 col-md-12">
                                                        <button class="btn btn-theme" type="button" id="change_password_submit">
                                                            {/* <div class="spinner-border spinner-border-custom" role="status">
                                                            </div> */}
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
                        {/* <div id="snackbar">Your Password Changed sucessfully!</div> */}
                    </div>
                </div>
            {/* </section> */}
        </>
    )
}
export default ChangeProfilePassword;