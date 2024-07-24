import React from 'react';
import PrimaryButton from "../Components/Buttons/PrimaryButton";
import {Link} from "@mui/material";
import { useNavigate } from "react-router-dom";


export const HomePage = () => {
    const navigate = useNavigate();

    const items = [
        {number: 1, text: 'Select your causes'},
        {number: 2, text: 'Get your nonprofit portfolio'},
        {number: 3, text: 'Make a difference with just $5 a month'},
        {number: 4, text: 'Receive weekly impact updates'},
    ];


    return (
        <div className="home-page d-flex flex-col">
            <div className="wrapper">
                <h1>Welcome to Bono!</h1>
                <h2>The easiest way to donate to causes you care about and see your impact</h2>

                <div className="list">
                    {items.map((item) => (
                        <div key={item.number} className="d-flex align-items-center gap-1">
                            <div className="number">{item.number}</div>
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>


                <div className="button-wrapper">

                    <PrimaryButton onClick={() => {navigate('/causes')}}>
                        Let’s Start &#10230;
                    </PrimaryButton>

                    <div className="policy-links">
                        By clicking Let‘s Start you agree to our&nbsp;
                        <Link href="https://bono.so/tc/" target="_blank" style={{minWidth: 'max-content'}}>
                            Terms and Conditions
                        </Link>
                        &nbsp;and&nbsp;
                        <Link href="https://bono.so/privacy-policy/" target="_blank" style={{minWidth: 'max-content'}}>
                            Privacy Policy
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

