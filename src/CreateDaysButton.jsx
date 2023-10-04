import { useContext } from "react";
import Context from "./Context/Context";

export default function CreateDaysButton() {
    const { setWeeks, changeStateOfButtonClicked } = useContext(Context)

    function handleSubmit(e) {
        changeStateOfButtonClicked(true)
        setWeeks(e.target[0].value)
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
            How many weeks would you like to create?
            <input className="border-x border-y border-black rounded" type="number" />
            <button type="submit" className="bg-blue-950 text-white rounded py-1 px-2 mt-4">Create Schedule</button>
        </form>
    )
}