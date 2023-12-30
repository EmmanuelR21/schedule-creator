import { useContext } from "react";
import ScheduleGrid from "../ScheduleGrid";
import CreateScheduleForm from "../CreateScheduleForm";
import Context from "../Context/Context";
import ListOfServers from "../ListOfServers";

export default function ScheduleCreator() {
    const { buttonClicked } = useContext(Context)

    return (
        <>
            <h1 className="flex justify-center p-5">Schedule</h1>
            <div>
                {buttonClicked ? <ScheduleGrid /> : <CreateScheduleForm />}
                <ListOfServers />
            </div>
        </>
    )
}