import MassContainer from "./MassContainer"

export default function ScheduleRow({ date }) {
    const changeTypeOfMass = (e) => {
        console.log(e.target.value)
    }

    return (
        <>
            <div className="border-r-0 border-l border-y border-black p-2">
                {date}
                <select className="w-4 bg-white">
                    <option value="Non-Bilingual">Non-Bilingual</option>
                    <option value="Bilingual" onClick={changeTypeOfMass}>Bilingual</option>
                </select>
            </div>
            <MassContainer />
        </>
    )
}