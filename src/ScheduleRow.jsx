import { useState } from "react"

export default function ScheduleRow({ date }) {
    const [servers, setServers] = useState([])

    function handleDrop(e) {
        const data = e.dataTransfer.getData('alter-server')
        setServers([...servers, data])
    }

    return (
        <>
            <div className="border-r-0 border-l border-y border-black p-2">{date}</div>
            <div className="col-span-3 border-x border-y border-black p-2" onDragOver={e => e.preventDefault()} onDrop={handleDrop}>{servers}</div>
        </>
    )
}