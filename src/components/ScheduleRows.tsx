import { useContext } from "react"
import Context from "../Context/Context"
import ScheduleRow from "./ScheduleRow"

const ScheduleRows: () => JSX.Element[] | undefined = () => {
    const { Sundays } = useContext(Context)

    return (
        Sundays?.map((date: string, i: number) => <ScheduleRow key={i} date={date} />)
    )
}

export default ScheduleRows;
