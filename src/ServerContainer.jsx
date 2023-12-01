export default function ServerContainer({ name, index, clickFunction }) {
    return (
        <div className="border-black border-x border-y"
            key={index}
            accessKey={index}
            onClick={clickFunction}
        >
            {name},
        </div>
    )
}