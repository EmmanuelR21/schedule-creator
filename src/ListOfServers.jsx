import pb from "../db/pocketbase"

export default function ListOfServers({ list, loadServers }) {
    const handleDragStart = (e) => {
        e.dataTransfer.setData('alter-server', e.target.innerText)
    }

    const handleRemove = async (e) => {
        e.preventDefault()
        const { id } = await pb.collection("users").getFirstListItem(`name = "${e.target.innerText}"`, {
            fields: "id"
        })
        await pb.collection("users").delete(id)
        loadServers()
    }

    return (
        <ul>
            {list.map((obj, i) => <li onClick={handleRemove} className="w-fit px-2 focus:border-red-600 focus:border" key={i} draggable onDragStart={handleDragStart}>{obj.name}</li>)}
        </ul>
    )
}