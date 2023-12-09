export default function ServerContainer({ name, index, clickFunction, servers, setServers }) {
    const handleDragStart = (e) => {
        e.dataTransfer.setData('alter-server', e.target.innerText)
    }

    return (
        <div className="border-black border-x border-y"
            draggable
            onDragStart={handleDragStart}
            key={index}
            accessKey={index}
            onClick={clickFunction}
        >
            {name}
        </div>
    )
}