import React, {useContext, useEffect, useMemo} from "react";
import {AppContext} from "../MainContext/AppContext";
import {getCauses} from "../Helpers/api";
import {CauseItem} from "../Components/CausesItem";
import {LinearProgress} from "@mui/material";
import {CauseDisplay} from "../Components/CauseDisplay";
import SkeletonCards from "../Components/Skeleton";
import {colorMapper} from "../Helpers/consts";
import PrimaryButton from "../Components/Buttons/PrimaryButton";
import {useNavigate} from "react-router-dom";


export const CausesPage = () => {
    const {causes, setCauses, activeList, setActiveList} = useContext(AppContext);
    const navigate = useNavigate();

    const handleSelectedCard = (id: number) => {
        setActiveList(prevList => {
            if (prevList.includes(id)) {
                return prevList.filter(item => item !== id);
            } else {
                if (prevList.length < 3) {
                    return [...prevList, id];
                } else {
                    return prevList;
                }
            }
        });
    }

    useEffect(() => {
        getCauses().then(setCauses)
    }, [])

    const lastSelectedItem = useMemo(() => {
        if (!activeList.length) return;
        return causes.find(item => item.id === activeList[activeList.length - 1])

    }, [activeList, causes])


    return (
        <div className="causes-page">
            <div className="wrapper">
                <h1>Let‘s build your nonprofit portfolio</h1>
                <h2>Pick the 3 causes that you mostly care about</h2>
                {
                    !causes ?
                        <div className="causes-wrapper">
                            <SkeletonCards/>
                        </div>
                        :
                        <div className="causes-wrapper">
                            {causes?.map((item, index) => (
                                <CauseItem key={item.id}
                                           isActive={activeList.includes(item.id)}
                                           onClick={handleSelectedCard}
                                           title={item.title}
                                           id={item.id}
                                           style={{backgroundColor: colorMapper[index]}}/>
                            ))}
                        </div>
                }
                {
                    lastSelectedItem && <CauseDisplay
                        title={lastSelectedItem.title}
                        description={lastSelectedItem.description}
                        icon={lastSelectedItem.icon}
                    />
                }


                <div className="progress-bar-wrapper" hidden={!causes}>
                    <h6>{activeList.length} / 3 causes added</h6>

                    <LinearProgress style={{
                        height: '9px',
                        borderRadius: '30px',
                        backgroundColor: 'rgb(167, 202, 237)',
                        '& .MuiLinearProgressBar': {
                            borderRadius: '30px',
                            backgroundColor: '#4a90e2', // Color of the progress bar
                        },
                    }} variant="determinate" value={(activeList.length / 3) * 100}/>

                    <div className="text-center">
                        <PrimaryButton
                            customStyle={{marginTop: '1rem', width: '240px'}}
                            disabled={activeList.length < 3}
                            onClick={() => {
                                navigate('/signup')
                            }}>
                            Continue &#10230;
                        </PrimaryButton>
                    </div>
                </div>

            </div>
        </div>
    );
};

