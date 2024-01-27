import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import img from "../images/alter1.jpg";
import GenericAccountInputForm from "../components/genericComponents/GenericAccountInputForm";

const AccountForm: React.FC = (): JSX.Element => {
    return (
        <div className="flex text-xl justify-center items-center w-screen h-screen bg-[#063C50]">
            <img className="w-96 rounded-l-xl" src={img} alt="login-image" />
            <Routes>
                <Route path="/login" element={<GenericAccountInputForm rerouteTo="/form/signup" buttonText="Login" />} />
                <Route path="/signup" element={<GenericAccountInputForm buttonText="Create Account" />} />
                <Route path="*" element={<Navigate to={"/form/login"} />} />
            </Routes>
        </div>
    )
}

export default AccountForm;
