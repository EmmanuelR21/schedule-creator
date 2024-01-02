import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="w-full text-xl">
            <form className="flex m-auto w-96 h-96 flex-col justify-center items-center rounded-lg">
                <input className="border border-black w-64 mb-5 px-2" type="text" placeholder="Username" />
                <input className="border border-black w-64 mb-5 px-2" type="password" placeholder="Password" />
                <button className="bg-red-500 rounded px-1 mb-10">Login</button>
                Don't have an account? <Link className="text-blue-700" to={"/signup"}>Sign-up!</Link>
            </form>
        </div>
    )
}