import ServerContainer from "./ServerContainer"

export default function ServerInputContainer({ servers, setServers }) {
    const handleDrag = (e) => e.preventDefault()

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
        <div className="flex border border-black mr-2 px-2 w-auto rounded-md" onDragOver={handleDrag} onDrop={handleDrop}>
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
        </div>
    )
}