import { useEffect, useState } from "react";
import pb from "../db/pocketbase"
import ListOfServers from "./ListOfServers";

export default function NameSection() {
    const [servers, setServers] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const createdUser = {
            "username": e.target[0].value,
            "email": "",
            "emailVisibility": true,
            "password": "password123",
            "passwordConfirm": "password123",
            "name": e.target[0].value,
            "isServer": true
        }
        await pb.collection("users").create(createdUser)
        loadServers()
        e.target[0].value = "";
    }

    const loadServers = async () => {
        try {
            const data = await pb.collection("users").getFullList({
                fields: "name",
                filter: "isServer = true"
            })

            setServers(data)
        } catch {
            //this empty space is to avoid the vague error showing up in console, in the future I hope to figure this out, but can't prioritize this now.
        }
    }

    const handleWhitespace = (e) => {
        e.preventDefault()
        if (e.nativeEvent.data.includes(" ")) e.target.value = e.target.value.split(" ").join("")
    }

    useEffect(() => {
        loadServers()
    }, [])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Add Server:
                    <input className="border border-black rounded-lg ml-1" type="text" maxLength={20} onChange={handleWhitespace} />
                </label>
                <button type="submit">&gt;</button>
            </form>
            <ListOfServers list={servers} loadServers={loadServers} />
        </div>
    )
}