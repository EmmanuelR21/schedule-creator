import { Route, Routes } from "react-router-dom";
import ScheduleCreator from "./pages/ScheduleCreator";

export default function App() {

  return (
    <>
      <h1>Testing</h1>
      <Routes>
        <Route path="/" element={<ScheduleCreator />} />
      </Routes>
    </>
  );
}