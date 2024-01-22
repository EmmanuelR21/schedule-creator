import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GenericErrorText from "../components/GenericErrorText";

export default function Login() {
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        const [username, password] = [e.target[0].value, e.target[1].value]

        const res = await login(username, password)
        const data = await res.json()

        if (data.error) return setError(data.error)
        setError(false)

        if (data.userExists) navigate("/")
    }

    const login = (user, pass) => {
        user = user || "unused"
        pass = pass || "0i0"
        return fetch(`${import.meta.env.VITE_DEV_URL}/login/${user}/${pass}`)
    }

    return (
        <div className="w-full text-xl">
            <form onSubmit={handleLogin} className="flex m-auto w-96 h-96 flex-col justify-center items-center rounded-lg">
                <input className="border border-black w-64 mb-5 px-2" type="text" placeholder="Username" />
                <input className="border border-black w-64 mb-5 px-2" type="password" placeholder="Password" />
                {error && <GenericErrorText msg={error} />}
                <button type="submit" className="bg-red-500 rounded px-1 mb-10">Login</button>
                Don't have an account? <Link className="text-blue-700" to={"/signup"}>Sign-up!</Link>
            </form>
        </div>
    )
}