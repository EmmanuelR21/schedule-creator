import { createContext } from "react";

type ContextType = {
    buttonClicked?: boolean;
    changeStateOfButtonClicked?: React.Dispatch<React.SetStateAction<boolean>>;
    weeks?: number;
    setWeeks?: React.Dispatch<React.SetStateAction<number>>;
    setStartDate?: React.Dispatch<React.SetStateAction<string>>;
    Sundays?: string[];
}

const Context: React.Context<ContextType> = createContext<ContextType>({})

export default Context;
