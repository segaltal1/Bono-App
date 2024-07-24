import React from 'react';
import {Button} from '@mui/material';
import './styles.scss';

const OutlinedButton: React.FC = ({children, className, onClick}) => {

    return (
        <Button onClick={onClick} className={`${className} rounded-btn`} variant="contained" color="primary">
            {children}
        </Button>
    );
};

export default OutlinedButton;
