import { useState } from "react"
import ServerContainer from "./ServerContainer"

export default function MassContainer() {
    const [servers, setServers] = useState([])
    const [isBilingual, setMassType] = useState(false)

    const handleDrag = (e) => {
        e.preventDefault()
    }

    const handleDrop = (e) => {
        const data = e.dataTransfer.getData('alter-server')
        setServers([...servers, data])
    }

    const handleClick = (e) => {
        e.preventDefault()
        const newArr = [...servers]
        newArr.splice(e.target.accessKey, 1)
        setServers(newArr)
    }

    return (
        <div className="flex col-span-3 border-x border-y border-black p-4">
            {
                !isBilingual ?
                    <div className="flex border border-black px-2 w-auto rounded-md" onDragOver={handleDrag} onDrop={handleDrop}>
                        {
                            servers.map((server, i) => {
                                return (
                                    <ServerContainer name={server} index={i} clickFunction={handleClick} />
                                )
                            })
                        }
                    </div>
                    :
                    <>
                        <div>
                        </div>
                        <div>
                        </div>
                    </>
            }
        </div>
    )
}