import { useState } from "react";
import Context from "./Context";
import createSundaysList from "../Functions/createSundaysList";

export default function ContextProvider({ children }) {
    const [buttonClicked, changeStateOfButtonClicked] = useState(false)
    const [weeks, setWeeks] = useState(0)
    const [startDate, setStartDate] = useState(undefined)
    const Sundays = createSundaysList(weeks, startDate)

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