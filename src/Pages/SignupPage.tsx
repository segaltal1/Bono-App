import React from 'react';
import {Divider} from "@mui/material";
import SignupForm from "../Components/SignupForm";
import GoogleIcon from '../assets/images/google.svg'
import {NavLink} from "react-router-dom";

export const SignupPage = () => {


    return (
        <div className="signup-page">
            <NavLink to={'/causes'} className="back-btn">
                &#10229;
            </NavLink>
            <h1>Let‘s save your portfolio</h1>
            <h2>You‘ll receive weekly impact reports from Bono. Your email is not shared with anyone! </h2>
            <div className="wrapper">
                <button className="google-btn">
                    <img width={20} height={20} src={GoogleIcon} alt=""/>
                    Continue With Google
                </button>
                <Divider className="divider">or</Divider>
                <SignupForm/>

            </div>
        </div>
    );
};

