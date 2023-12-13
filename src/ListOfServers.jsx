export default function ListOfServers({ list }) {
    const handleDragStart = (e) => e.dataTransfer.setData('altar-server', e.target.innerText)

    return (
        <ul>
            <li className="w-fit px-2 border-black border" draggable key={100} onDragStart={handleDragStart}>Simon</li>
            <li className="w-fit px-2 border-black border" draggable key={101} onDragStart={handleDragStart}>John</li>
            <li className="w-fit px-2 border-black border" draggable key={102} onDragStart={handleDragStart}>Thomas</li>
            {list.map((obj, i) =>
                <li
                    className="w-fit px-2 border-black border"
                    draggable
                    onDragStart={handleDragStart}
                    key={i}
                    accessKey={i}
                >
                    {obj.name}
                </li>)}
        </ul>
    )
}