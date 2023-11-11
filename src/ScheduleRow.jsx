import { useState } from "react"

export default function ScheduleRow({ date }) {
    const [servers, setServers] = useState([])

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
        <>
            <div className="border-r-0 border-l border-y border-black p-2">{date}</div>
            <div className="flex col-span-3 border-x border-y border-black p-2" onDragOver={handleDrag} onDrop={handleDrop}>{servers.map((server, index) => <div key={index} accessKey={index} onClick={handleClick}>{server},</div>)}</div>
        </>
    )
}