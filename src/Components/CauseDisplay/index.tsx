import React from 'react';
import PlusIcon from '../../assets/images/plus.svg'
import MarkIcon from '../../assets/images/markedIcon.svg'

type CauseDisplayProps = {
    title: string;
    description: string;
    icon: string;
};

export const CauseDisplay = ({description, title, icon}: CauseDisplayProps) => {

    return (
        <div className="cause-display-wrapper">
            <p className="title">{title}</p>
            <div className="d-flex align-items-center gap-1">
                <p>{description}</p>
                <img src={icon} alt=""/>
            </div>
        </div>
    );
};

