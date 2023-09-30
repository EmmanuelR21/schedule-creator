import { useContext } from "react";
import Context from "./Context/Context";

export default function ScheduleGrid() {
  const { weeks } = useContext(Context)

  return (
    <div className="grid grid-cols-4 m-6">
      {
        Array(+weeks.current.value).fill(0).map(x => 
            <>
              <div className="border-r-0 border-l border-y border-black p-2"></div>
              <div className="col-span-3 border-x border-y border-black p-2"></div>
            </>
        )
      }
    </div>
  );
}