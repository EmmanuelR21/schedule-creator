import { useContext, useState } from "react";
import ScheduleGrid from "./ScheduleGrid";
import CreateDaysButton from "./CreateDaysButton";
import Context from "./Context/Context";

export default function App() {
  const { buttonClicked } = useContext(Context)

  return (
    <>
      <h1 className="flex justify-center p-5">Schedule</h1>
      {buttonClicked ? <ScheduleGrid /> : <CreateDaysButton />}
    </>
  );
}