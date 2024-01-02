import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import GenericErrorText from "../components/GenericErrorText";
import GenericInput from "../components/GenericInput";

export default function SignUp() {
    const [passwordsMatch, setPasswordsMatch] = useState(true)
    const [passwordTooShort, setPasswordTooShort] = useState(false)
    const [userExists, setUserExists] = useState(false)
    const [missingInput, setMissingInput] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const [username, password, confirmPassword] = [e.target[0].value, e.target[1].value, e.target[2].value]
        console.log(username, password.length, confirmPassword.length)

        if (!username || !password || !confirmPassword) return setMissingInput(true)
        setMissingInput(false)
        if (await doesUserExist(username)) return setUserExists(true);
        setUserExists(false)
        if (password !== confirmPassword) return setPasswordsMatch(false);
        setPasswordsMatch(true)
        if (password.length < 8 || confirmPassword.length < 8) return setPasswordTooShort(true);
        setPasswordTooShort(false)

        signUp(username, password);
        navigate('/')
    }

    const doesUserExist = async (user) => {
        const res = await fetch(`${import.meta.env.VITE_DEV_URL}/getUser/${user}`);
        const json = await res.json();
        return json.userExists;
    }

    const signUp = (user, pass) => {
        fetch(`${import.meta.env.VITE_DEV_URL}/signUp`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                username: user,
                password: pass
            })
        })
    }

    return (
        <div className="w-full text-xl">
            <form className="flex m-auto w-96 h-96 flex-col justify-center items-center rounded-lg" onSubmit={handleSubmit}>
                <GenericInput placeholder="Username" />
                <GenericInput type="password" placeholder="Password" />
                <GenericInput type="password" placeholder="Confirm Password" />
                {missingInput && <GenericErrorText msg="Please fill in all fields!" />}
                {userExists && <GenericErrorText msg="That username is already taken!" />}
                {
                    !passwordsMatch &&
                    <GenericErrorText msg="Your passwords do not match!" />
                    ||
                    passwordTooShort &&
                    <GenericErrorText msg="Your password must be atleast 8 characters!" />
                }
                <button className="bg-red-500 rounded px-1 mb-10" type="submit">Create Account</button>
                Already have an account? <Link className="text-blue-700" to={"/login"}>Login here!</Link>
            </form>
        </div>
    )
}