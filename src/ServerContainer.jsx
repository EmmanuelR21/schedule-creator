export default function ServerContainer({ name, index, clickFunction, servers, setServers }) {
    const handleDragStart = (e) => {
        e.dataTransfer.setData('alter-server', e.target.innerText)
    }

    const handleDrag = (e) => {
        e.preventDefault()
        const newArr = [...servers]
        newArr.splice(e.target.accessKey, 1)
        setServers(newArr)
    }

    return (
        <div className="border-black border-x border-y"
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDrag}
            key={index}
            accessKey={index}
            onClick={clickFunction}
        >
            {name}
        </div>
    )
}