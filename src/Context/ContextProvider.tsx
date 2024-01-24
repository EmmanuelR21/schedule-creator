import { useState } from "react";
import Context from "./Context";
import createSundaysList from "../Functions/createSundaysList";

type ContextProviderProps = {
    children: React.ReactNode
}

const ContextProvider = ({ children }: ContextProviderProps): JSX.Element => {
    const [buttonClicked, changeStateOfButtonClicked] = useState<boolean>(false)
    const [weeks, setWeeks] = useState<number>(0)
    const [startDate, setStartDate] = useState<string>("")
    const Sundays: string[] = createSundaysList(weeks, startDate)

    const values = {
        buttonClicked,
        changeStateOfButtonClicked,
        weeks,
        setWeeks,
        setStartDate,
        Sundays
    }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;
