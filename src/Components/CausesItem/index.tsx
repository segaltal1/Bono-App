import React from 'react';
import PlusIcon from '../../assets/images/plus.svg'
import MarkIcon from '../../assets/images/markedIcon.svg'

type CauseItemProps = {
    id: number;
    title: string;
    style: React.CSSProperties;
    onClick: (id: nubmer) => void;
    isActive: boolean;
};

export const CauseItem = ({id, title, style, onClick, isActive}: CauseItemProps) => {


    return (
        <div className="cause-card" style={style} onClick={() => onClick(id)}>
            <div className="title">{title}</div>
            <div className="plus-wrapper">
                {isActive ?
                    <div className="mark-wrapper">
                        <img src={MarkIcon} alt=""/>
                    </div>
                    :
                    <img src={PlusIcon} alt=""/>
                }
            </div>
        </div>
    );
};

