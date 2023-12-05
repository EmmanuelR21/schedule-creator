import { useState } from "react"
import ServerInputContainer from "./ServerInputContainer"

export default function MassContainer({ isBilingual }) {
    const [bilingualServers, setBilingualServers] = useState([])
    const [spanishServers, setSpanishServers] = useState([])
    const [englishServers, setEnglishServers] = useState([])

    return (
        <div className="flex col-span-3 border-x border-y border-black p-2">
            {
                isBilingual ?
                    <ServerInputContainer servers={bilingualServers} setServers={setBilingualServers} />
                    :
                    <>
                        <ServerInputContainer servers={spanishServers} setServers={setSpanishServers} />
                        <ServerInputContainer servers={englishServers} setServers={setEnglishServers} />
                    </>
            }
        </div>
    )
}