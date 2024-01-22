import { Route, Routes } from "react-router-dom";
import ScheduleCreator from "./pages/ScheduleCreator";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ScheduleCreator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}