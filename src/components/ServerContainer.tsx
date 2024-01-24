const ServerContainer: React.FC<{ name: string; index: number; clickFunction?: React.MouseEventHandler<HTMLLIElement> }> = ({ name, index, clickFunction }): JSX.Element => {
    const handleDragStart = (e: any) => e.dataTransfer.setData('altar-server', e.target.innerText);

    return (
        <li className="w-fit px-1 border-black border"
            draggable
            onDragStart={handleDragStart}
            key={index}
            accessKey={index + ""}
            onClick={clickFunction}
        >
            {name}
        </li>
    )
}

export default ServerContainer;
