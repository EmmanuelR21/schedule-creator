import { useState } from "react"
import ServerInputContainer from "./ServerInputContainer"

export default function MassContainer({ isBilingual }) {
    const [bilingualServers, setBilingualServers] = useState([])
    const [spanishServers, setSpanishServers] = useState([])
    const [englishServers, setEnglishServers] = useState([])

    if (isBilingual) {
        return (
            <div className="flex col-span-3 border border-black p-2 items-center">
                B:<ServerInputContainer servers={bilingualServers} setServers={setBilingualServers} />
            </div >
        )
    }

    return (
        <div className="flex col-span-3 border border-black p-2 items-center">
            S:<ServerInputContainer servers={spanishServers} setServers={setSpanishServers} />
            E:<ServerInputContainer servers={englishServers} setServers={setEnglishServers} />
        </div >
    )
}