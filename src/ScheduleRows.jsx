import { useContext } from "react"
import Context from "./Context/Context"

export default function ScheduleRows() {
    const { Sundays } = useContext(Context)

    return (
        Sundays.map(date =>
            <>
                <div className="border-r-0 border-l border-y border-black p-2">{date}</div>
                <div className="col-span-3 border-x border-y border-black p-2"></div>
            </>
        )
    )
}