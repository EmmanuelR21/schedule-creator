import ServerContainer from "./ServerContainer"

const servers: string[] = [
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

const ListOfServers: React.FC = (): JSX.Element => {
    return (
        <ul className="flex flex-wrap m-auto w-72 justify-between">
            {
                servers.map((name: string, index: number) => <ServerContainer name={name} index={index} key={index} />)
            }
        </ul>
    )
}

export default ListOfServers;
