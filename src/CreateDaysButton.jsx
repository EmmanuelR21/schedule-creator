import { useContext } from "react";
import Context from "./Context/Context";

export default function CreateDaysButton() {
    const { setWeeks, changeStateOfButtonClicked } = useContext(Context)

    const handleSubmit = (e) => {
        changeStateOfButtonClicked(true)
        setWeeks(e.target[0].value)
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
            How many weeks?
            <input className="border border-black rounded w-20" type="number" min={1} max={24} />
            <button type="submit" className="bg-blue-950 text-white rounded py-1 px-2 mt-4">Create Schedule</button>
        </form>
    )
}