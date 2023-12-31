import { useContext } from "react"
import Context from "../Context/Context"
import ScheduleRow from "./ScheduleRow"

export default function ScheduleRows() {
    const { Sundays } = useContext(Context)

    return (
        Sundays.map((date, i) => <ScheduleRow key={i} date={date} />)
    )
}