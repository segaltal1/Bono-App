import React from 'react';
import {Button} from '@mui/material';
import './styles.scss';

const PrimaryButton: React.FC = ({children, className, onClick, customStyle, disabled}) => {

    return (
        <Button disabled={disabled} style={customStyle} onClick={onClick} className={`${className} primary-btn`}
                variant="contained"
                color="primary">
            {children}
        </Button>
    );
};

export default PrimaryButton;
