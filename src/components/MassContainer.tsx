import { useState } from "react"
import ServerInputContainer from "./ServerInputContainer"

const MassContainer: React.FC<{ isBilingual: boolean }> = ({ isBilingual }): JSX.Element => {
    const [bilingualServers, setBilingualServers] = useState<string[]>([])
    const [spanishServers, setSpanishServers] = useState<string[]>([])
    const [englishServers, setEnglishServers] = useState<string[]>([])

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

export default MassContainer;
