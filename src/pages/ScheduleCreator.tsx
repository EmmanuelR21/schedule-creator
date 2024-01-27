import { useContext } from "react";
import ScheduleGrid from "../components/ScheduleGrid";
import CreateScheduleForm from "../components/CreateScheduleForm";
import Context from "../Context/Context";
import ListOfServers from "../components/ListOfServers";

const ScheduleCreator: React.FC = (): JSX.Element => {
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

export default ScheduleCreator;
