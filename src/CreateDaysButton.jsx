import { useContext } from "react";
import Context from "./Context/Context";

export default function CreateDaysButton() {
    const { weeks, changeStateOfButtonClicked } = useContext(Context)

    function createSchedule(e, numOfRows) {
        e.preventDefault();
        console.log(numOfRows)
        changeStateOfButtonClicked(true)
    }

    return (
        <label className="flex flex-col items-center">
            How many weeks would you like to create?
            <input className="border-x border-y border-black rounded" type="number" ref={weeks} />
            <button className="bg-blue-950 text-white rounded py-1 px-2 mt-4" onClick={(e) => createSchedule(e, weeks.current.value)}>Create Schedule</button>
        </label>
    )
}