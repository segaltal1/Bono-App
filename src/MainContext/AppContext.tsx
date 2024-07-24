import React, {createContext, ReactNode, useState} from 'react';
import {CausesType} from "../Helpers/consts";

interface AppContextType {
    causes: CausesType[];
    setCauses: (data: CausesType[]) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const SignClientProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [causes, setCauses] = useState<any>();
    const [activeList, setActiveList] = useState<number[]>([]);


    const contextObject = {
        causes,
        setCauses,
        setActiveList,
        activeList,
    }


    return (
        <AppContext.Provider value={contextObject}>
            {children}
        </AppContext.Provider>
    );
};

export {SignClientProvider, AppContext};
