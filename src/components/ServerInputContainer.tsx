import ServerContainer from "./ServerContainer"

const ServerInputContainer: React.FC<{ servers: string[]; setServers: React.Dispatch<React.SetStateAction<string[]>> }> = ({ servers, setServers }): JSX.Element => {
    const handleDrag = (e: any) => e.preventDefault();

    const handleDrop = (e: any) => {
        const data = e.dataTransfer.getData('altar-server')
        const tempSet: Set<any> = new Set([...servers, data])
        setServers([...tempSet])
    }

    const handleClick = (e: any) => {
        e.preventDefault()
        const newArr: string[] = [...servers]
        newArr.splice(e.target.accessKey, 1)
        setServers(newArr)
    }

    return (
        <ul className="flex border border-black mr-2 px-2 rounded-md h-6 ml-1" onDragOver={handleDrag} onDrop={handleDrop}>
            {
                servers.map((server: string, i: number) =>
                    <ServerContainer
                        name={server}
                        key={i}
                        index={i}
                        clickFunction={handleClick} />)
            }
        </ul>
    )
}

export default ServerInputContainer;
