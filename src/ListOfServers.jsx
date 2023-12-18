import ServerContainer from "./ServerContainer"
const servers = [
    "Peter",
    "Andrew",
    "Big James",
    "John",
    "Lil' James",
    "Thaddeus",
    "Nathaniel",
    "Philip",
    "Thomas",
    "Matthew",
    "Simon Z.",
    "Matthias"
]

export default function ListOfServers() {

    return (
        <ul className="flex flex-wrap m-auto w-72 justify-between">
            {
                servers.map((name, index) => <ServerContainer name={name} index={index} key={index} />)
            }
        </ul>
    )
}