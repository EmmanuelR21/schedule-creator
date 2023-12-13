export default function ServerContainer({ name, index, clickFunction }) {
    const handleDragStart = (e) => {
        e.dataTransfer.setData('alter-server', e.target.innerText)
    }

    return (
        <li className="w-fit px-2 border-black border"
            draggable
            onDragStart={handleDragStart}
            key={index}
            accessKey={index}
            onClick={clickFunction}
        >
            {name}
        </li>
    )
}