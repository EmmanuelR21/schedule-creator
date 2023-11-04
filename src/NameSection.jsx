import { useEffect, useState } from "react";
import pb from "../db/pocketbase"

export default function NameSection() {
    const [servers, setServers] = useState([])

    const handleSubmit = (e) => {
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
        pb.collection("users").create(createdUser)
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

    useEffect(() => {
        loadServers()
    })

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Add Server:
                    <input className="border-x border-y border-black rounded" type="text" />
                </label>
                <button type="submit">sent</button>
            </form>
            <ul>
                {servers.map((obj, i) => <li key={i} draggable onDragStart={e => e.dataTransfer.setData('alter-server', e.target.innerText)}>{obj.name}</li>)}
            </ul>
        </div>
    )
}