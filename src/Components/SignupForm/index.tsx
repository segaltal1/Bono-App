import React, {useContext, useState} from 'react';
import './styles.scss'
import PrimaryButton from "../Buttons/PrimaryButton";
import {Alert, Divider} from "@mui/material";
import {signUp} from "../../Helpers/api";
import {AppContext} from "../../MainContext/AppContext";

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [successMsg, setSuccessMsg] = useState<string>('')
    const {activeList} = useContext(AppContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!email || !firstName) {
            return;
        }

        const msg = await signUp(email, firstName, activeList)
        if (msg) {
            setSuccessMsg(msg)
            setEmail('')
            setFirstName('')
        }
    };

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit} className="d-flex flex-col gap-1">
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Firstname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />

                {successMsg && <Alert severity="success">
                    {successMsg}
                </Alert>}


            </form>
            <div className="submit-wrapper">
                <Divider className="divider"></Divider>
                <PrimaryButton
                    customStyle={{width: '346px'}}
                    onClick={handleSubmit}>
                    Save & Continue &#10230;
                </PrimaryButton>
            </div>
        </div>
    );
};

export default SignupForm;
