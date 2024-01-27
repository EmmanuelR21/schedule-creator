import ScheduleRows from "./ScheduleRows";

const ScheduleGrid: React.FC = (): JSX.Element => {
    return (
        <div className="grid grid-cols-4 m-6">
            <ScheduleRows />
        </div>
    );
}

export default ScheduleGrid;
