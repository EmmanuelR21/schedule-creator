import { Link } from "react-router-dom";
import GenericInput from "../components/genericComponents/GenericInput";

const SignUp: React.FC = (): JSX.Element => {


    return (
        <div className="w-full text-xl">
            <form className="flex m-auto w-96 h-96 flex-col justify-center items-center rounded-lg" onSubmit={() => { }}>
                <GenericInput placeholder="Username" />
                <GenericInput type="password" placeholder="Password" />
                <GenericInput type="password" placeholder="Confirm Password" />
                <button className="bg-red-500 rounded px-1 mb-10" type="submit">Create Account</button>
                Already have an account? <Link className="text-blue-700" to={"/login"}>Login here!</Link>
            </form>
        </div>
    )
}

export default SignUp;
