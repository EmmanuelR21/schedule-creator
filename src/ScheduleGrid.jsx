import { useContext } from "react";
import Context from "./Context/Context";
import createSundaysList from "./Functions/createSundaysList";

export default function ScheduleGrid() {
  const { weeks } = useContext(Context)
  const Sundays = createSundaysList(weeks.current.value)

  return (
    <div className="grid grid-cols-4 m-6">
      {
        Sundays.map((date) =>
            <>
              <div className="border-r-0 border-l border-y border-black p-2">{ date }</div>
              <div className="col-span-3 border-x border-y border-black p-2"></div>
            </>
        )
      }
    </div>
  );
}