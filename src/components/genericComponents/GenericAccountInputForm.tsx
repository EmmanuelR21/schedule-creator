import React from "react";
import { Link } from "react-router-dom";
import GenericInput from "./GenericInput";

const GenericAccountInputForm: React.FC<{ rerouteTo?: string; buttonText?: string; }> = ({ rerouteTo = "/form/login", buttonText = "Submit" }): JSX.Element => {
    return (
        <form className="flex w-96 h-96 flex-col justify-center items-center rounded-r-xl shadow-2xl bg-[#d0453e]" onSubmit={() => { }}>
            <h2 className="font-bold mb-4 text-black text-2xl">
                {rerouteTo == "/form/login" ? "Sign Up" : "Log In"}
            </h2>
            <GenericInput placeholder="Username" />
            <GenericInput type="password" placeholder="Password" />
            {rerouteTo == "/form/login" && <GenericInput type="password" placeholder="Confirm Password" />}
            <button className="bg-black text-white rounded w-64 px-1 mb-10" type="submit">
                {buttonText}
            </button>
            {rerouteTo == "/form/login" ? "Already have an account?" : "Don't have an account?"}
            <Link className="text-blue-700" to={`${rerouteTo}`}>
                {rerouteTo == "/form/login" ? "Login!" : "Sign up!"}
            </Link>
        </form>
    );
};

export default GenericAccountInputForm;
