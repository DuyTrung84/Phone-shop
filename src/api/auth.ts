import { SignupForm, SigninForm } from "../models";
import insntace from "./insntace";


export const signup = (data: SignupForm) => {
    const uri = "/signup"
    return insntace.post(uri, data)
}


export const signin = (data: SigninForm) => {
    const uri = "/signin"
    return insntace.post(uri, data)
}