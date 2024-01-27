import React from "react";
import { Link } from "react-router-dom";
import GenericInput from "../components/genericComponents/GenericInput";

const Login: React.FC = (): JSX.Element => {


    return (
        <div className="w-full text-xl">
            <form onSubmit={() => { }} className="flex m-auto w-96 h-96 flex-col justify-center items-center rounded-lg">
                <GenericInput type="text" placeholder="Username" />
                <GenericInput type="password" placeholder="Password" />
                <button type="submit" className="bg-red-500 rounded px-1 mb-10">Login</button>
                Don't have an account? <Link className="text-blue-700" to={"/signup"}>Sign-up!</Link>
            </form>
        </div>
    )
}

export default Login;
