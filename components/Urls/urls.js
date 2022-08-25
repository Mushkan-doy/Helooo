//base URL
export const baseURL = "http://192.168.2.61:8000/auth-api/"

//Login and Register URL
export const loginURL = baseURL + "login/"
export const logoutURL = baseURL + "logout/"
export const registerURL = baseURL + "registration/"

//Email & Mobile Verify and resend OTP URL
export const emailVerifyURL = baseURL + "otp/verify/"
export const emailResend = baseURL + "otp/resend/"

//Forgot Password URL
export const ForgotPassword = baseURL + "forgetpassword/"
export const PasswordVerify = baseURL + "otp/forgetpassowd/verify/"
export const ChangePassword = baseURL + "changepassword/"