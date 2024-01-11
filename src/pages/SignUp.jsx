import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import GenericErrorText from "../components/GenericErrorText";
import GenericInput from "../components/GenericInput";

export default function SignUp() {
    const [userExists, setUserExists] = useState(false)
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const [username, password, confirmPassword] = [e.target[0].value, e.target[1].value, e.target[2].value]

        setUserExists(await doesUserExist(username))
        const res = await signUp(username, password, confirmPassword);
        const data = await res.json()

        if (data.error) return setError(data.error);
        else setError(false)
        navigate('/')
    }

    const doesUserExist = async (user) => {
        user = user || 'unused'
        const res = await fetch(`${import.meta.env.VITE_DEV_URL}/getUser/${user}`);
        const json = await res.json();
        return json.userExists;
    }

    const signUp = (user, pass, cnfrmPass) => {
        return fetch(`${import.meta.env.VITE_DEV_URL}/signUp`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                username: user,
                password: pass,
                confirmPassword: cnfrmPass
            })
        })
    }

    return (
        <div className="w-full text-xl">
            <form className="flex m-auto w-96 h-96 flex-col justify-center items-center rounded-lg" onSubmit={handleSubmit}>
                <GenericInput placeholder="Username" />
                <GenericInput type="password" placeholder="Password" />
                <GenericInput type="password" placeholder="Confirm Password" />
                {error && <GenericErrorText msg={error} />}
                {userExists && <GenericErrorText msg="Username already exists!" />}
                <button className="bg-red-500 rounded px-1 mb-10" type="submit">Create Account</button>
                Already have an account? <Link className="text-blue-700" to={"/login"}>Login here!</Link>
            </form>
        </div>
    )
}