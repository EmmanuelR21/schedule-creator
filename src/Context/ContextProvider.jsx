import { useState } from "react";
import Context from "./Context";
import createSundaysList from "../Functions/createSundaysList";

export default function ContextProvider({ children }) {
    const [buttonClicked, changeStateOfButtonClicked] = useState(false)
    const [weeks, setWeeks] = useState(0)
    const Sundays = createSundaysList(weeks)

    const values = {
        buttonClicked,
        changeStateOfButtonClicked,
        weeks,
        setWeeks,
        Sundays
    }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}