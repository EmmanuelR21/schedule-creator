import { Route, Routes } from "react-router-dom";
import ScheduleCreator from "./pages/ScheduleCreator";
import React from "react";
import AccountForm from "./pages/AccountForm";

const App: React.FC = (): JSX.Element => {
    return (
        <>
            <Routes>
                <Route path="/" element={<ScheduleCreator />} />
                <Route path="/form/*" element={<AccountForm />} />
            </Routes>
        </>
    );
}

export default App;
