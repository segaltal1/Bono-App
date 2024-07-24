import React from 'react';
import RoundedButton from "../Buttons/OutlinedButton";
import OutlinedButton from "../Buttons/OutlinedButton";
import { useNavigate } from "react-router-dom";


type HeaderProps = {
    children: React.ReactNode;
};

export const Header = () => {
    const navigate = useNavigate();


    return (
        <div className="header">
            <div className="logo" onClick={() => {navigate('/')}}>
                <img src="https://app.bono.so/images/main_bono_logo.png" alt=""/>
            </div>

            <div>
                <OutlinedButton className="outlined" onClick={() => {navigate('/signup')}}>
                    Login
                </OutlinedButton>
            </div>
        </div>
    );
};

