import { useRef, useState } from "react";
import Context from "./Context";

export default function ContextProvider({ children }) {
    const [buttonClicked, changeStateOfButtonClicked] = useState(false)
    const weeks = useRef(0);

    const values = {
        buttonClicked,
        changeStateOfButtonClicked,
        weeks
    }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}