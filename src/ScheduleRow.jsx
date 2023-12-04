import { useState } from "react"
import MassContainer from "./MassContainer"

export default function ScheduleRow({ date }) {
    const [isBilingual, setMassType] = useState(false)
    const changeTypeOfMass = (e) => {
        e.target.value == "Non-Bilingual" ? setMassType(false) : setMassType(true)
    }

    return (
        <>
            <div className="border-r-0 border-l border-y border-black p-2">
                {date}
                <select className="w-4 bg-white">
                    <option value="Non-Bilingual" onClick={changeTypeOfMass}>Non-Bilingual</option>
                    <option value="Bilingual" onClick={changeTypeOfMass}>Bilingual</option>
                </select>
            </div>
            <MassContainer isBilingual={isBilingual} />
        </>
    )
}