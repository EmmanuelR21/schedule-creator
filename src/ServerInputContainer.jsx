import ServerContainer from "./ServerContainer"

export default function ServerInputContainer({ servers, setServers }) {
    const handleDrag = (e) => e.preventDefault()

    const handleDrop = (e) => {
        const data = e.dataTransfer.getData('altar-server')
        const tempSet = new Set([...servers, data])
        setServers([...tempSet])
    }

    const handleClick = (e) => {
        e.preventDefault()
        const newArr = [...servers]
        newArr.splice(e.target.accessKey, 1)
        setServers(newArr)
    }

    return (
        <ul className="flex border border-black mr-2 px-2 rounded-md" onDragOver={handleDrag} onDrop={handleDrop}>
            {
                servers.map((server, i) =>
                    <ServerContainer
                        name={server}
                        key={i}
                        index={i}
                        clickFunction={handleClick}
                        servers={servers}
                        setServers={setServers} />)
            }
        </ul>
    )
}