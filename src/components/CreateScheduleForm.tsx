import { useContext } from "react";
import Context from "../Context/Context";

const CreateScheduleForm: React.FC = (): JSX.Element => {
    const { setWeeks, setStartDate, changeStateOfButtonClicked } = useContext(Context)

    const handleSubmit = (e: any): void => {
        setStartDate?.(e.currentTarget[0].value)
        setWeeks?.(e.currentTarget[1].value)
        changeStateOfButtonClicked?.(true)
    }

    return (
        <form onSubmit={handleSubmit} className="flex m-auto w-60 mb-2 flex-wrap justify-between">
            Start from:<input className="border border-black rounded ml-2" type="date" />
            How many weeks:<input className="ml-2 border border-black rounded w-14" type="number" min={1} max={24} />
            <button type="submit" className="bg-blue-950 text-white rounded py-1 px-2">Create Schedule</button>
        </form>
    )
}

export default CreateScheduleForm;
