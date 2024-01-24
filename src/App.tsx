import { Route, Routes } from "react-router-dom";
import ScheduleCreator from "./pages/ScheduleCreator";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import React from "react";

const App: React.FC = (): JSX.Element => {
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

export default App;
